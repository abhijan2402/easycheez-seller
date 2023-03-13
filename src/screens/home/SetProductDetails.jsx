import { useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { useSafeAreaFrame } from "react-native-safe-area-context";
import Toast from "../../components/common/Toast";
import { UpdateProductPrice } from "../../services/UpdatePrice";

const{width,height}=Dimensions.get('window')

const SetProductDetails=()=>{
    const [newPrice,setNewPrice]=useState('');
    const route=useRoute();
    const {selectedItem}=route.params;
    const [loading,setLoading]=useState(false)

    const childRef = useRef(null);

    const [toastColorState, setToastColorState] = useState('rgba(41,250,25,1)');
    const [toastTextColorState, setToastTextColorState] = useState('black');
    const [toastMessage, setToastMessage] = useState('');

    const updateProductPrice=async()=>{
        try {
            if(newPrice==='')
                throw "Please enter price"
            setLoading(true)
            const response=await UpdateProductPrice(selectedItem.id,newPrice) 
            if(response){
                setToastMessage("Price Changed");
                setToastTextColorState("black")
                setToastColorState("rgba(41,250,25,1)")
                childRef.current.showToast();
                setNewPrice('')
            }
            else{
                setToastMessage("Price Not updated");
                setToastTextColorState("white")
                setToastColorState("red")
                childRef.current.showToast();
            }
            setLoading(false)
        } catch (error) {
            setToastMessage(error);
            setToastTextColorState("white")
            setToastColorState("red")
            childRef.current.showToast();
        }   
    }
    return(
        <>
            <Toast
                toastColor={toastColorState}
                toastTextColor={toastTextColorState}
                toastMessage={toastMessage}
                ref={childRef}
            />
            <ScrollView style={{felx:1}} >
                <View style={styles.container}>
                    <Text style={{color:"black",fontWeight:"bold",fontSize:25}}>Edit Product</Text>
                    <View style={{alignItems:"center"}}>
                        <View style={{backgroundColor:"#EDEDED",width:width-40,height:width-40,margin:10,borderRadius:10,alignItems:"center",justifyContent:"center"}}>
                            <Image
                                source={{uri:selectedItem.ProImage}}
                                style={{width:'50%',height:'50%',resizeMode:"contain",borderRadius:20}}            
                            />
                        </View>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:15,width:width-50}}>
                            {selectedItem.ProductName}
                        </Text>

                        <View style={{width:width-50,paddingVertical:10,}}>
                            <Text style={{color:"#808080",fontWeight:"600"}}>edit Price</Text>
                            <TextInput 
                                placeholder="Price"  
                                placeholderTextColor={"black"} 
                                style={styles.input}
                                editable={true}
                                onChangeText={price=>setNewPrice(price)}
                                keyboardType={"numeric"}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonBody} onPress={updateProductPrice}>
                        {   loading ?
                            <ActivityIndicator size={25} color={"white"} /> :
                            <Text style={{color:"white",fontWeight:"bold"}}>Set price</Text>
                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        justifyContent: 'space-around',
        alignItems:"center",
        backgroundColor:"white",
        height
    },
    buttonBody:{
        backgroundColor:"#F05656",
        width:width-80,
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    input:{
        backgroundColor:"white",
        width:width/3,
        height:40,
        borderWidth:2,
        borderColor:"#F05656",
        borderRadius:10,
        paddingHorizontal:10,
        fontWeight:"bold",
        marginTop:5,
        color:"black",
        fontWeight:"bold"
    }
})

export default SetProductDetails;
import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const{width,height}=Dimensions.get('window')

const SetProductDetails=()=>{
    const route=useRoute();
    const {selectedItem}=route.params;
    useEffect(()=>{console.log(selectedItem);},[])
    return(
        <ScrollView style={{felx:1}} >
            <View style={styles.container}>
                <Text style={{color:"black",fontWeight:"bold",fontSize:25}}>Edit Product</Text>
                <View style={{alignItems:"center"}}>
                    <View style={{backgroundColor:"#EDEDED",width:width-40,height:width-40,margin:10,borderRadius:10,alignItems:"center",justifyContent:"center"}}>
                        <Image
                            source={{uri:selectedItem.productImage}}
                            style={{width:'50%',height:'50%',resizeMode:"contain",borderRadius:20}}            
                        />
                    </View>
                    <Text style={{color:"black",fontWeight:"bold",fontSize:15,width:width-50}}>
                        {selectedItem.name}
                    </Text>

                    <View style={{width:width-50,paddingVertical:10,}}>
                        <Text style={{color:"#808080",fontWeight:"600"}}>edit Price</Text>
                        <TextInput 
                            placeholder="Price"  
                            placeholderTextColor={"black"} 
                            style={styles.input}
                            editable={true}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonBody}>
                    <Text style={{color:"white",fontWeight:"bold"}}>
                        Set price
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        marginTop:5
    }
})

export default SetProductDetails;
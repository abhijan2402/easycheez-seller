import React, { useState , forwardRef, useRef,useImperativeHandle, useEffect } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Modal,
    Button,
    Pressable,
    Image
} from 'react-native';
const {width}=Dimensions.get("window");

const AddresModal=forwardRef((props,ref)=>{
    const [showmodal,setShowModal]=useState(false);
    useImperativeHandle(ref, () => ({
        showAddress(){
            setShowModal(true)
        }
    }));  
    return (
        <Modal visible={showmodal} animationType='slide' transparent={true}>
            <View style={styles.modeOuter}>
                <View style={styles.innnerModel}>
                    <Pressable onPress={()=>setShowModal(false)} style={{position:"absolute",right: 10,top:10}}>
                        <Image style={{width:20,height:20,}} source={{uri:"https://cdn-icons-png.flaticon.com/128/1617/1617543.png"}} />   
                    </Pressable> 
                    <Text style={{color:"black",fontWeight:"bold",marginVertical: 10,fontSize:20,textAlign:"center"}}>Store Details</Text>
                    <View style={{marginVertical:10}}>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:12}}>Shop Name </Text>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>{props.storeData.storeName}</Text>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:12}}>Shop Description</Text>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>{props.storeData.AboutThStore}</Text>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:12}}>Shop Address</Text>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>{props.storeData.Address}</Text>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:12}}>Shop Landark</Text>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>{props.storeData.LandMark}</Text>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:12}}>Mobile</Text>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>{props.storeData.MobileNum}</Text>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent:"space-between",padding:5}}>
                        <View style={{marginVertical:10}}>
                            <Text style={{color:"black",fontWeight:"bold",fontSize:12}}>Open At</Text>
                            <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>{props.storeData.OpeningTime}</Text>
                        </View>
                        <View style={{marginVertical:10}}>
                            <Text style={{color:"black",fontWeight:"bold",fontSize:12}}>Close At</Text>
                            <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>{props.storeData.closeTime}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>       
    )
})
const styles=StyleSheet.create({
    modeOuter: {
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innnerModel: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: width - 20,
        padding:20,
        elevation:10,
        shadowColor:"white"
    },
})

export default AddresModal;
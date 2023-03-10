import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
const {width,height}=Dimensions.get('window');

const OrderButton=({title,backgroundcolor,textColor,checkForActivOrders,bordercolor})=>{
    return(
        <TouchableOpacity style={[styles.buttonBody,{backgroundColor:backgroundcolor,borderColor:bordercolor}]} onPress={()=>checkForActivOrders()}>
            <Text style={{fontWeight:"bold",color:textColor}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    buttonBody:{
        width:width/2.5,
        paddingVertical:12,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        borderWidth:1.5
    }
})

export default OrderButton;

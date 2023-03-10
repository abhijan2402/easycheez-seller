import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const {width}=Dimensions.get("window");

const CustomButton=({title,onpress})=>{
    return(
        <TouchableOpacity style={styles.buttonBody} onPress={onpress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
} 
const styles=StyleSheet.create({
    buttonBody:{
        width:width/2.5,
        height:40,
        backgroundColor:"#F05656",
        alignItems:"center",
        justifyContent: 'center',
        borderRadius:10
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
    }
})

export default CustomButton;
import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function AddPro({onpress}) {
  return (
    <TouchableOpacity style={styles.MainView} onPress={onpress}>
        <Image source={require("../../assets/WhitePlus-removebg.png")} style={styles.Image}/>
        <Text style={styles.Text}>Products</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    MainView:{
        backgroundColor:"#6CE74D",
        height:windoHeight/3,
        marginVertical:11,
        width:windoWidth/2.6,
        marginHorizontal:10,
        borderRadius:9,
        justifyContent:"center",
        alignItems:"center",
        elevation:5
    },
    Image:{
        width:windoWidth/5,
        height:windoWidth/5
    },
    Text:{
        fontSize:18,
        color:"white",
        fontWeight:"700",
        marginVertical:5
    }
})
export default AddPro
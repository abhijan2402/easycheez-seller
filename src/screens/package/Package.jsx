import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import Header from '../../components/Home/Header';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import { commoneStyles } from '../../styles/commonStyles';
function Package() {
  return (
    <ScrollView style={styles.MainView}>
        <Header title="Package"/>
        <View>
            <Image source={{uri:"https://5.imimg.com/data5/SELLER/Default/2021/4/KT/ZR/TX/42561548/c851b0b6-491f-41f5-9664-aae78a3d9183-1000x1000.jpg"}} style={styles.Image}/>
        </View>
        <View style={{marginTop:35}}>
            <View style={styles.ImageSettlement}>
             <Text style={styles.LabelName}>Product Name</Text>
             <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/1828/1828925.png"}} style={styles.Plusicon}/>

            </View>
             <TextInput style={[commoneStyles.textField,{borderColor:"#F05656"}]} placeholder='Add Product Name ' />
        </View>
        <View>
             <Text style={styles.LabelName}>Price</Text>
             <TextInput style={[commoneStyles.textField,{borderColor:"#F05656"}]} placeholder='Add Price ' />
        </View>
        <TouchableOpacity style={styles.Btn}>
            <Text style={styles.BtnText}>Proceed</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    Image:{
        width:windoWidth,
        height:windoHeight/2,
    },
    MainView:{
        width:windoWidth,
        height:windoHeight,
        backgroundColor:"white",
        flex:1
    },
    LabelName: {
        fontSize: 13,
        color: "black",
        marginTop: 10,
        marginVertical: 2,
        marginHorizontal:25,
        fontWeight:"600"
    },
    Btn:{
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 25,
        backgroundColor: "#F05656",
        paddingVertical: 10,
        borderRadius: 8
    },
    BtnText:{
        color: "white",
        fontWeight: "700",
        fontSize: 17
    },
    Plusicon:{
        width:20,
        height:20,
        marginHorizontal:25
    },
    ImageSettlement:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})
export default Package
import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function ProductCard({title,bg,Img,onpress  }) {
    return (
        <Pressable style={[styles.MainView,{backgroundColor:bg}]} onPress={onpress}>
            <View style={{marginVertical:10,display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                <Image source={{uri:Img}} style={styles.Image}/>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/545/545682.png"}} style={styles.Image1}/>
            </View>
            <View style={{marginVertical:20,display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                <Text style={styles.MainSeeText}>{title}</Text>
                <Text style={styles.MainSeeText}>25</Text>
            </View>
        </Pressable>
      )
    }
const styles = StyleSheet.create({
    Image:{
        width:35,
        height:35
    },
    Image1:{
        width:25,
        height:25
    },
    MainView:{
        width:windoWidth/2,
        borderRadius:8,
        marginVertical:10,
        marginLeft:10,
        elevation:5
    },
    MainSeeText:{
        fontSize:18,
        color:"black",
        fontWeight:"700"
    }
})

export default ProductCard
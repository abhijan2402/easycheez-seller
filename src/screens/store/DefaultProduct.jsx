import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import PackageData from '../../data/PackageData';
function DefaultProduct() {
    const navigation=useNavigation()
    return (
        <ScrollView style={styles.MainView}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Default Product</Text>
            </View>
            <View style={styles.ProView}>
                {
                    PackageData.map((item) => (
                        <View key={item.id}  style={{ marginVertical: 10, elevation:10,backgroundColor:"white",marginHorizontal: 4, borderRadius: 8,width:windoWidth/2.2,}} >
                            <View style={styles.ImageView}>
                                <Image source={{ uri: item.imageUrl }} style={styles.ImagePro} />
                            </View>
                            <Text style={styles.ProText}>
                                {item.name.substring(0,35)}....
                            </Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between",borderTopWidth:1.5 }}>
                                <TouchableOpacity style={[styles.AddPriceBtn,{borderRightWidth:1}]} onPress={()=>navigation.navigate("editproduct",{selectedItem:item})}>
                                    <Text style={{ fontSize: 12, color: "black",fontWeight:"bold" }}>Add Price</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.AddPriceBtn,{borderLeftWidth:1}]} >
                                    <Text style={{ color: "skyblue", fontSize: 12,fontWeight:"bold" }}>Add Offer</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    MainView: {
        backgroundColor: "white",
        height: windoHeight,
        width: windoWidth
    },
    Header: {
        height: windoHeight / 11,
        justifyContent: "center",
        alignItems: "center"
    },
    HeaderText: {
        fontSize: 20,
        color: "black",
        fontWeight: "700"
    },
    ImagePro: {
        width: '100%',
        height: windoHeight / 4.7,
        borderRadius: 10,
        // margin: 10,
    },
    ProView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 5,
        justifyContent: "center",
    },
    ImageView: {
    },
    AddPriceBtn: {
        width:'50%',
        padding:5,
        alignItems: 'center',
        justifyContent: 'center',
        height:40
    },
    ProText: {
        marginVertical: 10,
        color: 'black',
        fontWeight:"bold",
        paddingHorizontal:10,
    }


})

export default DefaultProduct
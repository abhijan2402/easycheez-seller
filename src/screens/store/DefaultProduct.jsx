import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import DropDownPicker from 'react-native-dropdown-picker';
import PackageData from '../../data/PackageData';
function DefaultProduct() {
    const Data = [
        {
            id: "1",
            image: "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpg",
        },
        {
            id: "2",
            image: "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpg",
        },
        {
            id: "3",
            image: "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpg",
        },
        {
            id: "4",
            image: "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpg",
        },


    ]
    return (
        <ScrollView style={styles.MainView}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Default Product</Text>
            </View>
            <View style={styles.ProView}>
                {
                    PackageData.map((item) => (
                        <View key={item.id} style={{ marginVertical: 10, borderWidth: 0.8, marginHorizontal: 4, borderRadius: 8 }} >
                            <View style={styles.ImageView}>
                                <Image source={{ uri: item.imageUrl }} style={styles.ImagePro} />
                            </View>
                            <Text style={styles.ProText}>{item.name}</Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <TouchableOpacity style={[styles.AddPriceBtn, { borderRightWidth: 1 }]}>
                                    <Text style={{ fontSize: 12, color: "black" }}>Add Price</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.AddPriceBtn}>
                                    <Text style={{ color: "skyblue", fontSize: 12 }}>Add Offer</Text>
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
        width: windoWidth / 2.5,
        height: windoHeight / 4.7,
        borderRadius: 10,
    },
    ProView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 5,
        justifyContent: "center"
    },
    ImageView: {
        // borderWidth: 1
    },
    AddPriceBtn: {
        // borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopWidth: 1,
        paddingHorizontal: 13
    },
    ProText: {
        marginVertical: 10,
        width: windoWidth / 2.6,
        alignSelf: "center",
        color: 'black'

    }


})

export default DefaultProduct
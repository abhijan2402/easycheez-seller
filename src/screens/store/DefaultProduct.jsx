import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import DropDownPicker from 'react-native-dropdown-picker';
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
        <View style={styles.MainView}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Default Product</Text>
            </View>
            <View style={styles.ProView}>
                {
                    Data.map((item) => (
                        <View key={item.id} >
                            <View style={styles.ImageView}>
                                <Image source={{ uri: "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpg" }} style={styles.ImagePro} />
                            </View>
                            <Text>Hi</Text>
                            <View>
                                <TouchableOpacity>
                                    <Text>Add Price</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text>Add Offer</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MainView: {
        backgroundColor: "white",
        height: windoHeight,
        width: windoWidth
    },
    Header: {
        borderWidth: 1,
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
        width: windoWidth / 2.4,
        height: windoHeight / 5
    },
    ProView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 10,
        justifyContent: "center"
    },
    ImageView: {
        borderWidth: 1
    }


})

export default DefaultProduct
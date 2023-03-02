import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import Header from '../../components/Home/Header'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Account({navigation}) {
    return (
        <View style={{ width: windoWidth, height: windoHeight, backgroundColor: "white" }}>
            <Header title="Account" />
            <View style={styles.MainView}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png" }} style={styles.Image} />
                <Text style={styles.NameText}>Abhishek</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 20, marginVertical: 10 }}>Options</Text>
                <View style={[styles.OptiionView, { marginTop: 25 }]}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/5643/5643764.png" }} style={styles.LogoImage} />
                    <Text style={styles.OptionText} onPress={()=>{navigation.navigate('Orders')}}>Orders</Text>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={styles.LogoImage} />
                </View>
                <View style={styles.OptiionView}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/684/684908.png" }} style={styles.LogoImage} />
                    <Text style={styles.OptionText}>Address</Text>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={styles.LogoImage} />
                </View>
                <View style={styles.OptiionView}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/868/868681.png" }} style={styles.LogoImage} />
                    <Text style={styles.OptionText}>Help</Text>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={styles.LogoImage} />
                </View>
                <View style={styles.OptiionView}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/8822/8822225.png" }} style={styles.LogoImage} />
                    <Text style={styles.OptionText} onPress={()=>{navigation.navigate('Subscription')}}>Subscription</Text>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={styles.LogoImage} />
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Image: {
        width: 70,
        height: 70
    },
    LogoImage: {
        width: 40,
        height: 40
    },
    MainView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20
    },
    NameText: {
        fontSize: 25,
        fontWeight: "700",
        color: "black",
        marginHorizontal: 20
    },
    OptiionView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 30,
        marginVertical: 10
    },
    OptionText: {
        fontSize: 22,
        fontWeight: "600",
        color: "black",
        // borderWidth: 1,
        width: windoWidth / 1.6,
        paddingHorizontal: 15
    },
})
export default Account
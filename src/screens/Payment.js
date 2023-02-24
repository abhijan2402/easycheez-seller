import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import Header from '../components/Home/Header';
// import Header from '../../components/Home/Header'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Payment() {
    return (
        <View style={styles.MainView}>
            <Header title="Payment" />
            <View>
                <Text style={styles.PayMadeName}>Payment by Abhishek</Text>
                <Text style={styles.PayOption}>Payment Options</Text>
                <View style={styles.logoView}>
                    <Image source={{ uri: "https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png" }} style={styles.PayLogo} />
                </View>
                <View style={styles.logoView}>
                    <Image source={{ uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png" }} style={styles.PayLogoPhonepe} />
                </View>
                {/* <View style={{ display: "flex", flexDirection: "row",  marginHorizontal: 25, height: windoHeight / 2, borderWidth: 1 }}>
                    <View>
                        <Text>600</Text>
                        <Text>View Price Details</Text>
                    </View>
                    <TouchableOpacity>
                        <Text>Continue</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    },
    PayLogo: {
        width: 55,
        height: 30
    },
    PayLogoPhonepe: {
        width: 30,
        height: 30
    },
    PayMadeName: {
        fontSize: 23,
        color: "black",
        fontWeight: "700",
        marginHorizontal: 20
    },
    PayOption: {
        fontSize: 15,
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 20
    },
    logoView: {
        marginHorizontal: 20,
        marginVertical: 20
    }
})
export default Payment
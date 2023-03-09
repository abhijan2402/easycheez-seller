import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import auth from '@react-native-firebase/auth';
const ForgotPass = ({ navigation }) => {
    const [email, setemail] = useState("")

    const ResetLink = () => {
        try {
            console.log(email)
            if (email === "") {
                throw "Please Enter Email";
            }
            if (!EmailValidate(email)) {
                throw "Please enter a valid Email"
            }
            auth().sendPasswordResetEmail(email)
                .then(() => {
                    console.log("Link sent successfylly")
                    setTimeout(() => {
                        navigation.navigate("SignIn")
                    }, 2000);
                })
        } catch (error) {
            console.log("not available")
            console.log(error)
            // setToastMessage(error);
            // setToastTextColorState("white")
            // setToastColorState("red")
            // childRef.current.showToast();
        }
    }
    return (
        <ScrollView style={styles.Scroll}>
            <Text style={styles.SubHead}>Forgot Password</Text>
            <Image source={require('../../assets/Forgotpass.jpg')} style={styles.image} />
            <View style={{alignItems: 'center',}}>
                <TextInput 
                    style={styles.Box} 
                    placeholder={'Email'} 
                    onChangeText={value => { setemail(value) }}
                    placeholderTextColor={"black"}
                />
                <TouchableOpacity style={styles.Btn} onPress={ResetLink}>
                    <Text style={styles.BtnTxt}>Send Link</Text>
                </TouchableOpacity>
                <View style={styles.Last}>
                    <Text style={styles.LastTxt}>Back to</Text>
                    <Text style={styles.SubLastTxt} onPress={() => { navigation.navigate('SignIn') }}>Log In</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ForgotPass

const styles = StyleSheet.create({
    Scroll: {
        backgroundColor: "white"
    },
    Head: {
        alignSelf: "center",
        marginTop: 20
    },
    SubHead: {
        color: "black",
        fontSize: 30,
        fontWeight: '900',
        textAlign:"center",
        padding:10
    },
    image: {
        height: windoHeight / 2,
        width: windoWidth,
    },
    Box: {
        width:windoWidth/1.4,
        height:windoHeight/18,
        marginTop: 10,
        borderRadius: 10,
        borderColor: "#808080",
        borderWidth: 1,
        fontWeight:"bold",
        color:"black",
        paddingLeft:10
    },
    Btn: {
        width:windoWidth/1.4,
        height:windoHeight/17,
        marginTop: 15,
        backgroundColor: '#F05656',
        borderRadius: 10,
        alignItems:"center",
        justifyContent: 'center',
    },
    BtnTxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    },
    Last: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop:10
    },
    LastTxt: {
        fontWeight: "700",
        color: "black"
    },
    SubLastTxt: {
        color: "blue",
        fontWeight: "700",
        marginLeft:5
    }
})
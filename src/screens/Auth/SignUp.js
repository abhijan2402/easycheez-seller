import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useRef, useContext } from "react";
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { GlobalVariable } from '../../../App';
const SignUp = ({ navigation }) => {
    const {listenAut,setUserData}=useContext(GlobalVariable);
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('');
    const [Cpassword, setCpassword] = useState('');
    const [loading, setLoading] = useState(false)
    const validateUser = async () => {
        if (email === "" || password === "" || Cpassword === "") {
            console.log("fillthe details")
        }
        else if (password != Cpassword) {
            console.log("Not same ")
        }
        else {
            setLoading(true)
            console.log("i am in else")
            try {
                console.log("i am in else11")
                await auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user, "congo")
                        setLoading(false)
                        return firestore().collection("Users").doc(user.uid).set({
                            email:email,
                            accountState:"newprofile"
                        })
                        .then(async() => {
                            console.log("user created")
                            setLoading(false)
                            await setUserData(user.uid)
                            navigation.navigate('createprofile')
                        })
                        .catch((error) => {
                            // setLoading(false)
                            console.log(error);
                        })
                    })
            } catch (error) {
                console.log(error)
                // setToastMessage(error);
                // setToastTextColorState("white")
                // setToastColorState("red")
                // childRef.current.showToast();
            }
        }
    }
    return (
        <ScrollView style={styles.Background}>

            <View style={styles.Head}>
                <Text style={styles.SubHead}>Sign Up</Text>
            </View>

            <View>
                <Image source={require('../../assets/SignUp.jpg')} style={styles.image} />
            </View>

            <View>
                <TextInput style={styles.Box} placeholder={'Email'}
                    onChangeText={value => { setemail(value) }}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <TextInput style={styles.Box} placeholder={'Password'}
                    onChangeText={value => { setpassword(value) }}
                    autoCapitalize={true}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <TextInput style={styles.Box} placeholder={'Confirm Password'}
                    onChangeText={value => { setCpassword(value) }}
                    autoCapitalize={true}
                />
                <TouchableOpacity style={styles.Btn} onPress={validateUser}>
                    {
                        loading ?
                            <ActivityIndicator size={25} color={"white"} /> :
                            <Text style={styles.BtnTxt}>Create Account</Text>
                    }
                </TouchableOpacity>
                <View style={styles.Last}>
                    <Text style={styles.LastTxt}>Already Have an Account ?</Text>
                    <Text style={styles.LastSubTxt} onPress={() => { navigation.navigate('SignIn') }}>Log In</Text>
                </View>
            </View>

        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    Background: {
        backgroundColor: "white"
    },
    Head: {
        alignSelf: "center", marginTop: 20
    },
    SubHead: {
        color: "black",
        fontSize: 30,
        fontWeight: '900'
    },
    image: {
        height: windoHeight / 2,
        width: windoWidth,
    },
    Box: {
        height: 44,
        width: 279,
        marginLeft: 50,
        marginTop: 10,
        borderRadius: 10,
        borderColor: "#808080",
        borderWidth: 1
    },
    Btn: {
        height: 44,
        width: 279,
        marginLeft: 50,
        marginTop: 15,
        backgroundColor: '#F05656',
        borderRadius: 10,
        marginBottom: 10,
    },
    BtnTxt: {
        textAlign: 'center',
        marginTop: 13,
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    },
    Last: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    LastTxt: {
        fontWeight: "700",
        color: "black"
    },
    LastSubTxt: {
        color: "blue",
        fontWeight: "700",
    }
})
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useRef, useContext } from "react";
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Geolocation from '@react-native-community/geolocation';
import Toast from '../../components/common/Toast';

const SignUp = ({ navigation }) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('');
    const [Cpassword, setCpassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [coords, setCoords] = useState('');
    const childRef = useRef(null);

    const [toastColorState, setToastColorState] = useState('rgba(41,250,25,1)');
    const [toastTextColorState, setToastTextColorState] = useState('black');
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        Geolocation.getCurrentPosition(info => setCoords(info.coords));
    }, [])
    const validateUser = async () => {
        try {
            if (email === "" || password === "" || Cpassword === "") {
                throw "Please fill email and password";
            }
            if (password != Cpassword) {
                throw "Both Password must be same"
            }
            else {
                setLoading(true)
                try {
                    await auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            return firestore().collection("Users").doc(user.uid).set({
                                email: email,
                                accountState: "newprofile",
                                latitude: coords.latitude,
                                longitude: coords.longitude
                            })
                                .then(async () => {
                                    navigation.replace('createprofile')
                                })
                                .catch((error) => {
                                    console.log(error);
                                })
                                .finally(() => setLoading(false))
                        })
                } catch (error) {
                    console.log(error)
                    setToastMessage('Something went wrong');
                    setToastTextColorState("white")
                    setToastColorState("red")
                    childRef.current.showToast();
                    setLoading(false)
                }
            }
        } catch (error) {
            setToastMessage(error);
            setToastTextColorState("white")
            setToastColorState("red")
            childRef.current.showToast();
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <Toast
                toastColor={toastColorState}
                toastTextColor={toastTextColorState}
                toastMessage={toastMessage}
                ref={childRef}
            />
            <ScrollView style={styles.Background}>
                <Text style={styles.SubHead}>Sign Up</Text>
                <Image source={require('../../assets/SignUp.jpg')} style={styles.image} />
                <View style={{ alignItems: 'center', }}>
                    <TextInput
                        style={styles.Box}
                        placeholderTextColor={"black"}
                        placeholder={'Email'}
                        onChangeText={value => { setemail(value) }}
                    />
                    <TextInput
                        style={styles.Box}
                        placeholderTextColor={"black"}
                        placeholder={'Password'}
                        onChangeText={value => { setpassword(value) }}
                        autoCapitalize={true}
                    />
                    <TextInput
                        style={styles.Box}
                        placeholderTextColor={"black"}
                        placeholder={'Confirm Password'}
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
        </>
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
        fontWeight: '900',
        textAlign: "center",
        padding: 10
    },
    image: {
        height: windoHeight / 2,
        width: windoWidth,
    },
    Box: {
        width: windoWidth / 1.4,
        height: windoHeight / 18,
        marginTop: 10,
        borderRadius: 10,
        borderColor: "#808080",
        borderWidth: 1,
        paddingLeft: 10,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 10
    },
    Btn: {
        width: windoWidth / 1.4,
        height: windoHeight / 17,
        marginTop: 10,
        backgroundColor: '#F05656',
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
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
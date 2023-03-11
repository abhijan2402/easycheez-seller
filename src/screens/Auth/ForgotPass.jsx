import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, TextInput,ActivityIndicator } from 'react-native'
import React, { useState,useRef } from 'react'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import auth from '@react-native-firebase/auth'
import Toast from '../../components/common/Toast';

const ForgotPass = ({ navigation }) => {
    const [email, setemail] = useState("")

    const [loading, setLoading] = useState(false)
    
    const childRef = useRef(null);

    const [toastColorState, setToastColorState] = useState('rgba(41,250,25,1)');
    const [toastTextColorState, setToastTextColorState] = useState('black');
    const [toastMessage, setToastMessage] = useState('');

    const ResetLink = () => {
        try {
            if (email === "") {
                throw "Please Enter Email";
            }
            setLoading(true)
            auth().sendPasswordResetEmail(email)
            .then(() => {
                setToastMessage("Link sent successfully");
                setToastTextColorState("black")
                setToastColorState("rgba(41,250,25,1)")
                childRef.current.showToast();
                setTimeout(() => {
                    navigation.replace("SignIn")
                }, 2000);
            })
            .catch((e)=>{
                console.log("Link not send successfully, please try again")
                setToastMessage(error);
                setToastTextColorState("white")
                setToastColorState("red")
                childRef.current.showToast();
            })
            .finally(()=>setLoading(false))
        } catch (error) {
            setToastMessage(error);
            setToastTextColorState("white")
            setToastColorState("red")
            childRef.current.showToast();
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
                        {
                            loading ?
                            <ActivityIndicator size={25} color={"white"} /> :
                            <Text style={styles.BtnTxt}>Send Link</Text>
                        }
                    </TouchableOpacity>
                    <View style={styles.Last}>
                        <Text style={styles.LastTxt}>Back to</Text>
                        <Text style={styles.SubLastTxt} onPress={() => { navigation.navigate('SignIn') }}>Log In</Text>
                    </View>
                </View>
            </ScrollView>
        </>
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
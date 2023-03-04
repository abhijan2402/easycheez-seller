import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const SignIn = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('');
  const validateUser = () => {
    try {
      if (email === "")
        throw "Please enter Email";
      if (password === "")
        throw "Please enter Password";
      setLoading(true)
      auth().signInWithEmailAndPassword(email, password).then(() => {
        console.log("use is auth")
        navigation.navigate('Bottomtab')
      })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            // setToastMessage("Email Address is Wrong");
            // setToastTextColorState("white")
            // setToastColorState("red")
            // childRef.current.showToast();
          }
          if (error.code === 'auth/wrong-password') {
            // setToastMessage('Incorrect Password');
            // setToastTextColorState("white")
            // setToastColorState("red")
            // childRef.current.showToast();
          }
          if (error.code === 'auth/user-not-found') {
            // setToastMessage('User not Found');
            // setToastTextColorState("white")
            // setToastColorState("red")
            // childRef.current.showToast();
          }
          console.log(error);
          setLoading(false);
        })
    } catch (error) {
      setToastMessage(error);
      setToastTextColorState("white")
      setToastColorState("red")
      setLoading(false)
      childRef.current.showToast();
    }
  }
  return (
    <ScrollView style={styles.Scroll}>

      <View style={styles.Head}>
        <Text style={styles.Subhead}>Sign In</Text>
      </View>

      <View>
        <Image source={require('../../assets/SignIn.jpg')} style={styles.image} />
      </View>

      <View>
        <TextInput style={styles.Box} placeholder={'Email'} onChangeText={value => { setemail(value) }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <TextInput style={styles.Box} placeholder={'Password'} onChangeText={value => { setpassword(value) }}
          autoCapitalize={true} />
      </View>

      <View style={styles.Forgot}>
        <Text style={styles.SubForgot} onPress={() => { navigation.navigate('ForgotPass') }}>Forgot Password ?</Text>
      </View>

      <TouchableOpacity style={styles.MainButton} onPress={validateUser}>
        {
          loading ?
            <ActivityIndicator color={'white'} size={30} style={{ marginTop: 7 }} /> :
            <Text style={styles.BtnTxt}>Login</Text>
        }
      </TouchableOpacity>

      <View style={styles.Last}>
        <Text style={styles.LastTxt}>Don't Have an Account ?</Text>
        <Text style={styles.SubLastTxt} onPress={() => { navigation.navigate('SignUp') }}>Create Account</Text>
      </View>

    </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  Scroll: {
    backgroundColor: "white"
  },
  Head: {
    alignSelf: "center",
    marginTop: 20
  },
  Subhead: {
    color: "black",
    fontSize: 30,
    fontWeight: '900',
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
  Forgot: {
    alignSelf: "center",
    marginTop: 10
  },
  SubForgot: {
    color: "black",
    fontWeight: "700"
  },
  MainButton: {
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
  SubLastTxt: {
    color: "blue",
    fontWeight: "700",
  }
})
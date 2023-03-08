import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import { GlobalVariable } from '../../../App';
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
      auth().signInWithEmailAndPassword(email, password).then((res) => {
        console.log("use is auth")
        setLoading(false)
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
      setLoading(false);
      // setToastMessage(error);
      // setToastTextColorState("white")
      // setToastColorState("red")
      // setLoading(false)
      // childRef.current.showToast();
    }
  }
  return (
    <ScrollView style={styles.Scroll}>
      <Text style={styles.Subhead}>Sign In</Text>
      <Image source={require('../../assets/SignIn.jpg')} style={styles.image} />
      <View style={{alignItems: 'center',}}>
        <TextInput 
          placeholderTextColor={"black"}
          style={styles.Box}
          placeholder={'Email'} 
          onChangeText={value => { setemail(value) }}
          />
        <TextInput 
          placeholderTextColor={"black"}
          style={styles.Box} 
          placeholder={'Password'} 
          onChangeText={value => { setpassword(value) }}
          autoCapitalize={true} 
        />
        <Text style={styles.SubForgot} onPress={() => { navigation.navigate('ForgotPass') }}>Forgot Password ?</Text>
        <TouchableOpacity style={styles.MainButton} onPress={validateUser}>
          {
            loading ?
              <ActivityIndicator color={'white'} size={30}  /> :
              <Text style={styles.BtnTxt}>Login</Text>
          }
        </TouchableOpacity>
        <View style={styles.Last}>
          <Text style={styles.LastTxt}>Don't Have an Account ?</Text>
          <Text style={styles.SubLastTxt} onPress={() => { navigation.navigate('SignUp') }}>Create Account</Text>
        </View>
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
    borderRadius: 10,
    borderColor: "#808080",
    borderWidth: 1,
    paddingLeft:10,
    fontWeight:"bold",
    marginTop:10,
    color:"black",
    paddingLeft:10
  },
  Forgot: {
    alignSelf: "center",
    marginTop: 10
  },
  SubForgot: {
    color: "black",
    fontWeight: "700",
    marginVertical:10
  },
  MainButton: {
    width:windoWidth/1.4,
    height:windoHeight/17,
    backgroundColor: '#F05656',
    borderRadius: 10,
    alignItems:"center",
    justifyContent:"center",
    marginVertical:10
  },
  BtnTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
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
    marginLeft:5
  }
})
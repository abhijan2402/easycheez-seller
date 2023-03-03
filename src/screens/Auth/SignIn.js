import { StyleSheet, Text, View,Image,Dimensions,ScrollView,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const SignIn = ({navigation}) => {
  return (
    <ScrollView style={styles.Scroll}>

        <View style={styles.Head}>
            <Text style={styles.Subhead}>Sign In</Text>
        </View>
        
        <View>
            <Image source={require('../../assets/SignIn.jpg')} style={styles.image}/>
        </View>

        <View>
            <TextInput style={styles.Box} placeholder={'Email'}/>
        </View>

        <View style={{marginTop:20}}>
            <TextInput style={styles.Box} placeholder={'Password'}/>
        </View>

        <View style={styles.Forgot}>
            <Text style={styles.SubForgot} onPress={()=>{navigation.navigate('ForgotPass')}}>Forgot Password ?</Text>
        </View>
      
        <TouchableOpacity style={styles.MainButton}>
              <Text style={styles.BtnTxt} onPress={()=>{navigation.navigate('Profile')}}>Login</Text>
        </TouchableOpacity>
          
        <View style={styles.Last}>
          <Text style={styles.LastTxt}>Don't Have an Account ?</Text>
          <Text style={styles.SubLastTxt} onPress={()=>{navigation.navigate('SignUp')}}>Create Account</Text>
        </View>
        
    </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  Scroll:{
    backgroundColor:"white"
  },
  Head:{
    alignSelf:"center",
    marginTop:20
  },
  Subhead:{
    color:"black",
    fontSize:30,
    fontWeight:'900',
  },
  image:{
    height: windoHeight/2,
    width: windoWidth,
  },
  Box:{
    height: 44,
    width: 279,
    marginLeft: 50,
    marginTop: 10,
    borderRadius:10,
    borderColor:"#808080",
    borderWidth:1
  },
  Forgot:{
    alignSelf:"center",
    marginTop:10
  },
  SubForgot:{
    color:"black",
    fontWeight:"700"
  },
  MainButton:{
    height: 44,
    width: 279,
    marginLeft: 50,
    marginTop: 15,
    backgroundColor: '#F05656',
    borderRadius: 10,
    marginBottom: 10,
  },
  BtnTxt:{
    textAlign: 'center',
     marginTop: 13,
     color: 'white',
     fontSize: 15,
     fontWeight: '500'
  },
  Last:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
  },
  LastTxt:{
    fontWeight:"700",
    color:"black"
  },
  SubLastTxt:{
    color:"blue",
    fontWeight:"700",
  }
})
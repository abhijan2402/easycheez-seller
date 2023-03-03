import { StyleSheet, Text, View,Image,Dimensions,ScrollView,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.Background}>

       <View style={styles.Head}>
           <Text style={styles.SubHead}>Sign Up</Text>
       </View>
    
       <View>
           <Image source={require('../../assets/SignUp.jpg')} style={styles.image}/>
       </View>
    
       <View>
          <TextInput style={styles.Box} placeholder={'Email'}/>
       </View>
    
       <View style={{marginTop:20}}>
          <TextInput style={styles.Box}placeholder={'Password'}/>
       </View>
    
       <View style={{marginTop:20}}>
          <TextInput style={styles.Box}placeholder={'Confirm Password'}/>
       </View>
   
       <TouchableOpacity style={styles.Btn}>
            <Text style={styles.BtnTxt}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.Last}>
            <Text style={styles.LastTxt}>Already Have an Account ?</Text>
            <Text style={styles.LastSubTxt} onPress={()=>{navigation.navigate('SignIn')}}>Log In</Text>
        </View>

  </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    Background:{
        backgroundColor:"white"
    },
    Head:{
        alignSelf:"center",marginTop:20
    },
    SubHead:{
        color:"black",
        fontSize:30,
        fontWeight:'900'
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
    Btn:{
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
    LastSubTxt:{
        color:"blue",
        fontWeight:"700",
    }
})
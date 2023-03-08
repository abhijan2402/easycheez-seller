import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../App';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;

const Profile = ({ navigation }) => {

  const {userDetails}=useContext(GlobalVariable);
  const [City, setCity] = useState("")
  const [FName, setFName] = useState("")
  const [LName, setLName] = useState("")
  const [MobNum, setMobNum] = useState("")
  const [State, setState] = useState("")

  const createNewUSer = async () => {
    try {
      if (FName == null)
        throw "Please enter Name";
      if (LName == null)
        throw "Please enter Lname";
      if (MobNum == null)
        throw "Please enter Mob Num";
      if (State == null)
        throw "Please enter state";
      if (City == null)
        throw "Please enter city";
      console.log(FName, LName, MobNum, State, City)
      const profileDetails = {
        City: City,
        FirstName: FName,
        LastName: LName,
        MobNum: MobNum,
        State: State,
      }
      console.log(FName, LName, MobNum, State, City)
      firestore()
      .collection('SellerShop')
      .add(profileDetails)
      .then((res) => {
        console.log(userDetails)
        firestore().collection("Users").doc(userDetails.userDetails.id).update({
          accountState:"newShop",
          profileID:res.id
        })
        .then(() => {
          console.log("PRofil added");
          navigation.navigate('StoreRegistration')
        })
        .catch((error) => {
            console.log(error);
        })
      })
      .catch((error) => {
        // setLoading(false)
        console.log(error);
      })
    } catch (error) {
      console.log(error)
      // setToastMessage(error);
      // setToastTextColorState("white")
      // setToastColorState("red")
      // childRef.current.showToast();
    }
  }
  return (

    <ScrollView style={{ backgroundColor: "white" }}>
      <Image source={require('../assets/profile.png')} style={{ width: 390, height: 340, alignSelf: "center" }} />
      <Text style={{ fontWeight: '800', fontSize: 22, color: "black",textAlign:"center",padding:10,width:windoWidth }}>Create Your Profile</Text>
      <View style={{alignItems:"center"}}>
        <View>
          <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 30 }}>First Name*</Text>
          <TextInput style={styles.inputbox}
            placeholderTextColor={"black"}
            placeholder={'Enter your first Name'}
            onChangeText={value => { setFName(value) }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>Last Name*</Text>
          <TextInput style={styles.inputbox}
            placeholderTextColor={"black"}
            placeholder={'Enter your last Name'}
            onChangeText={value => { setLName(value) }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>Mobile Number</Text>
          <TextInput style={styles.inputbox}
            placeholderTextColor={"black"}
            placeholder={'+91 Enter your Mobile Number'}
            onChangeText={value => { setMobNum(value) }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>Email ID</Text>
          <TextInput style={styles.inputbox}
            placeholderTextColor={"black"}
            placeholder={'Enter your Email ID'}
          />
        </View>
        <View>
          <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>State*</Text>
          <TextInput style={styles.inputbox}
            placeholderTextColor={"black"}
            placeholder={'Select State'}
            onChangeText={value => { setState(value) }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>City*</Text>
          <TextInput style={styles.inputbox}
            placeholderTextColor={"black"}
            placeholder={'Enter city Name'}
            onChangeText={value => { setCity(value) }}
          />
        </View>
        <TouchableOpacity style={{ height: 44, width: 279, marginTop: 30, backgroundColor: '#F05656', borderRadius: 20, marginBottom: 10, }} 
          onPress={createNewUSer}
        >
          <Text style={{ textAlign: 'center', marginTop: 13, color: 'white', fontSize: 15, fontWeight: '500' }} >Get Started</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>

  )
}
const styles=StyleSheet.create({
  inputbox:{
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
  }
})
export default Profile
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';
const Profile = ({ navigation }) => {
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
      const userDetails = {
        City: City,
        FirstName: FName,
        LastName: LName,
        MobNum: MobNum,
        State: State,
      }
      console.log(FName, LName, MobNum, State, City)
      await firestore()
        .collection('SellerShop')
        .add(userDetails)
        .then((res) => {
          // setLoading(false)
          console.log(res)
          console.log("Inserted")
          // navigation.navigate('StoreRegistration')
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
      <View>
        <Image source={require('../assets/profile.png')} style={{ width: 390, height: 340, alignSelf: "center" }} />
      </View>
      <View style={{ alignItems: "center", marginTop: 25 }}>
        <Text style={{ fontWeight: '800', fontSize: 22, color: "black" }}>Create Your Profile</Text>
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 30 }}>First Name*</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'Enter your first Name'}
          onChangeText={value => { setFName(value) }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>Last Name*</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'Enter your last Name'}
          onChangeText={value => { setLName(value) }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>Mobile Number</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'+91 Enter your Mobile Number'}
          onChangeText={value => { setMobNum(value) }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>Email ID</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'Enter your Email ID'}
        />
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>State*</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'Select State'}
          onChangeText={value => { setState(value) }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>City*</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'Enter city Name'}
          onChangeText={value => { setCity(value) }}
        />
      </View>

      <TouchableOpacity style={{ height: 44, width: 279, marginLeft: 50, marginTop: 30, backgroundColor: '#F05656', borderRadius: 20, marginBottom: 10, }} onPress={createNewUSer}>
        <Text style={{ textAlign: 'center', marginTop: 13, color: 'white', fontSize: 15, fontWeight: '500' }} >Get Started</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 24 }}></View>
    </ScrollView>

  )
}

export default Profile
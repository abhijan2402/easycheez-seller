import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { SelectList } from 'react-native-dropdown-select-list'
import firestore from '@react-native-firebase/firestore';
const StoreRegistration = ({ navigation }) => {
  const [select, setSelected] = useState("");
  const data = [
    { key: '1', value: 'A' },
    { key: '2', value: 'B' },
    { key: '3', value: 'C' },
    { key: '4', value: 'D' },
    { key: '5', value: 'E' },
  ]
  const [storeName, setstoreName] = useState("")
  const [AboutThStore, setAboutThStore] = useState('')
  const [OpeningTime, setOpeningTime] = useState('')
  const [closeTime, setcloseTime] = useState("")
  const [MobileNum, setMobileNum] = useState("")
  const [ShopNum, setShopNum] = useState("")
  const [Address, setAddress] = useState("")
  const [LandMark, setLandMark] = useState("")
  const StoreRegis = async () => {
    console.log(storeName, AboutThStore, OpeningTime, closeTime, MobileNum, ShopNum, Address, LandMark)
    try {
      if (storeName == null)
        throw "Please enter Store Name";
      if (OpeningTime == null)
        throw "Please enter Opening Time";
      if (closeTime == null)
        throw "Please enter Close Time";
      if (MobileNum == null)
        throw "Please enter MobileNum";
      if (ShopNum == null)
        throw "Please enter ShopNum";
      if (Address == null)
        throw "Please enter Address";
      const userDetails = {
        storeName: storeName,
        AboutThStore: AboutThStore,
        OpeningTime: OpeningTime,
        closeTime: closeTime,
        MobileNum: MobileNum,
        ShopNum: ShopNum,
        Address: Address,
        LandMark: LandMark,
        UserId: "1112"
      }
      await firestore()
        .collection('StoreRegis')
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
      <View style={{ alignItems: "center", marginTop: 25 }}>
        <Text style={{ fontWeight: '800', fontSize: 22, color: "black" }}>Add Store</Text>
      </View>

      <View style={{ marginTop: 25, marginLeft: 50 }}>
        <Text style={{ fontWeight: '700', fontSize: 18, color: "black" }}>Store Details</Text>
      </View>

      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 30 }}>Store Name</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'Add Shop Name'}
          onChangeText={value => { setstoreName(value) }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>About the Store</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'Add Store Details'}
          onChangeText={value => { setAboutThStore(value) }}
        />
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View>
          <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>Opening time</Text>
          <TextInput style={{ height: 44, width: 114, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
            placeholder={'Enter time'}
            onChangeText={value => { setOpeningTime(value) }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>Mobile Number</Text>
          <TextInput style={{ height: 44, width: 114, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
            placeholder={'Enter time'}
            onChangeText={value => { setcloseTime(value) }}
          />
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>Mobile Number</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'+91 Enter your Mobile Number'}
          onChangeText={value => { setMobileNum(value) }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>Select Category</Text>
        {/* <SelectList boxStyles={{height: 44,width: 279,marginLeft: 50,marginTop: 10,borderRadius:10,borderColor:"black",borderWidth:1}}
              placeholder={'Add Category'} data={data} setSelected={setSelected}
              dropdownStyles={{width: 279,marginLeft: 50,}}
              /> */}
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>Shop No</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'Enter Shop No'}
          onChangeText={value => { setShopNum(value) }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>Address</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'Add store address'}
          onChangeText={value => { setAddress(value) }}
        />
      </View>
      <View>
        <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginLeft: 50, marginTop: 20 }}>Landmark</Text>
        <TextInput style={{ height: 44, width: 279, marginLeft: 50, marginTop: 10, borderRadius: 10, borderColor: "black", borderWidth: 1 }}
          placeholder={'Add Landmark'}
          onChangeText={value => { setLandMark(value) }}
        />
      </View>

      <TouchableOpacity onPress={StoreRegis} style={{ height: 44, width: 279, marginLeft: 50, marginTop: 30, backgroundColor: '#F05656', borderRadius: 20, marginBottom: 10, }}>
        <Text style={{ textAlign: 'center', marginTop: 13, color: 'white', fontSize: 15, fontWeight: '500' }}>Add</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 24 }}></View>
    </ScrollView>
  )
}

export default StoreRegistration

const styles = StyleSheet.create({})
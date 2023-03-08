import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
// import { SelectList } from 'react-native-dropdown-select-list'
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../App';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const StoreRegistration = ({ navigation }) => {
  const {userDetails,setUserData}=useContext(GlobalVariable);


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
      const shopDetails = {
        storeName: storeName,
        AboutThStore: AboutThStore,
        OpeningTime: OpeningTime,
        closeTime: closeTime,
        MobileNum: MobileNum,
        ShopNum: ShopNum,
        Address: Address,
        LandMark: LandMark,
      }
      await firestore()
        .collection('StoreRegis')
        .add(shopDetails)
        .then((res) => {
          console.log(res)
          console.log("Inserted")
          firestore().collection("Users").doc(userDetails.userDetails.id).update({
            accountState:"complete",
            storeID:res.id
          })
          .then(async() => {
            console.log("store added");
            await setUserData()
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
        <Text style={{ fontWeight: '800', fontSize: 22, color: "black",textAlign:"center",padding:10 }}>Add Store</Text>
        <View style={{alignItems:"center",width:windoWidth}}>
          <View style={{width:windoWidth/1.2}}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 30 }}>Store Name</Text>
            <TextInput style={styles.Box}
              placeholderTextColor={"black"}
              placeholder={'Add Shop Name'}
              onChangeText={value => { setstoreName(value) }}
            />
          </View>
          <View style={{width:windoWidth/1.2}}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>About the Store</Text>
            <TextInput style={styles.Box}
                placeholderTextColor={"black"}
              placeholder={'Add Store Details'}
              onChangeText={value => { setAboutThStore(value) }}
            />
          </View>
          <View style={{ display: "flex", flexDirection: "row",justifyContent:"space-around",width:windoWidth, }}>
            <View style={{width:windoWidth/2.5,alignItems:"center"}}>
              <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>Opening time</Text>
              <TextInput style={[styles.Box,{width:windoWidth/3.2}]}
                  placeholderTextColor={"black"}
                placeholder={'Enter time'}
                onChangeText={value => { setOpeningTime(value) }}
              />
            </View>
            <View style={{width:windoWidth/2.5,alignItems:"center"}}>
              <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>closing time</Text>
              <TextInput style={[styles.Box,{width:windoWidth/3.2}]}
                  placeholderTextColor={"black"}
                placeholder={'Enter time'}
                onChangeText={value => { setcloseTime(value) }}
              />
            </View>
          </View>
          <View style={{width:windoWidth/1.2}}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>Mobile Number</Text>
            <TextInput style={styles.Box}
                placeholderTextColor={"black"}
              placeholder={'+91 Enter your Mobile Number'}
              onChangeText={value => { setMobileNum(value) }}
            />
          </View>
          {/* <View>
            <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>Select Category</Text>
          </View> */}
          <View style={{width:windoWidth/1.2}}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>Shop No</Text>
            <TextInput style={styles.Box}
                placeholderTextColor={"black"}
              placeholder={'Enter Shop No'}
              onChangeText={value => { setShopNum(value) }}
            />
          </View>
          <View style={{width:windoWidth/1.2}}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>Address</Text>
            <TextInput style={styles.Box}
                placeholderTextColor={"black"}
              placeholder={'Add store address'}
              onChangeText={value => { setAddress(value) }}
            />
          </View>
          <View style={{width:windoWidth/1.2}}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>Landmark</Text>
            <TextInput style={styles.Box}
                placeholderTextColor={"black"}
              placeholder={'Add Landmark'}
              onChangeText={value => { setLandMark(value) }}
            />
          </View>

          <TouchableOpacity onPress={StoreRegis} style={{ height: 44, width: 279, marginTop: 30, backgroundColor: '#F05656', borderRadius: 20, marginBottom: 10, }}>
            <Text style={{ textAlign: 'center', marginTop: 13, color: 'white', fontSize: 15, fontWeight: '500' }}>Add</Text>
          </TouchableOpacity>
        </View>

      <View style={{ marginBottom: 24 }}></View>
    </ScrollView>
  )
}

export default StoreRegistration

const styles = StyleSheet.create({
  Box: {
    width:'100%',
    height:windoHeight/18,
    marginTop: 10,
    borderRadius: 10,
    borderColor: "#808080",
    borderWidth: 1,
    paddingLeft:10,
    fontWeight:"bold",
    color:"black",
    paddingLeft:10
},
})
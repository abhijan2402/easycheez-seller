import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../../App';
import Toast from '../../components/common/Toast';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;

const Profile = ({ navigation }) => {

  const {userDetails}=useContext(GlobalVariable);
  const [City, setCity] = useState("")
  const [FName, setFName] = useState("")
  const [LName, setLName] = useState("")
  const [MobNum, setMobNum] = useState("")
  const [State, setState] = useState("")

  const [loading,setLoading]=useState(false);

  const childRef = useRef(null);
  const [toastColorState, setToastColorState] = useState('rgba(41,250,25,1)');
  const [toastTextColorState, setToastTextColorState] = useState('black');
  const [toastMessage, setToastMessage] = useState('');

  const createNewUSer = async () => {
    try {
      if (FName == '')
        throw "Please enter Name";
      if (LName == '')
        throw "Please enter Lname";
      if (MobNum == '')
        throw "Please enter Mob Num";
      if (State == '')
        throw "Please enter state";
      if (City == '')
        throw "Please enter city";
      const profileDetails = {
        City: City,
        FirstName: FName,
        LastName: LName,
        MobNum: MobNum,
        State: State,
      }
      setLoading(true);
      firestore().collection('SellerShop').add(profileDetails)
      .then((res) => {
        console.log(userDetails)
        firestore().collection("Users").doc(userDetails.userDetails.id).update({
          accountState:"newShop",
          profileID:res.id
        })
        .then(() => {
          navigation.replace('StoreRegistration')
        })
        .catch((error) => {
          console.log(error);
          setToastMessage("Something went wrong");
          setToastTextColorState("white")
          setToastColorState("red")
          childRef.current.showToast();
        })
        .finally(()=>setLoading(false));
      })
      .catch((error) => {
        setToastMessage("Something went wrong");
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
      <ScrollView style={{ backgroundColor: "white" }}>
        <Image source={require('../../assets/profile.png')} style={{ width: 390, height: 340, alignSelf: "center" }} />
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
              keyboardType={"numeric"}
            />
          </View>
          {/* <View>
            <Text style={{ fontWeight: '700', fontSize: 16, color: "black", marginTop: 20 }}>Email ID</Text>
            <TextInput style={styles.inputbox}
              placeholderTextColor={"black"}
              placeholder={'Enter your Email ID'}
            />
          </View> */}
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
          <TouchableOpacity style={{ height: 44, width: 279, marginTop: 30, backgroundColor: '#F05656', borderRadius: 20, marginBottom: 10,alignItems: 'center',justifyContent: 'center', }} 
            onPress={createNewUSer}
          >
            {
              loading ?
              <ActivityIndicator color={'white'} size={30}  /> :
              <Text style={{ textAlign: 'center',color: 'white', fontSize: 15, fontWeight: '500' }} >Get Started</Text>
            }
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
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
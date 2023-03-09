import React, { useState, useContext, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import Header from '../../components/Home/Header'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import auth from '@react-native-firebase/auth';
import { GlobalVariable } from '../../../App';
import firestore from '@react-native-firebase/firestore';
import AddresModal from '../../components/profile/AddressModal';
function Account({ navigation }) {
    const { userUid } = useContext(GlobalVariable);
    const addressModalRef = useRef(null);
    const [storedetails,setStoreDetails]=useState('');
    const [userDetails,setUserDetails]=useState('');
    const logout = () => {
        auth().signOut()
    }

    useEffect(() => {
        UserInfo();
    }, [])

    const UserInfo = async () => {
        try {
            const user = await firestore().collection('Users').doc(userUid.uid).get()
            const Data = user._data;
            firestore().collection("StoreRegis").doc(user._data.storeID).get()
            .then((res)=>{
                setStoreDetails(res._data);
                firestore().collection("SellerShop").doc(user._data.profileID).get()
                .then((res)=>{
                    setUserDetails({...user._data,...res._data,id:user.id})
                })
                .catch((e)=>{
                    console.log(e)
                })
            })
            .catch((e)=>{
                console.log(e)
            })
        } catch (error) {
            console.error(error);
        }
    }
    if(!userDetails){
        return (
          <View style={{backgroundColor:"white",flex:1,alignItems: 'center',justifyContent: 'center',}}>
            <ActivityIndicator size={35} color="blue" />
          </View>
        )
      }
    return (
        <View style={{ width: windoWidth, height: windoHeight, backgroundColor: "white" }}>
            <Header title="Account" />
            <View style={styles.MainView}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png" }} style={styles.Image} />
                <Text style={styles.NameText}>{userDetails.FirstName} {userDetails.LastName}</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 20, marginVertical: 10 }}>Options</Text>
                <View style={[styles.OptiionView, { marginTop: 25 }]}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/5643/5643764.png" }} style={styles.LogoImage} />
                    <Text style={styles.OptionText} onPress={() => { navigation.navigate('Orders') }}>Orders</Text>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={styles.LogoImage} />
                </View>
                <View style={styles.OptiionView}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/684/684908.png" }} style={styles.LogoImage} />
                    <Text style={styles.OptionText} onPress={()=> addressModalRef.current.showAddress()}>Address</Text>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={styles.LogoImage} />
                </View>
                <View style={styles.OptiionView}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/868/868681.png" }} style={styles.LogoImage} />
                    <Text style={styles.OptionText}>Help</Text>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={styles.LogoImage} />
                </View>
                <View style={styles.OptiionView}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/8822/8822225.png" }} style={styles.LogoImage} />
                    <Text style={styles.OptionText} onPress={() => { navigation.navigate('Subscription') }}>Subscription</Text>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={styles.LogoImage} />
                </View>
                <View style={styles.OptiionView}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/868/868681.png" }} style={styles.LogoImage} />
                    <Text style={styles.OptionText} onPress={() => { navigation.navigate('storeAnalysis') }}>Store Analysis</Text>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={styles.LogoImage} />
                </View>
                <TouchableOpacity style={{ margin: 20, borderWidth: 1, borderRadius: 10, marginHorizontal: 50, alignItems: "center" }} onPress={logout}>
                    <Text style={{color:"black",padding:10}}>LogOut</Text>
                </TouchableOpacity>
            </View>
            {
                storedetails && <AddresModal ref={addressModalRef} storeData={storedetails} />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    Image: {
        width: 70,
        height: 70
    },
    LogoImage: {
        width: 40,
        height: 40
    },
    MainView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20
    },
    NameText: {
        fontSize: 25,
        fontWeight: "700",
        color: "black",
        marginHorizontal: 20
    },
    OptiionView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 30,
        marginVertical: 10
    },
    OptionText: {
        fontSize: 22,
        fontWeight: "600",
        color: "black",
        // borderWidth: 1,
        width: windoWidth / 1.6,
        paddingHorizontal: 15
    },
})
export default Account
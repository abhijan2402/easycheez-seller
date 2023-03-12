import { View, Text, StyleSheet, style, Image } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigation from './HomeNavigation';
import Package from '../screens/store/Package';
import AccountNavigation from './AccountNavigation';

import Ionicons from 'react-native-vector-icons/Ionicons'

import firestore from '@react-native-firebase/firestore';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DefaultProduct from '../screens/store/DefaultProduct';
import PackageData from '../data/PackageData';
import { GlobalVariable } from '../../App';
const Tab = createBottomTabNavigator();
export const MainContext = createContext();

const MainNavigation = () => {
  const { userDetails } = useContext(GlobalVariable);
  const [shopAllProducts, setShopAllProducts] = useState([]);
  const [shopOrders, setShopOrders] = useState([]);
  useEffect(() => {
    getAllProducts()
  }, [])
  const getAllProducts = () => {
    const resulArray = [];
    firestore().collection("ProductPage").where("storeID", "==", userDetails.userDetails.storeID).get()
      .then((res) => {
        res._docs.map(item => {
          resulArray.push(item._data);
        });
        setShopAllProducts([...resulArray])
        getAllOrders()
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const getAllOrders = async () => {
    let resultArray = [];
    return firestore().collection("OrderPage").where("shopID", "==", userDetails.userDetails.storeID).get()
      .then((res) => {
        res.forEach((data) => {
          resultArray.push({ ...data._data, OrderID: data.id });
        })
        setShopOrders(resultArray)
        return resultArray
      })
      .catch((e) => {
        console.log(e);
      })
  }
  return (
    <MainContext.Provider
      value={{
        products: shopAllProducts,
        productAmount: shopAllProducts.length,
        orders: shopOrders,
        setOrders: getAllOrders
      }}
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false, tabBarShowLabel: false, showIcon: false,
          tabBarStyle: [{ elevation: 0, backgroundColor: "#ffffff", borderTopWidth: 1, borderTopColor: "#808080", height: 60, },],
        }}
      >
        <Tab.Screen name="HomeNavigation" component={HomeNavigation} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name='home' color={focused ? '#F05656' : '#808080'} size={22} />
              {/* <Text style={{color:focused ? '#F05656' : '#808080',fontFamily:"SourceSansPro-Regular"}}>Profile</Text> */}
            </View>
          )
        }} />

        <Tab.Screen name='Default' component={DefaultProduct} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesome5 name='box' color={focused ? '#F05656' : '#808080'} size={22} />
              {/* <Text style={{color:focused ? '#F05656' : '#808080',textAlign:"center",fontFamily:"SourceSansPro-Regular"}}>Account</Text> */}
            </View>
          )
        }}
        />

        <Tab.Screen name="AccountNav" component={AccountNavigation} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name='person' color={focused ? '#F05656' : '#808080'} size={22} />
              {/* <Text style={{color:focused ? '#F05656' : '#808080',textAlign:"center",fontFamily:"SourceSansPro-Regular"}}>Store</Text> */}
            </View>
          )
        }}
        />
      </Tab.Navigator>
    </MainContext.Provider>
  )
}
export default MainNavigation
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
import { GlobalVariable } from '../../App';
import { getAllOrders } from '../services/GetAllOrders';
import { getAllProducts } from '../services/GetAllProcts';
import { getAllOffers } from '../services/GetAllOffers';
const Tab = createBottomTabNavigator();
export const MainContext = createContext();

const MainNavigation = () => {
  const { userDetails } = useContext(GlobalVariable);
  const [shopAllProducts, setShopAllProducts] = useState([]);
  const [shopOrders, setShopOrders] = useState([]);
  const [shopOffers,setShopOffers]=useState([]);

  useEffect(() => {
    async function queryAllData(){
      setShopAllProducts(await getAllProducts(userDetails.userDetails.storeID));
      setShopOrders(await getAllOrders(userDetails.userDetails.storeID));
      setShopOffers(await getAllOffers(userDetails.userDetails.storeID));
    }
    queryAllData();
  }, [])
  return (
    <MainContext.Provider
      value={{
        products: shopAllProducts,
        productAmount: shopAllProducts.length,
        orders: shopOrders,
        offers:shopOffers,
        offerAmount:shopOffers.length
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
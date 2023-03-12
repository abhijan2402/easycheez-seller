import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react';
import Home from '../screens/home/Home';
import AddProduct from '../screens/home/AddProduct';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SeeEditProduct from '../screens/home/SeeEditProduct';
import SetProductDetails from '../screens/home/SetProductDetails';
import DefaultProduct from '../screens/store/DefaultProduct';
import Package from '../screens/store/Package';
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../App';
const Stack = createNativeStackNavigator();

export const HomeContext=createContext();
const HomeNavigation = () => {
  const { userDetails } = useContext(GlobalVariable);
  const [shopAllProducts,setShopAllProducts]=useState([]);
  useEffect(()=>{
    getAllProducts()
  },[])
  const getAllProducts=()=>{
    const resulArray=[];
    firestore().collection("ProductPage").where("storeID","==",userDetails.userDetails.storeID).get()
    .then((res) => {      
      res._docs.map(item => {
        resulArray.push(item._data);
      });
      setShopAllProducts([...resulArray])
    })
    .catch((e) => {
        console.log(e)
    })
  }
  return (
      <HomeContext.Provider
        value={{
          products:shopAllProducts,
          productAmount:shopAllProducts.length
        }}
      >
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='AddProduct' component={AddProduct}/>
            <Stack.Screen name="seeEditproduct" component={SeeEditProduct}/>
            <Stack.Screen name="editproduct" component={SetProductDetails}/>
            <Stack.Screen name="defaultproduct" component={DefaultProduct}/>
            <Stack.Screen name="package" component={Package}/>
        </Stack.Navigator>
      </HomeContext.Provider>
  )
}

export default HomeNavigation
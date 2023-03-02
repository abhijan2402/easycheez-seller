import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from '../screens/home/Home';
import AddProduct from '../screens/Products/AddProduct';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const AccountNavigation = () => {
    
  return (
    <>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='AddProduct' component={AddProduct}/>
        </Stack.Navigator>
    </>
  )
}

export default AccountNavigation
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from '../screens/home/Home';
import AddProduct from '../screens/home/AddProduct';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SeeEditProduct from '../screens/home/SeeEditProduct';
import SetProductDetails from '../screens/home/SetProductDetails';
const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
    
  return (
    <>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='AddProduct' component={AddProduct}/>
            <Stack.Screen name="seeEditproduct" component={SeeEditProduct}/>
            <Stack.Screen name="editproduct" component={SetProductDetails}/>
        </Stack.Navigator>
    </>
  )
}

export default HomeNavigation
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Orders from '../screens/home/Orders';
import Account from '../screens/profile/Account';
import Subscription from '../screens/Subscription/subscription';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const AccountNavigation = () => {
    
  return (
    <>
        <Stack.Navigator initialRouteName='Account' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Account' component={Account}/>
            <Stack.Screen name='Orders' component={Orders}/>
            <Stack.Screen name='Subscription' component={Subscription}/>
        </Stack.Navigator>
    </>
  )
}

export default AccountNavigation
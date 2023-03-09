import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Orders from '../screens/profile/Orders';
import Account from '../screens/profile/Account';
import Subscription from '../screens/profile/subscription';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoreAnalysis from '../screens/profile/StoreAnalysis';
const Stack = createNativeStackNavigator();
const AccountNavigation = () => {
    
  return (
    <>
        <Stack.Navigator initialRouteName='Account' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Account' component={Account}/>
            <Stack.Screen name='Orders' component={Orders}/>
            <Stack.Screen name='Subscription' component={Subscription}/>
            <Stack.Screen name='storeAnalysis' component={StoreAnalysis}/>
        </Stack.Navigator>
    </>
  )
}

export default AccountNavigation
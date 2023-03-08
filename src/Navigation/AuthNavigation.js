import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useReducer } from 'react';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import ForgotPass from '../screens/Auth/ForgotPass';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import StoreRegistration from '../screens/StoreRegistration';
import { GlobalVariable } from '../../App';
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  const {userDetails,userUid}=useContext(GlobalVariable)
  return (
    <>
        <Stack.Navigator 
          initialRouteName={
           !userUid?"SignIn":
            userDetails && userDetails.userDetails.accountState==="newprofile"?'createprofile':'StoreRegistration'
          }
          screenOptions={{headerShown:false}}
        >
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='ForgotPass' component={ForgotPass}/>
            <Stack.Screen name="createprofile" component={Profile}/>
            <Stack.Screen name='StoreRegistration' component={StoreRegistration} />
        </Stack.Navigator>
    </>
  )
}

export default AuthNavigation
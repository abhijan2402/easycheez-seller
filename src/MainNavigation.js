import { View, Text,StyleSheet,style,Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Profile from './screens/Profile';
import AccountDetails from './screens/AccountDetails';
import StoreRegistration from './screens/StoreRegistration';

import Ionicons from 'react-native-vector-icons/Ionicons'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return ( 
      <Tab.Navigator
      screenOptions={{
        headerShown:false,tabBarShowLabel: false,showIcon: false,
            tabBarStyle:[ {position:"absolute",elevation:0,backgroundColor:"#ffffff",borderTopWidth:1,borderTopColor:"#808080",height:54,},],
          }}
      >
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Ionicons name='home'  color={focused ? '#F05656' : '#808080'} size={22}/>
            {/* <Text style={{color:focused ? '#F05656' : '#808080',fontFamily:"SourceSansPro-Regular"}}>Profile</Text> */}
          </View>
        )
        }}/>

        <Tab.Screen name='Account' component={AccountDetails} options={{
           tabBarIcon:({focused})=>(
             <View style={{alignItems:'center',justifyContent:'center'}}>
                <FontAwesome5 name='shopping-cart' color={focused ? '#F05656' : '#808080'} size={22}/>
                {/* <Text style={{color:focused ? '#F05656' : '#808080',textAlign:"center",fontFamily:"SourceSansPro-Regular"}}>Account</Text> */}
             </View>
           )
           }}
        />

        <Tab.Screen name="Store" component={StoreRegistration} options={{
           tabBarIcon:({focused})=>(
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Ionicons name='person' color={focused ? '#F05656' : '#808080'} size={22}/>
                {/* <Text style={{color:focused ? '#F05656' : '#808080',textAlign:"center",fontFamily:"SourceSansPro-Regular"}}>Store</Text> */}
              </View>
            )
           }}
        />
    </Tab.Navigator>
  )
}
export default MainNavigation
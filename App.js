import React from 'react';
import Home from './src/screens/home/Home';
import Orders from './src/screens/home/Orders';
import Package from './src/screens/package/Package';
import AddProduct from './src/screens/Products/AddProduct';
import Subscription from './src/screens/Subscription/subscription';
import Profile from './src/screens/Profile';
import AccountDetails from './src/screens/AccountDetails';
import StoreRegistration from './src/screens/StoreRegistration';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './src/Navigation/MainNavigation';
import StoreAnalysis from './src/screens/StoreAnalysis';
import SetProductDetails from './src/screens/SetProductDetails';
import Account from './src/screens/profile/Account';
import Payment from './src/screens/Payment';
import SignIn from './src/screens/Auth/SignIn';
import SignUp from './src/screens/Auth/SignUp';
import ForgotPass from './src/screens/Auth/ForgotPass';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='SignIn' component={SignIn} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='ForgotPass' component={ForgotPass} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='StoreRegistration' component={StoreRegistration} />
          <Stack.Screen name='AccountDetails' component={AccountDetails} />
          <Stack.Screen name='Bottomtab' component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;

import React, { useState, useEffect, createContext } from 'react';
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
import AuthNavigation from './src/Navigation/AuthNavigation';
import auth from '@react-native-firebase/auth';

export const GlobalVariable = createContext();

const App = () => {

  const Stack = createNativeStackNavigator();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);


  function onAuthStateChanged(userNew) {
    setUser(userNew);
    if (initializing) setInitializing(false);
  }

  const checkForAuth=(data) => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }
  return (
    <GlobalVariable.Provider value={{
      userUid: user,
      listenAut:(user)=>checkForAuth(user),
      setUserUID:(userID)=>setUser(userID)
    }} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
              user == null ?
              <>
                <Stack.Screen name='AuthNavigation' component={AuthNavigation}/>
              </>:
              <Stack.Screen name="Bottomtab" component={MainNavigation} />
            }
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalVariable.Provider>
  );
};


export default App;

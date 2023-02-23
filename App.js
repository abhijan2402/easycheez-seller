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
import MainNavigation from './src/MainNavigation';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      {/* <Package /> */}
      {/* <Orders/> */}
      {/* <AddProduct /> */}
      {/* <Home /> */}
      {/* <Subscription/> */}
      {/* <Profile/> */}
      {/* <AccountDetails/> */}
      <StoreRegistration/>
      {/* <NavigationContainer>
         <Stack.Navigator initialRouteName='Bottomtab' screenOptions={{headerShown:false}}>
               <Stack.Screen name='Bottomtab' component={MainNavigation}/>
         </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
};


export default App;

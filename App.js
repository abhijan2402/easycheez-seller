import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './src/Navigation/MainNavigation';
import AuthNavigation from './src/Navigation/AuthNavigation';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { ActivityIndicator, View } from 'react-native';

export const GlobalVariable = createContext();

const App = () => {

  const Stack = createNativeStackNavigator();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetains] = useState(null);

  const [storeData,setStoreData]=useState('');

  const [loading, setLoading] = useState(true);

  async function onAuthStateChanged(userNew) {
    if (userNew) {
      firestore().collection("Users").doc(userNew.uid).get()
        .then((res) => {
          if (res._data.accountState === "complete") {
            setUser(userNew)
            setUserDetains(res._data)
            if (initializing) setInitializing(false);
          }
          else {
            setUserDetains({ ...res._data, id: userNew.uid })
            setUser(null)
            console.log("Create Profile")
          }

        })
        .then(() => setLoading(false))
        .catch((error) => {
          console.log(error);
          setLoading(false)
        })
    }
    else {
      console.log(userNew)
      setUser(null)
      setLoading(false)
      setUserDetains(null)
    }
  }

  const checkForAuth = () => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }

  useEffect(() => {
    checkForAuth()
    return
  }, [])

  if (loading) {
    return (
      <View style={{ backgroundColor: "white", flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <ActivityIndicator size={35} color="blue" />
      </View>
    )
  }
  return (

    <GlobalVariable.Provider value={{
      userUid: user,
      setUserUID: (userID) => setUser(userID),
      userDetails: { userDetails },
      setUserData: () => checkForAuth(),
      storeData:{storeData},
      setStore:(data)=>setStoreData(data)
    }} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {
            user == null ?
              <>
                <Stack.Screen name='AuthNavigation' component={AuthNavigation} options={{

                }} />
              </> :
              <Stack.Screen name="Bottomtab" component={MainNavigation} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalVariable.Provider>

  );
};


export default App;

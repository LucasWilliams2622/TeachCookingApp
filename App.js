import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/BeginTabs/Login'
import LoginGoogle from './screens/BeginTabs/LoginGoogle'
import Profile from './screens/MainTabs/ProfileTabs/Profile';
import EditProfile from './screens/MainTabs/ProfileTabs/EditProfile';
import BottomTabs from './screens/MainTabs/BottomTabs';
import AddNew from './screens/MainTabs/AddNew';
import Home from './screens/MainTabs/Home';
import Search from './screens/MainTabs/Search';
import SavedDishes from './screens/MainTabs/SavedDishes';
import MyDishes from './screens/MainTabs/MyDishes';
import Guide1 from './screens/Guide/Guide1';
import Guide2 from './screens/Guide/Guide2';
import Guide3 from './screens/Guide/Guide3';
import DetailFood from './screens/MainTabs/DetailFood';
import ItemDishes from './component/ItemSearch';
import Test from './screens/TestTabs/Test'
import TestGGSignIn from './screens/TestTabs/TestGGSignIn'
import { requestUserPermission, NotoficationListener, GetFCMToke } from './src/utils/pushnotification_helper'
import messaging from '@react-native-firebase/messaging';

const Stack = createNativeStackNavigator();
const StackBegin = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginGoogle" component={LoginGoogle} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />

      <Stack.Screen name="Guide1" component={Guide1} />
      <Stack.Screen name="Guide2" component={Guide2} />
      <Stack.Screen name="Guide3" component={Guide3} />

    </Stack.Navigator>
  )
}
const App = () => {
  useEffect(() => {
    getDeviceToken();
  }, []);
  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);
  };
  //https://testfcm.com/
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackBegin" component={StackBegin} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

        <Stack.Screen name="AddNew" component={AddNew} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailFood" component={DetailFood} />

        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="ItemDishes" component={ItemDishes} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App


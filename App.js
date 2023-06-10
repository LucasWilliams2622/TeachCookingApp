import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/BeginTabs/Login'
import LoginGoogle from './screens/BeginTabs/LoginGoogle'
import Profile from './screens/MainTabs/ProfileTabs/Profile';
import EditProfile from './screens/MainTabs/ProfileTabs/EditProfile';
import BottomTabs from './screens/MainTabs/BottomTabs';
import AddNew from './screens/MainTabs/AddNew';
import Home from './screens/MainTabs/Home';
import InfoApp from './screens/MainTabs/InfoApp';

import Search from './screens/MainTabs/Search';
import SavedDishes from './screens/MainTabs/SavedDishes';
import MyDishes from './screens/MainTabs/MyDishes';
import Guide1 from './screens/Guide/Guide1';
import Guide2 from './screens/Guide/Guide2';
import Guide3 from './screens/Guide/Guide3';
import DetailFood from './screens/MainTabs/DetailFood';
import ItemDishes from './component/ItemSavedRecipe';
import Test from './screens/TestTabs/Test'
import TestGGSignIn from './screens/TestTabs/TestGGSignIn'
import { requestUserPermission, NotoficationListener, GetFCMToke } from './src/utils/pushnotification_helper'
import messaging from '@react-native-firebase/messaging';
import { AppContext, AppContextProvider } from './utils/AppContext'

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
    <AppContextProvider>
      <NavigationContainer>
         <BottomTabs/>
      </NavigationContainer>
    </AppContextProvider>
  )
}
export default App


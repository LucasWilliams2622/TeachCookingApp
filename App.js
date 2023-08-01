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
import { AppContext, AppContextProvider } from './test/administration/AppContext'
import SearchUser from "./test/administration/screens/SearchUser"
import Home from './test/administration/screens/Home'
import ProfileUser from './test/administration/screens/ProfileUser';
import ListService from './test/administration/screens/ListService'
import AddService from './test/administration/screens/AddService';
import ListContent from './test/administration/screens/ContentManagement/ListContent';
import AddContent from './test/administration/screens/ContentManagement/AddContent';
import DetailContent from './test/administration/screens/ContentManagement/DetailContent';
import KitchenTools from './test/myFolder/src/screens/KitchenTools3'
import SystemFeature from './test/administration/screens/SystemFeatureManagement/SystemFeature';
import Support from './test/administration/screens/Support/Support';
import ItemMultiCheckBox from './test/administration/components/ItemMultiCheckBox'
import InformationUser from './test/administration/screens/InformationUser';
import { TransitionPresets } from '@react-navigation/stack';
// const Stack =createNativeStackNavigator() 
// const pages={};
// const load = (items)=>{
//     for(var i in items){
//         pages[i] = items[i];
//     }
// }

// import administration  from './test/administration/nav';

// load(administration);
const App = () => {
  useEffect(() => {
    getDeviceToken();
  }, []);
  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);
  };
  return (
    <AppContextProvider>
      <NavigationContainer>
        <ProfileUser />
      </NavigationContainer>
    </AppContextProvider>
  )
  // return (
  //   <AppContextProvider>
  //     <NavigationContainer initialRouteName="AdminHome"
      
  //     {...Object.entries(pages).map(([name, component]) => (
  //       <Stack.Screen options={{
  //         ...TransitionPresets.ModalSlideFromBottomIOS,
  //         headerShown: false,
  //       }} name={name} key={name} component={component} />
  //     ))}>
      
  //     </NavigationContainer>
  //   </AppContextProvider>

  // )
  //https://testfcm.com/
  // return (
  //   <AppContextProvider>
  //     <NavigationContainer>
  //       <BottomTabs />
  //     </NavigationContainer>
  //   </AppContextProvider>
  // )
}
export default App
//
//                          0
//                        oo0oo
//                      o8888888o
//                      88" . "88
//                      (| 😑 |)
//                      0\  =  /0
//                     __/`---'\__
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             _'. .'  /--.--\  `. .'_
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  - \.;`\ _ /`;.`/ - ` : | |
//         \  \ _.   \_ __\ /__ _/   .- /  /
//     =====`-.____.___ \_____/___.-___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//
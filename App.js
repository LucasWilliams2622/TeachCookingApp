import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/BeginTabs/Login'
import Profile  from './screens/MainTabs/ProfileTabs/Profile';
import BottomTabs from './screens/MainTabs/BottomTabs';
import AddNew from './screens/MainTabs/AddNew';



import Test from './screens/TestTabs/Test'
const Stack = createNativeStackNavigator();
const StackBegin = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
     
      <Stack.Screen name="Login" component={Login} />
    

      

    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="StackBegin" screenOptions={{ headerShown: false }}>
          
          <Stack.Screen name="StackBegin" component={StackBegin} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="AddNew" component={AddNew} />
          <Stack.Screen name="Test" component={Test} />

          
          

      

        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App


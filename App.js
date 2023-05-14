import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/BeginTabs/Login'
import Profile  from './screens/MainTabs/ProfileTabs/Profile';
const Stack = createNativeStackNavigator();
const StackBegin = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
     
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />

      

    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="StackBegin" screenOptions={{ headerShown: false }}>
          
          <Stack.Screen name="StackBegin" component={StackBegin} />
        

      

        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App


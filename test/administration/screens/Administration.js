import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import SearchUser from './SearchUser';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Administration = () => {

  return (
    <NavigationContainer >
      <Drawer.Navigator defaultStatus={open}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SearchUser" component={SearchUser} />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}

export default Administration

const styles = StyleSheet.create({})
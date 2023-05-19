import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ICON, COLOR } from '../../constants/Themes'
import Search from './Search';
import Home from './Home'
import AddNew from './AddNew'
import Profile from './ProfileTabs/Profile'
import * as Animatable from 'react-native-animatable';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  )
}
const StackProfile = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  )
}
const StackAddNew = () => {
  return (
    <Stack.Navigator initialRouteName="AddNew" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddNew" component={AddNew} />

    </Stack.Navigator>
  )
}

const StackSearch = () => {
  return (
    <Stack.Navigator initialRouteName="Search" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={Search} />

    </Stack.Navigator>
  )
}

const BottomTabs = () => {

  return (
    <Tab.Navigator
      initialRouteName="StackHome"
      // tabBarOptions={{
      //   tabBarShowLabel: false,
      //   style: {
      //     borderTopLeftRadius: 20,
      //     borderTopRightRadius: 20,
      //     backgroundColor: '#FFFFFF',
      //     shadowColor: '#000000',
      //     shadowOffset: {
      //       width: 0,
      //       height: 2,
      //     },
      //     shadowOpacity: 0.25,
      //     shadowRadius: 3.84,
      //     elevation: 5,
      //   },
      //   labelStyle: {
      //     fontSize: 14,
      //     fontWeight: 'bold',
      //   },
      //   activeTintColor: '#FF6347',
      //   inactiveTintColor: '#A9A9A9',
      // }}
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, label, size }) => {

            let iconName = focused
            if (route.name === 'StackHome') {
              iconName = focused ? ICON.Home : ICON.Home
              label = 'Home'
            } else if (route.name === 'StackSearch') {
              iconName = focused ? ICON.Search : ICON.Search;
              label = 'Search'
            } else if (route.name === 'StackAddNew') {
              iconName = focused ? ICON.AddNew : ICON.AddNew;
              label = 'New'
            }
            else if (route.name === 'StackProfile') {
              iconName = focused ? ICON.Profile : ICON.Profile;
              label = 'Profile'
            }

            // You can return any component that you like here!
            return <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              width: 60
            }}>

              <Animatable.View
                animation="zoomIn"
                duration={2000}>
                <Image source={iconName}
                  style={{
                    width: focused ? 37 : 27,
                    height: focused ? 37 : 27,

                    resizeMode: 'stretch',
                    tintColor: focused ? COLOR.PRIMARY : COLOR.NOT_FOCUS
                  }} />
              </Animatable.View>




              {/* <Text style={{
                fontSize: 10,
                marginTop: 4,
                color: focused ? COLOR.PRIMARY : COLOR.NOT_FOCUS,

              }}>{label}</Text> */}
            </View>;
          },

          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            bottom: 10,
            right: 10,
            left: 10,
            borderRadius: 20,
            backgroundColor: COLOR.BACKGROUND2,
            
          },
        })}


    >
      <Tab.Screen name="StackHome" component={StackHome} />
      <Tab.Screen name="StackSearch" component={StackSearch} />
      <Tab.Screen name="StackAddNew" component={StackAddNew} />
      <Tab.Screen name="StackProfile" component={StackProfile} />

    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})
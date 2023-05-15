import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ICON, COLOR } from '../../constants/Themes'
import Search from './Search';
import Home from './Home'
import AddNew from './AddNew'
import Profile from './ProfileTabs/Profile'



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, label, size }) => {

            let iconName = focused
            if (route.name === 'Home') {
              iconName = focused ? ICON.Home : ICON.Home
              label = 'Home'
            } else if (route.name === 'Search') {
              iconName = focused ? ICON.Search : ICON.Search;
              label = 'Search'
            } else if (route.name === 'AddNew') {
              iconName = focused ? ICON.AddNew : ICON.AddNew;
              label = 'AddNew'
            }
            else if (route.name === 'Profile') {
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
              <Image source={iconName}
                style={{
                  width: 30, height: 30, resizeMode: 'stretch',
                  tintColor: focused ? COLOR.PRIMARY : COLOR.NOT_FOCUS
                }} />
              <Text style={{
                color: focused ? COLOR.PRIMARY : COLOR.NOT_FOCUS,

              }}>{label}</Text>
            </View>;
          },

          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 70,
          },
        })}
      tabBarOptions={{
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#FFFFFF',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        activeTintColor: '#FF6347',
        inactiveTintColor: '#A9A9A9',
      }}

    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="AddNew" component={AddNew} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})
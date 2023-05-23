import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  import React from 'react';
  import { ICON, IMAGES, COLOR } from '../constants/Themes';
 


  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  import MyDishes from '../screens/MainTabs/MyDishes'
  import SavedDishes from '../screens/MainTabs/SavedDishes'
  const windowWIdth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const Tab = createMaterialTopTabNavigator();
  const Profile = () => {
    return (
     
    
      <Tab.Navigator
          tabBarShowLabel
          // tabBarPressColor='white'
          tabBarActiveTintColor='red'
          tabBarShowIcon={true}
          keyboardDismissMode='interactive'
          backBehavior='initialRoute'
          screenOptions={{
              tabBarLabelStyle: { fontSize: 14 },
              tabBarItemStyle: { width: windowWIdth / 2 },
             tabBarStyle: { backgroundColor: COLOR.WHITE },
              swipeEnabled:true,
          
          }}
         
          tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: 'gray',
              indicatorStyle: {
                  backgroundColor: 'white',
              },
            }}
          initialRouteName="SavedDishes">
         <Tab.Screen name="SavedDishes" component={SavedDishes} />
           <Tab.Screen name="MyDishes" component={MyDishes} />
      </Tab.Navigator>
     
     
  )
    return (
      <SafeAreaView style={styles.container}>
        <View >
          {/** Header*/}
          <View style={styles.header}>
            <View style={styles.infor}>
              <Image style={styles.avatar} source={IMAGES.Avatar} />
              <View style={styles.infor1}>
                <Text style={styles.name}>PAUL WALKER</Text>
                <Text style={styles.keyname}>@LearnsssCook</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonAdd}>
              <Image style={styles.icon} source={ICON.Setting} />
            </TouchableOpacity>
          </View>
         
          <Tab.Navigator
           tabBarShowLabel
           // tabBarPressColor='white'
           tabBarActiveTintColor='red'
           tabBarShowIcon={true}
           keyboardDismissMode='interactive'
           backBehavior='initialRoute'
           screenOptions={{
               tabBarLabelStyle: { fontSize: 14 },
             
              tabBarStyle: { backgroundColor: COLOR.BACKGROUND2 },
               swipeEnabled:true,
           
           }}
          
           tabBarOptions={{
               activeTintColor: 'white',
               inactiveTintColor: 'gray',
               indicatorStyle: {
                   backgroundColor: 'white',
               },
             }}>
           <Tab.Screen name="SavedDishes" component={SavedDishes} />
           <Tab.Screen name="MyDishes" component={MyDishes} />
         </Tab.Navigator>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Profile;
  
  const styles = StyleSheet.create({
    container: {
    
    },
  
    header: {
      backgroundColor: COLOR.HEADER,
      height: 70,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginHorizontal: 20,
      marginVertical: 10,
    },
    icon: {
      width: 40,
      height: 40,
      marginHorizontal: 10,
      marginVertical: 10,
      tintColor: COLOR.WHITE,
    },
    buttonAdd: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 37,
      width: 106,
      tintColor: COLOR.WHITE,
      marginHorizontal: 0,
      marginVertical: 16,
    },
    infor: {
      flexDirection: 'row',
    },
    infor1: {
      marginHorizontal: 0,
      marginVertical: 10,
    },
    textButton: {
      // backgroundColor: COLOR.WHITE,
      color: COLOR.BLACK,
     
      lineHeight: 25,
      fontSize: 17,
      fontWeight: 'bold',
   
    },
    name: {
      color: COLOR.WHITE,
      fontSize: 20,
    },
    keyname: {
      color: COLOR.WHITE,
    },
    nav: {
      height: 50,
      backgroundColor: COLOR.GRAY,
      flexDirection: 'row',
    },
    textButton1: {
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 50,
      marginHorizontal: 30,
      color: COLOR.WHITE,
      fontSize: 20
    },
    buttonChose: {
      marginHorizontal: 20,
      flexDirection: 'row',
      marginVertical: 20,
       justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      width: 150,
      borderRadius: 50,
      paddingVertical: 10,
      backgroundColor: COLOR.PRIMARY,
    },
    save: {
      // backgroundColor: COLOR.WHITE,
      marginVertical: -1,
  
      height: 30,
      width: 35,
      borderColor: COLOR.WHITE,
      tintColor:COLOR.BLACK
    },
    BottomTabs: {
  
  
    },
    body: {
  
    },
  });
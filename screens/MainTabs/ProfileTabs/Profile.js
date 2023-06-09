import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions, StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { ICON, IMAGES, COLOR } from '../../../constants/Themes';
import { Icon } from '@rneui/themed';
import ItemSearch from '../../../component/ItemSearch'
import BottomTabs from '../BottomTabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyDishes from '../MyDishes'
import SavedDishes from '../SavedDishes'
import AxiosInstance from '../../../constants/AxiosInstance'
import TopTab from '../../../component/TopTab'
import { AppContext } from '../../../utils/AppContext'

const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tab = createMaterialTopTabNavigator();
const Profile = (props) => {
  const { navigation } = props
  const { idUser, infoUser } = useContext(AppContext);
  const [dataUser, setDataUser] = useState([])
  const getInfoUser = async () => {
    try {
      const response = await AxiosInstance().get("user/api/get-by-id?id=" + idUser);
      if (response.result) {
        setDataUser(response.user)
      } else {
        console.log("Failed to get info User");
      }
    } catch (error) {
      console.log("=========>", error);
    }
  }
  useEffect(() => {
    getInfoUser()
  }, [])
  const goSetting = () => {
    navigation.navigate('InfoApp')
  }
  const goEditProfile = () => {
    console.log("=========>", dataUser);
    navigation.navigate('EditProfile')
  }
  return (
    <SafeAreaView style={styles.container}>

      {/** Header*/}
      <View style={styles.header}>
        <View style={styles.infor}>
          <TouchableOpacity onPress={() => { goEditProfile() }} >
            <Image style={styles.avatar} source={{ uri: dataUser.avatar }} />
          </TouchableOpacity>
          <View style={styles.infor1}>
            <Text style={styles.name}>{dataUser.name}</Text>
            <Text style={styles.keyname}>{dataUser.email}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonAdd} onPress={goSetting}>
          <Image style={styles.icon} source={ICON.Setting} />
        </TouchableOpacity>
      </View>


      <Tab.Navigator
        tabBarActiveTintColor='red'
        tabBarShowIcon={true}
        keyboardDismissMode='interactive'
        backBehavior='initialRoute'
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14 },
          tabBarItemStyle: { width: windowWIdth / 2 },
          tabBarStyle: { backgroundColor: COLOR.BACKGROUND2 },
          swipeEnabled: true,
          tabBarActiveTintColor: COLOR.WHITE,
          tabBarInactiveTintColor: COLOR.BACKGROUND3,
          tabBarIndicatorStyle: {
            backgroundColor: COLOR.SECONDARY,
          },
        }}
        initialRouteName="SavedDishes">
        <Tab.Screen name="Món đã lưu" component={SavedDishes} />
        <Tab.Screen name="Món của tôi" component={MyDishes} />
      </Tab.Navigator>
      <StatusBar barStyle="light-content" backgroundColor={COLOR.HEADER} />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
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
    width: 27,
    height: 27,
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
    fontSize: 14,
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
    tintColor: COLOR.BLACK
  },
  BottomTabs: {


  },
  body: {

  },
});
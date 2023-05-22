import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {ICON, IMAGES, COLOR} from '../../../constants/Themes';
import {Icon} from '@rneui/themed';
import Search from '../Search';
import BottomTabs from '../BottomTabs';

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/** Header*/}
        <View style={styles.header}>
          <View style={styles.infor}>
            <Image style={styles.avatar} source={IMAGES.Avatar} />
            <View style={styles.infor1}>
              <Text style={styles.name}>PAUL WALKER</Text>
              <Text style={styles.keyname}>@LearnCook</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonAdd}>
            <Image style={styles.icon} source={ICON.Setting} />
          </TouchableOpacity>
        </View>

        {/** Nav*/}
        <View style={styles.nav}>
          <Text style={styles.textButton1}>Món đã chọn </Text>
          <Text style={styles.textButton1}>Món của tui</Text>
        </View>
        <TouchableOpacity style={styles.buttonChose}>
              <Image style={styles.save} source={ICON.Save}></Image>
              <Text style={styles.textButton}>Món đã lưu</Text>
            </TouchableOpacity>
        <Search />
        <FlatList>
          <View style={styles.body}></View>
        </FlatList>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

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
    marginHorizontal: 10,
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
    height: 45,
    width: 150,
    borderRadius: 50,
    paddingVertical: 10,
    backgroundColor: COLOR.PRIMARY,
  },
  save: {
    // backgroundColor: COLOR.WHITE,
    marginVertical: -1,
    marginHorizontal:4,
    height: 30,
    width: 35,
    borderColor: COLOR.WHITE,
  },
  BottomTabs: {
 
    
  },
  body: {
  
  },
});

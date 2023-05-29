import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { ICON, IMAGES, COLOR } from '../../../constants/Themes'
import { Icon } from 'react-native-vector-icons/icon'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const Profile = (props) => {
  const { navigation } = props;
  const [avatar, setAvatar] = useState(null)
  const dialogImageChoose = () => {
    return Alert.alert(
      "Thông báo",
      "Chọn phương thức lấy ảnh",
      [
        {
          text: "Chụp ảnh ",
          onPress: () => {
            capture()
          },
        },

        {
          text: "Tải ảnh lên",
          onPress: () => {
            getImageLibrary()
          },
        },
        {
          text: "Hủy",
        },
      ]
    );
  };
  const capture = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);
    // const formdata = new FormData();
    // formdata.append('image', {
    //   uri: result.assets[0].uri,
    //   type: 'icon/icon_jpeg',
    //   name: 'image.jpg',
    // });

    // const response = await AxiosInstance("multipart/form-data").post('user/api/upload-avatar', formdata);
    // console.log(response.link);
    // if (response.result == true) {
    //   setAvatar(response.link);
    //   ToastAndroid.show("Upload Image Success", ToastAndroid.SHORT);
    // }
    // else {
    //   ToastAndroid.show("Upload Image Failed", ToastAndroid.SHORT);
    // }
  }
  const getImageLibrary = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    // const formdata = new FormData();
    // formdata.append('image', {
    //   uri: result.assets[0].uri,
    //   type: 'icon/icon_jpeg',
    //   name: 'image.jpg',
    // });
    // const response = await AxiosInstance("multipart/form-data").post('user/api/upload-avatar', formdata);
    // console.log(response.link);
    // if (response.result == true) {
    //   setAvatar(response.link);
    //   ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);
    // }
    // else {
    //   ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
    // }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/** Header*/}
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack()}>
            <Image style={styles.icon} source={require('../../../asset/icon/icon_back.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAdd}>
            <Text style={styles.textButton}>cập nhật</Text>
          </TouchableOpacity>
        </View>

        {/** Body*/}
        <View style={styles.body}>
          <View style={styles.head}>
            <TouchableOpacity onPress={() => { dialogImageChoose() }}>
              {
                !avatar ?
                  (
                    <Image style={styles.avatar} source={IMAGES.Avatar} />
                  )
                  :
                  (
                    <Image style={styles.avatar} source={IMAGES.Avatar} />
                  )
              }
            </TouchableOpacity>
            <View style={styles.info}>
              <Text style={styles.name}>PAUL WALKER</Text>
              <Text style={styles.keyname}>@LearnCook</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton2}>xem trang bếp</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.line}>
            <Text style={styles.textField}>Full Name</Text>
            <TextInput style={styles.textHint}
               returnKeyType='next'
               placeholder="Martias Duarte"
               placeholderTextColor="gray"
            ></TextInput>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>
          </View>

          <View style={styles.line}>
            <Text style={styles.textField}>ID Cookpad</Text>
            <TextInput
              returnKeyType='next'
              placeholder="@LearnCook"
              placeholderTextColor="gray"
              style={styles.textHint}></TextInput>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>
          </View>

          <View style={styles.line}>
            <Text style={styles.textField}>Email</Text>
            <TextInput
              style={styles.textHint}
              returnKeyType='next'
              placeholder="paulwalker@gmail.com"
              placeholderTextColor="gray"

            ></TextInput>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>
          </View>

          <View style={styles.linebox1}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Đến từ:.."
              placeholderTextColor="gray"
              returnKeyType='next'
              keyboardType="numeric" />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>
          </View>
          <View style={styles.linebox2}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Vài dòng về đam mê nấu nướng "
              placeholderTextColor="gray"
              returnKeyType='done'
              keyboardType="numeric" />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
  },

  header: {
    backgroundColor: COLOR.HEADER,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  icon: {
    marginHorizontal: 10,
    marginVertical: 23,
    height: 25,
    width: 25,
    tintColor: COLOR.WHITE,
    

  },
  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: COLOR.GRAY1,
    borderRadius: 10,
paddingHorizontal:20,

  },
  textButton: {
    color: COLOR.HEADER,
    fontSize: 15,
  },

  /*Body*/
  body: {
    height: '100%',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '21%',
    // borderWidth: 2, borderColor: 'white',
    marginHorizontal: 10,
  },
  info: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  avatar: {

    height: 100,
    width: 100,
    borderRadius: 100,
    flexDirection: 'row',

  },
  line: {
    width: '80%',
    marginHorizontal: 32,
  },
  linebox1: {
    marginVertical: 30,
    width: '80%',
    marginHorizontal: 32,
  },
  linebox2: {
    marginVertical: 3,
    width: '80%',
    marginHorizontal: 32,
  },
  name: {
    marginVertical: 31,
    fontSize: 18,
    lineHeight: 30,
    color: COLOR.WHITE,
    fontWeight:'bold'
  },
  keyname: {
    marginVertical: -25,
    color: COLOR.WHITE,
  },
  button: {
    marginVertical: 39,
    borderWidth: 1,
    borderRadius: 10,
    letterSpacing: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 127,
    borderColor: COLOR.WHITE,

  },
  textButton2: {
    color: COLOR.WHITE,
    fontSize: 15,
  },
  textField: {
    marginVertical: 9,
    marginHorizontal: 0,
    color: COLOR.BACKGROUND3,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1,
  },
  textHint: {
    marginVertical: 0,
    marginHorizontal: 0,
    color: COLOR.WHITE,
    fontSize: 20,
    lineHeight: 20,
  },
  textInput: {
    marginVertical: 0,
    marginHorizontal: 26,
    fontSize: 20,
  },

  input: {
    height: 50,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    paddingBottom: 16,
    padding: 12,
    fontSize: 17,
    paddingBottom: 0,
  },
})
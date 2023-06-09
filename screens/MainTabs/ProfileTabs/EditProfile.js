import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ToastAndroid,ScrollView, Alert } from 'react-native'
import React, { useState, useContext, useEffect, } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICON, IMAGES, COLOR } from '../../../constants/Themes'
import { Icon } from 'react-native-vector-icons/icon'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { isValidEmpty } from '../../../constants/Validate'
import { AppContext } from '../../../utils/AppContext'
import AxiosInstance from '../../../constants/AxiosInstance'

const EditProfile = (props) => {
  const { navigation } = props;
  const [userName, setuserName] = useState('');
  const [dataUser, setDataUser] = useState([])
  const { idUser, infoUser, setInfoUser } = useContext(AppContext);

  const [checkUserName, setcheckUserName] = useState(false);
  const [id, setId] = useState('');
  const [checkId, setcheckId] = useState(false);
  const [email, setEmail] = useState('');
  const [checkEmail, setcheckEmail] = useState(false);
  const [description, setDescription] = useState('')
  const [number, setNumber] = useState('');
  const [checkNumber, setcheckNumber] = useState(false);
  const [avatar, setAvatar] = useState('');
  const getInfoUser = async () => {
    try {
      const response = await AxiosInstance().get("user/api/get-by-id?id=" + idUser);
      if (response.result) {
        setDataUser(response.user);
      } else {
        console.log("Failed to get info User");
      }
    } catch (error) {
      console.log("=========>", error);
    }
  }
  const updateProfile = async () => {
    const response = await AxiosInstance().put("user/api/update", { email: infoUser.user.email, password: infoUser.user.password, name: infoUser.user.name, description: description });
    if (response.result) {
      setInfoUser({ ...infoUser, description: description });
      ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Cập nhật không thành công", ToastAndroid.SHORT);
    }
  }
  useEffect(() => {
    getInfoUser()
  }, [])

  const check = () => {
    if (checkUserName == false) {
      Alert.alert('Error', 'Vui lòng nhập Tên');
    }
    else if (checkId == false) {
      Alert.alert('Error', 'Vui lòng nhập Id');
    }
    else if (checkEmail == false) {
      Alert.alert('Error', 'Vui lòng nhập Email');
    }
    else if (checkNumber == false) {
      Alert.alert('Error', 'Vui lòng nhập số điện thoại');
    }
  }
  const goBack = () => {
    navigation.goBack()
  }
  const dialogImageChoose = () => {
    return Alert.alert(
      "Thông báo",
      "Chọn phương thức lấy ảnh",
      [{
        text: "Chụp ảnh ",
        onPress: () => {
          capture()
        }
      },
      {
        text: "Tải ảnh lên",
        onPress: () => {
          getImageLibrary()
        }
      },
      {
        text: "Hủy",
      }])
  }
  const capture = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);
    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'icon/icon_jpeg',
      name: 'image.jpg',
    });

    const response = await AxiosInstance("multipart/form-data").post('user/api/upload-avatar', formdata);
    console.log(response.link);
    if (response.result) {
      setAvatar(response.link);
      ToastAndroid.show("Upload Image Success", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Upload Image Failed", ToastAndroid.SHORT);
    }
  }
  const getImageLibrary = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'icon/icon_jpeg',
      name: 'image.jpg',
    });
    const response = await AxiosInstance("multipart/form-data").post('user/api/upload-avatar', formdata);
    console.log(response.link);
    if (response.result) {
      setAvatar(response.link);
      ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/** Header*/}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { goBack() }}>
            <Image style={styles.icon} source={require('../../../asset/icon/icon_back.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAdd} onPress={updateProfile}>
            <Text style={styles.textButton}>cập nhật</Text>
          </TouchableOpacity>
        </View>

        {/** Body*/}
        <View style={styles.body}>
          <View style={styles.head}>
            <TouchableOpacity onPress={() => { dialogImageChoose() }}>
              {
                !avatar ?
                  (<Image style={styles.avatar} source={{ uri: dataUser.avatar }} />)
                  :
                  (<Image style={styles.avatar} source={{ uri: avatar }} />)}
            </TouchableOpacity>
            <View style={styles.info}>
              <Text style={styles.name}>{dataUser.name}</Text>
              <Text style={styles.keyname}>@LearnCook</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton2}>Xem trang bếp</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.line}>
            <Text style={styles.textField}>Full Name</Text>
            <TextInput style={styles.textHint}
              returnKeyType='next'
              placeholder="Martias Duarte"
              placeholderTextColor="gray"
              value={infoUser.user.name}
              onChangeText={(text) => {
                setInfoUser({ ...infoUser, name: text })
                // // setValidatePass2(text);
                // if (isValidEmpty(text) === false) {
                //   setcheckUserName(false);
                //   console.log('loi name ');
                // } else {
                //   setcheckUserName(true);
                //   console.log("dung r");
                // }
              }}
            ></TextInput>
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
              editable={false}
              value={infoUser.user.email}
              onChangeText={(text) => {
                setInfoUser({ ...infoUser, email: text })
                // setValidatePass2(text);
                // if (isValidEmpty(text) === false) {
                //   setcheckEmail(false);
                //   console.log('loi email ');
                // } else {
                //   setcheckEmail(true);
                //   console.log("dung r");
                // }
              }}
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
              placeholder="Mô tả:   ...."
              placeholderTextColor="gray"
              returnKeyType='next'
              keyboardType="default"
              value={infoUser.user.description}
              onChangeText={(text) => {
                setDescription(text)
                // setNumber(text)
                // // setValidatePass2(text);
                // if (isValidEmpty(text) === false) {
                //   setcheckNumber(false);
                //   console.log('loi number');
                // } else {
                //   setcheckNumber(true);
                //   console.log("dung r");
              }
              }
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>
          </View>
          <View style={styles.linebox2}>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="gray"
              returnKeyType='done'
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}
export default EditProfile

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
    paddingHorizontal: 20,

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
    fontWeight: 'bold'
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
    fontSize: 16,
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
    fontSize: 17,
    color: COLOR.WHITE
  },
})
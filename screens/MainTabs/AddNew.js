import { StyleSheet, Text, TextInput, Dimensions, View, Image, TouchableOpacity, ScrollView, ToastAndroid, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import ItemIngredient from '../../component/ItemIngredient'
import ItemAddnewSteps from '../../component/ItemAddnewSteps'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AddNew = () => {
  const [image, setImage] = useState(null)
  const [ingredient, setIngredient] = useState(dataSteps);
  const [step, setStep] = useState(dataStep2)
  const [idx, incr] = useState(2);
  const addElement = () => {
    var newArray = [...dataSteps, { _id: toString(idx), text: "teen " + (idx + 1) }];
    dataSteps.push({ _id: toString(idx), text: "teen " + (idx + 1) });
    incr(idx + 1);
    setIngredient(newArray);

  }
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
    <ScrollView style={{ backgroundColor: COLOR.BACKGROUND }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={[styles.icon, {}]} source={require('../../asset/icon/icon_back.png')} />
          <TouchableOpacity style={styles.btnLuu}>
            <Text style={[styles.textButton, { color: COLOR.PRIMARY, width: 50 }]}>Lưu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonAdd, { backgroundColor: COLOR.GRAY1 }]}>
            <Text style={[styles.textButton]}>Đăng món</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.anh}>
          <TouchableOpacity style={styles.buttonImage}
            onPress={dialogImageChoose}>
            {
              !image ?
                (<>
                  <Image style={[styles.icon, { width: 100, height: 100, marginTop: 20, }]} source={require('../../asset/image/dinner2.png')} />
                  <Text style={{ color: COLOR.WHITE, marginTop: 20 }}>
                    <Image source={require('../../asset/icon/icon_camera.png')} >
                    </Image>    Đăng hình đại diện món ăn</Text>
                </>)
                :
                (
                  <Image style={styles.image} source={require('../../asset/image/food1.jpg')} />
                )
            }

          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View>
            <TextInput
              style={[styles.textInput, { marginTop: 20, fontSize: 20, fontWeight: 'bold', height: 70 }]}
              placeholder='Tên món:Món canh ngon nhất nhà mình' placeholderTextColor={COLOR.TextAdd} />
          </View>
          <View>
            <TextInput
              numberOfLines={4}
              editable
              multiline
              style={[styles.textInput, { height: 110, textAlign: 'left', fontWeight: 'normal', fontSize: 17, marginTop: 5 }]}
              placeholder='Hãy chia sẽ với mọi người về món này của bạn nhé.Ai hay điều gì đã truyền cảm hứng cho bạn nấu nó? Tại sao nó đặc
             biệt?Bạn thích thưởng thức nó theo cách nào? ' placeholderTextColor={COLOR.TextAdd} />
            <View style={{ marginTop: -10 }}>
              <Text style={{ color: COLOR.WHITE, textAlign: 'center' }}>------------------------------------------------------------------------------------------</Text>
            </View>
            <TextInput style={[styles.textInput, { marginTop: -8, height: 40, fontSize: 16 }]}
              placeholderTextColor={COLOR.TextAdd} placeholder='Thêm xuất xứ của món                                           >' />
          </View>

          <View style={styles.boxTimeAndRation} >
            <View style={[styles.rowItem, { marginTop: 15 }]}>
              <Text style={styles.text}>Khẩu phần</Text>
              <TextInput placeholderTextColor={COLOR.TextAdd} placeholder=' 2 người' style={styles.textInput2}></TextInput>
            </View>
            <View style={[styles.rowItem, { marginTop: 15 }]}>
              <Text style={styles.text}>Thời gian nấu</Text>
              <TextInput placeholderTextColor={COLOR.TextAdd} placeholder=' 1 tiếng 30 phút' style={styles.textInput2}></TextInput>
            </View>
          </View>

          <View style={styles.line} />
          <View style={styles.boxIngredient}>
            <Text style={[styles.text3, {}]}>Nguyên Liệu</Text>
            <View style={styles.Ingredient}>
              {
                <View >
                  {
                    ingredient.map((item) => <ItemIngredient dulieu={item} key={item._id} />)
                  }
                  {/* <FlatList
                    data={ingredient}
                    scrollEnabled={false}
                    renderItem={({ item }) => <ItemIngredient dulieu={item} />}
                    keyExtractor={item => item._id} /> */}
                </View>
              }
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={addElement}>
                  <Text style={styles.text2}>+ Nguyên liệu</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.text2}>+ Phần</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.newStep}>
            <Text style={styles.text3}>Cách Làm</Text>
            {
              step.map((item) => <ItemAddnewSteps dulieu={item} key={item._id} />)
            }
            <TouchableOpacity>
              <Text style={[styles.text, { textAlign: 'center' }]}>+ Thêm Bước</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default AddNew

var dataSteps = [
  { _id: "0", text: "Object1 1" },
  { _id: "1", text: "Object 2" },
]
var dataStep2 = [

  { _id: "0", text: "1" },
  { _id: "1", text: "2" },
  { _id: "2", text: "3" }

]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  main: {
    backgroundColor: '#373737',
    width: 400,
    borderWidth: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.BACKGROUND2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',

  },
  icon: {
    width: 25,
    height: 25,
    tintColor: COLOR.WHITE,

  },
  image: {
    width: windowWIdth,
    height: 200,
  },
  buttonAdd: {
    padding: 15,
    height: 50,
    borderRadius: 10,
    borderColor: COLOR.PRIMARY,
    marginRight: 20,
  },
  btnLuu: {
    marginLeft: 150,
    backgroundColor: COLOR.BACKGROUND,
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
    padding: 15,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  buttonImage: {

    alignItems: "center"
  },
  textButton: {
    fontWeight: '600',
    textAlign: 'center',
  },
  anh: {

    width: windowWIdth,
    backgroundColor: COLOR.BACKGROUND6,
    height: 200,

  },
  textInput: {
    width: windowWIdth - 20,
    marginHorizontal: 10,
    height: 80,
    backgroundColor: COLOR.BACKGROUND6,
    marginTop: 10,
    borderRadius: 8,
    fontSize: 15,
    color: COLOR.WHITE,
    paddingHorizontal: 10,
  },
  textInput2: {

    width: 200,
    height: 37,
    backgroundColor: COLOR.BACKGROUND6,
    marginTop: 10,
    borderRadius: 6,
    fontSize: 15,
    color: COLOR.WHITE,
    paddingHorizontal: 15,
  },
  textNumber: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 1000,
    height: 25,
    width: 25,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: COLOR.BLACK,
    fontSize: 15
  },
  text: {
    color: COLOR.WHITE,
    fontSize: 16,
    marginTop: 14
  },
  text1: {
    height: 5,
    backgroundColor: COLOR.BACKGROUND6,
    marginTop: 20,
    marginStart: 0,
    marginEnd: 0
  },
  text2: {
    color: COLOR.WHITE,
    fontSize: 17,
    marginTop: 20
  },
  text3: {
    color: COLOR.WHITE,
    fontSize: 21,
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newStep: {
    marginBottom: 90,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  boxTimeAndRation: {
    width: windowWIdth,
    justifyContent: 'space-between',
    // borderWidth:2,borderColor:'white',
    paddingHorizontal: 10,
  },
  line: {
    height: 6,
    width: windowWIdth,
    backgroundColor: COLOR.BACKGROUND6,
    marginVertical: 30,
    // borderWidth:2,borderColor:'white',

  },
  Ingredient: {
    justifyContent: 'space-between'
  },
  boxIngredient: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,

  }
})

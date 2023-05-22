import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, ToastAndroid, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import ItemIngredient from '../../component/ItemIngredient'
import ItemAddnewSteps from '../../component/ItemAddnewSteps'


const AddNew = () => {
  const [nguyenlieu, setnguyenlieu] = useState(datane);
  const [cachlam, setcachlam] = useState(cachlam1)
  const [idx, incr] = useState(2);
  const addElement = () => {
    var newArray = [...datane, { _id: toString(idx), text: "teen " + (idx + 1) }];
    datane.push({ _id: toString(idx), text: "teen " + (idx + 1) });
    incr(idx + 1);
    setnguyenlieu(newArray);

  }
  return (
    <ScrollView style={{ backgroundColor: COLOR.BLACK }}>
      <View style={styles.container}>
        {/* <View style={styles.main}> */}
        {/** Header*/}

        <View style={styles.header}>
          <Image style={[styles.icon, { marginTop: 20 }]} source={require('../../asset/icon/icon_back.png')} />

          <TouchableOpacity style={[styles.buttonAdd, { marginLeft: 150, backgroundColor: '#202020', borderWidth: 1, borderColor: COLOR.WHITE }]}>
            <Text style={[styles.textButton, { color: "#FCF0F0", width: 50 }]}>Lưu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonAdd, { backgroundColor: '#837B7B', marginRight: 20 }]}>
            <Text style={[styles.textButton, { fontFamily: 'Poppins' }]}>Đăng món</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.anh}>
          <TouchableOpacity style={styles.btnimage}>
            <Image style={styles.image} source={require('../../asset/image/dinner2.png')} />
            <Text style={{ color: COLOR.WHITE, marginTop: 20 }}><Image source={require('../../asset/icon/icon_camera.png')} ></Image>  Đăng hình đại diện món ăn</Text>

          </TouchableOpacity>

        </View>
        <View>
          <TextInput style={[styles.textinput, { fontSize: 20, fontWeight: 'bold', height: 70 }]} placeholder='Tên món:Món canh ngon nhất nhà mình' placeholderTextColor={COLOR.TextAdd}></TextInput>

        </View>
        <View>
          <TextInput
            numberOfLines={4}
            editable
            multiline
            style={[styles.textinput, { height: 110, textAlign: 'auto', fontWeight: 'normal', fontSize: 18 }]} placeholder='Hãy chia sẽ với mọi người về món này của
            bạn nhé.Ai hay điều gì đã truyền cảm hứng cho bạn nấu nó? Tại sao nó đặc biệt?Bạn thích thưởng thức nó theo cách nào? ' placeholderTextColor={COLOR.TextAdd}></TextInput>
          <View style={{ marginTop: -10 }}>
            <Text style={{ color: COLOR.WHITE }}>------------------------------------------------------------------------------------------------------</Text>
          </View>
          <TextInput style={[styles.textinput, { marginTop: -8, height: 40, fontSize: 16 }]} placeholderTextColor={COLOR.TextAdd} placeholder='Thêm xuất xứ của món                                                     >' >

          </TextInput>
        </View>
        <View>
          <View style={[styles.header, { marginTop: 15 }]}>
            <Text style={{ color: '#FFFDFD', fontSize: 17, marginTop: 14 }}>Khẩu phần</Text>
            <TextInput placeholderTextColor={COLOR.TextAdd} placeholder=' 2 người' style={[styles.textinput, { borderRadius: 5, width: 200, height: 37 }]}></TextInput>


          </View>
          <View style={[styles.header, { marginTop: 15 }]}>
            <Text style={{ color: '#FFFDFD', fontSize: 17, marginTop: 14 }}>Thời gian nấu</Text>
            <TextInput placeholderTextColor={COLOR.TextAdd} placeholder=' 1 tiếng 30 phút' style={[styles.textinput, { borderRadius: 5, width: 200, height: 37 }]}></TextInput>


          </View>
          {/* <View style={{ height: 5, backgroundColor: '#6C6969', marginTop: 20, marginStart: 0, marginEnd: 0 }}>
          </View>
          */}
          <View>
            <Text style={{ color: '#FFFDFD', fontSize: 22, marginTop: 10, fontWeight: 'bold' }}>Nguyên Liệu</Text>
            {
              <View style={[, { marginTop: 10 }]}>
                {
                  nguyenlieu.map((item) => <ItemIngredient dulieu={item} key={item._id} />)
                }
                {/* <FlatList
                  data={nguyenlieu}
                  scrollEnabled={false}
                  renderItem={({ item }) => <ItemIngredient dulieu={item} />}
                  keyExtractor={item => item._id} /> */}
              </View>
            }

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity onPress={addElement}>
                <Text style={{ color: '#FFFDFD', fontSize: 17, marginTop: 20 }}>+ Khẩu phần</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ color: '#FFFDFD', fontSize: 17, marginTop: 20 }}>+ Nguyên liệu</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 5, backgroundColor: '#6C6969', marginTop: 20, marginStart: 0, marginEnd: 0 }}></View>
          <View >
            <Text style={{ color: '#FFFDFD', fontSize: 22, marginTop: 10, fontWeight: 'bold' }}>Cách Làm</Text>
            {
              cachlam.map((item) => <ItemAddnewSteps dulieu={item} key={item._id} />)
            }
            <TouchableOpacity>
              <Text style={{ color: '#FFFDFD', fontSize: 17, marginTop: 20, textAlign: "center" }}>+ Nguyên liệu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </View> */}
    </ScrollView>
  )
}

export default AddNew

var datane = [
  { _id: "0", text: "Object1 1" },
  { _id: "1", text: "Object 2" },
]
var cachlam1= [

  { _id: "0", text: "1" },
  { _id: "1", text: "2" },
  { _id: "2", text: "3" }

]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    flexDirection: 'column'
  },
  main: {
    backgroundColor: '#373737',

    width: 400,
    borderWidth: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#EBEFF5'
  },
  image: {
    width: 74,
    height: 72,


  },
  buttonAdd: {

    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    borderColor: COLOR.PRIMARY
  },
  btnimage: {
    marginTop: 30,
    alignItems: "center"
  },
  textButton: {
    fontWeight: '600',
    textAlign: 'center'

  },
  anh: {
    marginTop: 2,
    width: 420,
    backgroundColor: "#6C6969",
    height: 180,
    marginLeft: -10,
    marginRight: -10

  },
  textinput: {
    width: 390,
    height: 80,
    backgroundColor: "#6C6969",
    marginTop: 10,
    borderRadius: 10,
    fontSize: 15,
    fontStyle: 'normal',
    color: COLOR.TextAdd
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
  }

})
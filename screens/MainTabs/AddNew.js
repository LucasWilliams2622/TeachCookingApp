import { StyleSheet, Text, TextInput, Dimensions, View, StatusBar, Image, TouchableOpacity, ScrollView, ToastAndroid, FlatList, Alert } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import ItemIngredient from '../../component/ItemIngredient'
import ItemAddnewSteps from '../../component/ItemAddnewSteps'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosInstance from '../../constants/AxiosInstance';
import { Children } from 'react/cjs/react.production.min'
import { Button } from 'react-native-paper'
import { AppContext } from '../../utils/AppContext'

const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AddNew = () => {
  // title, description, image, ingredient, steps, time, difficulty, mealType, author
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('')
  const [mealType, setMealType] = useState('');

  const [time, setTime] = useState('');
  const [idVideo, setIdVideo] = useState('')
  const [steps, setSteps] = useState([]);

  const [ingredients, setIngredients] = useState([]);
  const [author, setAuthor] = useState('');

  const [idex, setIndex] = useState(0);
  const [quantity, setQuantity] = useState('')
  const [unit, setUnit] = useState('')
  const [name, setName] = useState('')

  const [quantity2, setQuantity2] = useState('')
  const [unit2, setUnit2] = useState('')
  const [name2, setName2] = useState('')

  const [quantity3, setQuantity3] = useState('')
  const [unit3, setUnit3] = useState('')
  const [name3, setName3] = useState('')

  const [step, setStep] = useState('')
  const [step2, setStep2] = useState('')
  const [step3, setStep3] = useState('')

  const { idUser, infoUser } = useContext(AppContext);
  const [message, setMessage] = useState([])
  const checkStepsAndIngredients = async () => {
    await handleAddIngredient()
    await handleAddStep()
    if ((ingredients != null) && (steps != null)) {
      console.log("AAAAAA");
      addNewRecipe()

    } else {
      console.log("NO DATA");
    }
  }
  const addNewRecipe = async () => {
    try {
      await handleAddIngredient()
      await handleAddStep()
      console.log("title", title);
      console.log("description", description);
      console.log("image", image);
      console.log("mealType", mealType);

      console.log("time", time);
      console.log("idVideo", idVideo);
      console.log("ingredients====>", ingredients);
      console.log("steps=======>", steps);

      const response = await AxiosInstance().post("/recipe/api/new", {
        title: title, description: description,
        ingredients: ingredients, time: time,
        steps: steps, image: image,
        mealType: mealType,
        author: idUser, idVideo: idVideo,
      });
      console.log(response);
      if (response.result) {
        ToastAndroid.show("Đăng món thành công", ToastAndroid.SHORT);
        clearInput()

      } else {
        ToastAndroid.show("Đăng món thất bại", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    return () => {

    }
  }, [])

  const handleAddIngredient = () => {
    const newIngredient = {
      quantity: quantity,
      unit: unit,
      name: name
    };
    const newIngredient2 = {
      quantity: quantity2,
      unit: unit2,
      name: name2
    };
    const newIngredient3 = {
      quantity: quantity3,
      unit: unit3,
      name: name3
    };
    setIngredients([...ingredients, newIngredient, newIngredient2, newIngredient3]);
    // setIngredients([...ingredients, newIngredient]);

    console.log("ingredients=========>", ingredients);

  };
  const handleAddStep = () => {
    const newStep = {
      // order: 1,
      description: step
    };
    const newStep2 = {
      // order: 2,
      description: step2  
    };
    const newStep3 = {
      // order: 3,
      description: step3
    };
    setSteps([...steps, newStep, newStep2, newStep3]);
    console.log("STEP=========>", steps);

  };
  const handleQuantityChange = (text) => {
    setQuantity(text);
  };
  const handleUnitChange = (text) => {
    setUnit(text);
  };
  const handleNameChange = (text) => {
    setName(text);
  };

  const handleQuantityChange2 = (text) => {
    setQuantity2(text);
  };
  const handleUnitChange2 = (text) => {
    setUnit2(text);
  };
  const handleNameChange2 = (text) => {
    setName2(text);
  };

  const handleQuantityChange3 = (text) => {
    setQuantity3(text);
  };
  const handleUnitChange3 = (text) => {
    setUnit3(text);
  };
  const handleNameChange3 = (text) => {
    setName3(text);
  };


  const handleAddInput = () => {
    let newIngredient = {
      id: idex + 1,
      quantity: quantity,
      unit: unit,
      name: name,
    };

    let newIngredients = [...ingredients, newIngredient];

    setIndex(idex + 1);
    setIngredients(newIngredients);
    console.log(ingredients);
  };
  // const handleAddIngredient = (newIngredient) => {
  //   setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  // };
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
    const formData = new FormData();
    formData.append('image', {
      uri: result.assets[0].uri,
      type: 'icon/icon_jpeg',
      name: 'image.jpg',
    });

    const response = await AxiosInstance("multipart/form-data").post('/recipe/api/upload-image', formData);
    console.log(response.link);
    if (response.result == true) {
      setImage(response.link);
      ToastAndroid.show("Upload Image Success", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Upload Image Failed", ToastAndroid.SHORT);
    }
  }
  const getImageLibrary = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    const formData = new FormData();
    formData.append('image', {
      uri: result.assets[0].uri,
      type: 'icon/icon_jpeg',
      name: 'image.jpg',
    });
    const response = await AxiosInstance("multipart/form-data").post('/recipe/api/upload-image', formData);
    console.log(response.link);
    if (response.result == true) {
      setImage(response.link);
      ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
    }
  }

  const handleCheckInput = () => {
    if (name.trim() === '') {
      Alert.alert('Error', 'Vui lòng nhập tiêu đề');
    }
  };

  const callbackFunction = (text) => {
    setMessage(text);
    console.log(message)
  }
  return (
    <ScrollView style={{ backgroundColor: COLOR.BACKGROUND }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={[styles.icon, {}]} source={require('../../asset/icon/icon_back.png')} />
          <TouchableOpacity style={styles.btnLuu}>
            <Text style={[styles.textButton, { color: COLOR.PRIMARY, width: 50 }]} onPress={handleCheckInput}>Lưu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonAdd, { backgroundColor: COLOR.GRAY1 }]} onPress={checkStepsAndIngredients}>
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
                  <Image style={styles.image} source={{ uri: image }} />
                )
            }
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View>
            <TextInput
              style={[styles.textInput, { marginTop: 20, fontSize: 20, fontWeight: 'bold', height: 70 }]}
              value={title} onChangeText={setTitle} placeholder='Tiêu đề: Món ăn ngon nhất nhà mình' placeholderTextColor={COLOR.TextAdd} />
          </View>
          <View>
            <TextInput
              numberOfLines={4}
              editable
              multiline
              style={[styles.textInput, { height: 110, textAlign: 'left', fontWeight: 'normal', fontSize: 17, marginTop: 5 }]}
              placeholder='Hãy chia sẽ với mọi người về món này của bạn nhé.Ai hay điều gì đã truyền cảm hứng cho bạn nấu nó? Tại sao nó đặc
             biệt?Bạn thích thưởng thức nó theo cách nào? ' placeholderTextColor={COLOR.TextAdd} onChangeText={setDescription} value={description} />
            <View style={{ marginTop: -10 }}>
              <Text style={{ color: COLOR.WHITE, textAlign: 'center' }}>------------------------------------------------------------------------------------------</Text>
            </View>
            <TextInput style={[styles.textInput, { marginTop: -8, height: 40, fontSize: 16 }]}
              placeholderTextColor={COLOR.TextAdd} placeholder='Thêm loại món' />
          </View>

          <View style={styles.boxTimeAndRation} >
            <View style={[styles.rowItem, { marginTop: 15 }]}>
              <Text style={styles.text}>Khẩu phần</Text>
              <TextInput placeholderTextColor={COLOR.TextAdd} placeholder=' 2 người' keyboardType='numeric'
                onChangeText={setMealType} style={styles.textInput2} value={mealType}></TextInput>
            </View>
            <View style={[styles.rowItem, { marginTop: 15 }]}>
              <Text style={styles.text}>Thời gian nấu</Text>
              <TextInput placeholderTextColor={COLOR.TextAdd} placeholder=' 1 tiếng 30 phút'
                keyboardType='numbers-and-punctuation' style={styles.textInput2} onChangeText={setTime} value={time}></TextInput>
            </View>
            <View style={[styles.rowItem, { marginTop: 15 }]}>
              <Text style={styles.text}>Id video Youtube</Text>
              <TextInput placeholderTextColor={COLOR.TextAdd} placeholder='ABC-XYZ'
                keyboardType='numbers-and-punctuation' style={styles.textInput2} onChangeText={setIdVideo} value={idVideo}></TextInput>
            </View>
          </View>

          <View style={styles.line} />
          <Text style={[styles.text3, { left: -120 }]}>Nguyên Liệu</Text>

          <View style={styles.boxIngredient}>
            <View style={styles.Ingredient}>



              {/* {ingredients.map((value, key) => <ItemIngredient setData={value}
                    key={key} callbackFunction={callbackFunction} name={message}
                    setName={setMessage} />)} */}

              <View style={[styles.item, {}]}>
                <Image style={[styles.icon]} source={require('../../asset/icon/icon_menu.png')} />
                <TextInput
                  placeholderTextColor={COLOR.GRAY1}
                  placeholder='1'
                  style={[styles.textinput]}
                  value={quantity}
                  onChangeText={handleQuantityChange}
                />
                <TextInput
                  placeholderTextColor={COLOR.GRAY1}
                  placeholder='kg'
                  style={[styles.textinput]}
                  value={unit}
                  onChangeText={handleUnitChange}
                />
                <TextInput
                  placeholderTextColor={COLOR.GRAY1}
                  placeholder='Chanh'
                  style={[styles.textinput]}
                  value={name}
                  onChangeText={handleNameChange}
                />
                <TouchableOpacity onPress={{}}>
                  <Text style={{ color: 'white' }}>X</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.item, {}]}>
                <Image style={[styles.icon]} source={require('../../asset/icon/icon_menu.png')} />
                <TextInput
                  placeholderTextColor={COLOR.GRAY1}
                  placeholder='1'
                  style={[styles.textinput]}
                  value={quantity2}
                  onChangeText={handleQuantityChange2}
                />
                <TextInput
                  placeholderTextColor={COLOR.GRAY1}
                  placeholder='kg'
                  style={[styles.textinput]}
                  value={unit2}
                  onChangeText={handleUnitChange2}
                />
                <TextInput
                  placeholderTextColor={COLOR.GRAY1}
                  placeholder='Chanh'
                  style={[styles.textinput]}
                  value={name2}
                  onChangeText={handleNameChange2}
                />
                <TouchableOpacity onPress={{}}>
                  <Text style={{ color: 'white' }}>X</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.item, {}]}>
                <Image style={[styles.icon]} source={require('../../asset/icon/icon_menu.png')} />
                <TextInput
                  placeholderTextColor={COLOR.GRAY1}
                  placeholder='1'
                  style={[styles.textinput]}
                  value={quantity3}
                  onChangeText={handleQuantityChange3}
                />
                <TextInput
                  placeholderTextColor={COLOR.GRAY1}
                  placeholder='kg'
                  style={[styles.textinput]}
                  value={unit3}
                  onChangeText={handleUnitChange3}
                />
                <TextInput
                  placeholderTextColor={COLOR.GRAY1}
                  placeholder='Chanh'
                  style={[styles.textinput]}
                  value={name3}
                  onChangeText={handleNameChange3}
                />
                <TouchableOpacity onPress={{}}>
                  <Text style={{ color: 'white' }}>X</Text>
                </TouchableOpacity>
              </View>


              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
                <TouchableOpacity onPress={handleAddInput}>
                  <Text style={styles.text2}>+ Nguyên liệu</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.newStep}>
            <Text style={styles.text3}>Cách Làm</Text>
            {/* {
              steps.map((item) => <ItemAddnewSteps data={item} key={item._id} />)
            } */}

            <View style={styles.container2}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textNumber2}>1</Text>
                <Image style={styles.icon2} source={require('../../asset/icon/icon_menu.png')}></Image>
              </View>
              <TextInput placeholderTextColor={COLOR.TextAdd} placeholder='Sơ chế nguyên liệu'
                style={styles.TextInput} onChangeText={(text) => setStep(text)}></TextInput>
            </View>
            <View style={styles.container2}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textNumber2}>2</Text>
                <Image style={styles.icon2} source={require('../../asset/icon/icon_menu.png')}></Image>
              </View>
              <TextInput placeholderTextColor={COLOR.TextAdd} placeholder='Sơ chế nguyên liệu'
                style={styles.TextInput} onChangeText={(text) => setStep2(text)}></TextInput>
            </View>
            <View style={styles.container2}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textNumber2}>3</Text>
                <Image style={styles.icon2} source={require('../../asset/icon/icon_menu.png')}></Image>
              </View>
              <TextInput placeholderTextColor={COLOR.TextAdd} placeholder='Sơ chế nguyên liệu'
                style={styles.TextInput} onChangeText={(text) => setStep3(text)}></TextInput>
            </View>

            <TouchableOpacity>
              <Text style={[styles.text, { textAlign: 'center' }]}>+ Thêm Bước</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar barStyle="light-content" backgroundColor={COLOR.BACKGROUND2} />
    </ScrollView>
  )
}

export default AddNew

// var dataSteps = [
//   { _id: "0", text: "Object1 1" },
//   { _id: "1", text: "Object 2" },
// ]
// var dataStep2 = [

//   { _id: "0", text: "1" },
//   { _id: "1", text: "2" },
//   { _id: "2", text: "3" }

// ]
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
    marginTop: 20,
    marginBottom: 15,
    // borderWidth:2,borderColor:'white',

  },
  Ingredient: {
    justifyContent: 'space-between',
    width: '100%'
  },
  boxIngredient: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,

  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: windowWIdth - 20,
    alignItems: 'center',
    // borderWidth: 2, borderColor: 'white',
    marginBottom: 25,

  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,

  },
  textinput: {
    width: '26%',
    height: 40,
    backgroundColor: COLOR.BACKGROUND6,
    marginTop: 10,
    borderRadius: 7,
    fontSize: 15,
    color: COLOR.WHITE,
    marginRight: 15,
    borderWidth: 0.4,
    borderColor: COLOR.GRAY1,
    paddingHorizontal: 10,

  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  textNumber2: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 1000,
    height: 22,
    width: 22,
    textAlign: 'center',
    marginTop: 10,
    color: COLOR.BLACK,
    fontSize: 14
  },
  icon2: {
    width: 20,
    height: 20,
    marginTop: 7
  },
  TextInput: {
    width: 310,
    height: 52,
    backgroundColor: COLOR.BACKGROUND6,
    marginTop: 10,
    borderRadius: 6,
    fontSize: 15,
    marginLeft: 15,
    paddingLeft: 10,
    color: COLOR.WHITE
  },
})

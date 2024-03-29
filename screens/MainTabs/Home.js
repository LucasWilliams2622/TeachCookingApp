import { StyleSheet, Text, View, Image, TextInput, FlatList, StatusBar, Dimensions, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper';
import ItemCategories from '../../component/ItemCategories'
import ItemDishes from '../../component/ItemDishes'
import ItemDishesVertical from '../../component/ItemDishesVertical'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AxiosInstance from '../../constants/AxiosInstance'
import { ActivityIndicator } from 'react-native-paper';

const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = (props) => {
  const { navigation } = props;
  const [recipe, setRecipe] = useState([]);
  const [category, setCategory] = useState("");
  const [isLoading, setisLoading] = useState(true);
  let timeOut = null;
  const getAllCategory = async () => {
    try {
      const response = await AxiosInstance().get("category/api/get-all");
      // console.log(response)
      if (response.result) {
        setCategory(response.category);
        setisLoading(false);
      } else {
        console.log("Failed to get all category");
      }
    } catch (error) {
      console.log("Failed to get all category !!!");
    }
  }

  const getAllRecipe = async () => {
    try {
      const response = await AxiosInstance().get("recipe/api/get-all");
      if (response.result) {
        setRecipe(response.recipe);
      } else {
        console.log("Failed to get all RECIPE");
      }
    } catch (error) {
      console.log("=========>", error);
    }
  }
  const changeLimit = async () => {
    try {
      const response = await AxiosInstance().get("recipe/api/changeLimit");
      if (response.result) {
        setRecipe(response.recipe);
      } else {
        console.log("Failed to get all RECIPE");
      }
    } catch (error) {
      console.log("=========>", error);
    }
  }

  const countDownSearch = (searchText) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      search(searchText);
    }, 1000);
  }
  const search = async (searchText) => {
    try {
      setisLoading(true);
      const response = await AxiosInstance().get("recipe/api/search-by-title?title=" + searchText);
      if (response.result) {
        setRecipe(response.recipe);
        setisLoading(false);
      } else {
        ToastAndroid.show('lay du lieu that bai', ToastAndroid.SHORT);
        getAllRecipe();
      }
    } catch (error) {
      console.log(error, "Error")
    }
  }

  useEffect(() => {
    getAllRecipe();
    getAllCategory();
  }, [recipe])

  const goDetail = () => {
    navigation.navigate('DetailFood')
  }
  const goSearch = () => {
    navigation.navigate('Search')
  }
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.main}
          ListHeaderComponent={
            <>
              {/* Header */}
              <View style={styles.header}>
                <TouchableOpacity>
                  <Image style={styles.logo} source={require('../../asset/image/logo.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxSearch} onPress={() => { goSearch() }}>
                  <Image style={styles.iconSearch} source={require('../../asset/icon/icon_search.png')} />
                  <TextInput
                    style={styles.input}
                    placeholder='Tìm kiếm tên món ăn ...'
                    placeholderTextColor="#A8A8A8" onChangeText={(text) => countDownSearch(text)} />
                </TouchableOpacity>
              </View>
              {/* Slide show */}
              <View style={styles.wrapper} >
                <Swiper showsButtons={false} autoplay={true} showsPagination={false}>
                  <View style={styles.slide}>
                    <Image style={styles.image} source={require('../../asset/image/food1.jpg')} />
                  </View>
                  <View style={styles.slide}>
                    <Image style={styles.image} source={require('../../asset/image/food2.jpg')} />
                  </View>
                  <View style={styles.slide}>
                    <Image style={styles.image} source={require('../../asset/image/food3.jpg')} />
                  </View>
                </Swiper>
              </View>

              <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <FlatList
                  style={{ marginBottom: 10, marginTop: 10, }}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}

                  horizontal
                  data={category}
                  renderItem={({ item }) => <ItemCategories category={item}/>}
                  keyExtractor={eachCategory => eachCategory.name}
                />
              </ScrollView>


              <View style={{ height: 270, }}>
                {
                  isLoading == true ?
                    (<View style={{ alignSelf: 'center', marginTop: 200 }}>
                      <ActivityIndicator size='large' color='white' />
                      <Text style={{ color: 'white', fontSize: 18, fontWeight: '600', marginTop: 20, }} >Loading...</Text>
                    </View>)
                    : (<FlatList
                      style={{ marginBottom: 10, }}
                      showsHorizontalScrollIndicator={false}
                      horizontal
                      data={recipe}
                      renderItem={({ item }) => (<ItemDishes
                        recipe={item}
                        key={item.id}
                        navigation={navigation}
                      />)}
                      keyExtractor={eachDishes => eachDishes.name}
                    />)}
              </View>
              <TouchableOpacity style={styles.buttonSuggest} onPress={() => { }}>
                <Image style={[styles.iconSearch2,]} source={require('../../asset/icon/icon_search.png')} />
                <Text style={[styles.text, { marginLeft: 10 }]}>Gợi ý khác</Text>
              </TouchableOpacity>

              <View style={styles.spaceLine} />
              <View style={styles.newDishes}>
                <Text style={styles.title}>Món mới nhất</Text>
                {
                  isLoading == true ?
                    (
                      <View style={{ alignSelf: 'center', marginTop: 200 }}>
                        <ActivityIndicator size='large' color='white' />
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '600', marginTop: 20, }} >Loading...</Text>
                      </View>
                    )
                    : (
                      <FlatList
                        style={{ marginBottom: 10, }}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        vertical
                        data={recipe}

                        renderItem={({ item }) => (
                          <ItemDishesVertical
                            key={item._id}
                            recipe={item}
                            navigation={navigation}
                          />
                        )}
                        keyExtractor={item => item._id}
                      // contentContainerStyle={{ marginHorizontal: 10 }}
                      // ItemSeparatorComponent={() => <View style={{ height: 20 }} />
                      // }
                      />
                    )
                }
                <TouchableOpacity style={styles.buttonSuggest} onPress={changeLimit}>
                  <Text style={[styles.text, { marginLeft: 10 }]}>Xem thêm</Text>
                </TouchableOpacity>
              </View>
            </>
          }
        />
      </SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={COLOR.BACKGROUND} />
    </KeyboardAwareScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND

  },
  main: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
    marginTop: 15
  },
  header: {
    flexDirection: 'row',
    height: 45,
    marginHorizontal: 10,
    // borderWidth:2,
    // borderColor:'white',
  },
  logo: {
    width: 45,
    height: 45,
  },
  iconSearch: {
    width: 30,
    height: 30,
    tintColor: '#cdced3',
    marginLeft: 10,

  },
  boxSearch: {
    backgroundColor: COLOR.GRAY,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '82%',
    marginLeft: 20,
    borderRadius: 10,

  },
  input: {
    color: COLOR.WHITE,
    placeholder: COLOR.WHITE
  },


  wrapper: {
    marginTop: 17,
    height: 200,

  },
  slide: {
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BACKGROUND
  },
  image: {
    width: '100%',
    height: 200,
    borderWidth: 2,
    borderColor: COLOR.BACKGROUND,
    borderRadius: 20,

  },
  buttonSuggest: {
    flexDirection: 'row',
    backgroundColor: COLOR.BACKGROUND3,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: COLOR.WHITE,

  },
  iconSearch2: {
    tintColor: COLOR.WHITE,
    width: 20,
    height: 20,

  },
  spaceLine: {
    marginVertical: 20,
    height: 3,
    width: '100%',
    backgroundColor: COLOR.BACKGROUND_ORIGIN,
  },
  newDishes: {
    marginBottom: 80,
    // borderWidth: 2,
    // borderColor: 'red'
  },
  title: {
    fontSize: 20,
    color: COLOR.WHITE,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 12,

  },
  step: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 10000,
    borderWidth: 2,
    borderColor: COLOR.WHITE,
    height: 23,
    marginBottom: 900,
    width: 23,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepText: {
    color: COLOR.BLACK, fontSize: 10
  }
})
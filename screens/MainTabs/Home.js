import { StyleSheet, Text, View, Image, TextInput, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper';
import ItemCategories from '../../component/ItemCategories'
import ItemDishes from '../../component/ItemDishes'
import ItemDishesVertical from '../../component/ItemDishesVertical'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AxiosInstance from '../../constants/AxiosInstance'

const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = (props) => {
  const { navigation } = props;
  const [dataRecipe, setDataRecipe] = useState([]);
  const [category, setCategory] = useState("")
  const [dishes, setDishes] = useState([])
  const getAllCategory = async () => {
    try {
      const response = await AxiosInstance().get("category/api/get-all");
      // console.log(response)
      if (response.result) {
        setCategory(response.category)
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
      // console.log(response.recipe)
      if (response.result) {
        setDataRecipe(response.recipe);
        setDishes(response.recipe)
        // console.log("data recipe:  ", dataRecipe);
        response.recipe.forEach(recipe => {
          console.log(recipe._id);
          // console.log(recipe.title);
          // console.log("=========>",recipe.image);
        });
      } else {
        console.log("Failed to get all RECIPE");
      }
    } catch (error) {
      console.log("=========>", error);
    }
  }
  useEffect(() => {

    getAllRecipe();
    getAllCategory();
    return () => {

    }
  }, [])

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
                    placeholderTextColor="#A8A8A8" />
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

              <View style={{ marginTop: 10, }}>
                <ScrollView>
                  <FlatList
                    style={{ marginBottom: 10, }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={category}
                    renderItem={({ item }) => <ItemCategories category={item}
                    />}
                    keyExtractor={eachCategory => eachCategory.name}
                  />
                </ScrollView>

                {/* <View >
            {
              category.map((item) => <ItemCategories  horizontal category={item} />)
            }
          </View> */}
                <View style={{ height: 270, }}>

                  <FlatList
                    style={{ marginBottom: 10, }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={dataRecipe}
                    renderItem={({ item }) => (<ItemDishes
                      recipe={item}
                      key={item.id}
                      onPress={() => {
                        goDetail()
                      }}
                    />)}
                    keyExtractor={eachDishes => eachDishes.name}
                  />
                </View>
                <TouchableOpacity style={styles.buttonSuggest} onPress={() => { }}>
                  <Image style={[styles.iconSearch2,]} source={require('../../asset/icon/icon_search.png')} />
                  <Text style={[styles.text, { marginLeft: 10 }]}>Gợi ý khác</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.spaceLine}>
              </View>
              <View style={styles.newDishes}>
                <Text style={styles.title}>Món mới nhất</Text>
                <FlatList
                  style={{ marginBottom: 10, }}
                  showsHorizontalScrollIndicator={false}
                  numColumns={2}
                  vertical
                  data={dataRecipe}

                  renderItem={({ item }) => (
                    <ItemDishesVertical
                      recipe={item}
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={item => item._id}
                // contentContainerStyle={{ marginHorizontal: 10 }}
                // ItemSeparatorComponent={() => <View style={{ height: 20 }} />
                // }
                />
              </View>
            </>
          }
        />
      </SafeAreaView>
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
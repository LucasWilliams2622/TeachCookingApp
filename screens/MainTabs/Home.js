import { StyleSheet, Text, View, Image, TextInput, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper';
import ItemCategories from '../../component/ItemCategories'
import ItemDishes from '../../component/ItemDishes'
import ItemDishesVertical from '../../component/ItemDishesVertical'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Home = (props) => {
  const { navigation } = props;
  const [category, setCategory] = useState([
    {
      name: 'Tất cả',
      backGround: '#EDD0FF'
    },
    {
      name: 'Nướng',
      backGround: '#FFD9BA'
    },
    {
      name: 'Lẩu',
      backGround: '#FACCCC'
    },
    {
      name: 'Rán',
      backGround: '#FBC1BD'
    },
    {
      name: 'Luộc',
      backGround: '#FBC1BD'
    },
    {
      name: 'Xào',
      backGround: '#FBC1BD'
    },
    {
      name: 'Chiên',
      backGround: '#FBC1BD'
    },
    {
      name: 'Hấm',
      backGround: '#FBC1BD'
    },
  ])
  const [dishes, setDishes] = useState([
    {
      nameUser: "Tom",
      avatar: require('../../asset/image/AdventureTime.jpg'),
      image:  require('../../asset/image/logo.png'),
      nameDish: "Pikachu BBQ"
    },
    {
      nameUser: "Jack",
      avatar: require('../../asset/image/AdventureTime.jpg'),
      image:  require('../../asset/image/logo.png'),
      nameDish: "Pikachu Sốt Thái"
    },
    {
      nameUser: "Jason",
      avatar: require('../../asset/image/AdventureTime.jpg'),
      image:  require('../../asset/image/logo.png'),
      nameDish: "Pikachu Hấp Xả"
    }
  ])
  const goDetail = () => {
    navigation.navigate('DetailFood')
  }

  return (
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
          <View style={styles.boxSearch}>
            <Image style={styles.iconSearch} source={require('../../asset/icon/icon_search.png')} />
            <TextInput
              style={styles.input}
              placeholder='Tìm kiếm tên món ăn ...'
              placeholderTextColor="#A8A8A8" />
          </View>
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

        <View
          style={{
            marginTop: 10,
            //  borderWidth: 2,
            // borderColor: 'red'
          }}>
          <FlatList
            style={{ marginBottom: 10, }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={category}
            renderItem={({ item }) => <ItemCategories category={item}
              onPress={() => {

              }}
            />}
            keyExtractor={eachCategory => eachCategory.name}
          />
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
              data={dishes}
              renderItem={({ item }) => <ItemDishes dishes={item}
                onPress={() => {

                  goDetail()

                }}
              />}
              keyExtractor={eachDishes => eachDishes.name}
            />
          </View>
          <TouchableOpacity style={styles.buttonSuggest}>
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
            data={category}
            renderItem={({ item }) => <ItemDishesVertical category={item}
              onPress={() => {

              }}
            />}
            keyExtractor={eachCategory => eachCategory.name}
          />
        </View>
        {/* <View style={styles.step}>
          <Text style={styles.stepText}>1</Text>
        </View> */}
       </>
    }
    data={category}
    renderItem={({ item }) => (
      <FlatList
        style={{ marginBottom: 10, }}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        vertical
        data={category}
        renderItem={({ item }) => <ItemDishesVertical category={item}
          onPress={() => {

          }}
        />}
        keyExtractor={eachCategory => eachCategory.name}
      />
    )}
    keyExtractor={eachCategory => eachCategory.name}
  />
    </SafeAreaView>
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
    marginHorizontal: 10,
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
    marginBottom: 10

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
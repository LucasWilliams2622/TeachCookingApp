import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper';
import ItemCategories from '../../component/ItemCategories'
import ItemDishes from '../../component/ItemDishes'


const Home = ({ navigation }) => {
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

    {
      name: 'Ăn sống',
      backGround: '#FBC1BD'
    },
  ])


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>
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
            marginBottom: 350,


          }}>
          <FlatList
            style={{ marginBottom: 10, borderWidth: 2, borderColor: 'red' }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={category}
            renderItem={({ item }) => <ItemCategories category={item}
              onPress={() => {

              }}
            />}
            keyExtractor={eachCategory => eachCategory.name}
          />
          <View style={{ height: 270, borderWidth: 2, borderColor: 'red' }}>
            <ItemDishes />
          </View>
        </View>
      </ScrollView>
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
    marginHorizontal: 15,
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
})
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../constants/Themes';

import { SafeAreaView } from 'react-native-safe-area-context';
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ItemDishesVertical = () => {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <SafeAreaView style={styles.itemDishes}>

      <ImageBackground style={styles.image} resizeMode='cover' imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={require('../asset/image/food1.jpg')} >
        <View style={styles.boxSave}>
          {!isSaved
            ?
            (
              <TouchableOpacity onPress={() => setIsSaved(true)}>
                <Image style={[styles.icon, { tintColor: COLOR.WHITE }]} source={require('../asset/icon/icon_save.png')} />
              </TouchableOpacity>
            )
            :
            (
              <TouchableOpacity onPress={() => setIsSaved(false)}>
                <Image style={[styles.icon, { tintColor: COLOR.WHITE }]} source={require('../asset/icon/icon_saved.png')} />
              </TouchableOpacity>
            )}
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.boxInfo}>
          <Image style={styles.avatar} source={require('../asset/image/food1.jpg')} />
          <Text style={styles.nameUser}>Lucas</Text>
        </View>
        <Text style={styles.nameDishes}>Pikachu sốt Thái</Text>
        <View style={styles.boxTime}>
          <Image style={styles.icon} source={require('../asset/icon/icon_clock.png')} />
          <Text style={styles.textTime}>2 giờ</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity style={styles.boxEmotion}>
            <Image style={styles.icon2} source={require('../asset/icon/icon_heart.png')} />
            <Text style={styles.textEmotion}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.boxEmotion, { marginLeft: 9, }]}>
            <Image style={[styles.icon2, { tintColor: COLOR.WHITE }]} source={require('../asset/icon/icon_share.png')} />
            <Text style={styles.textEmotion}>1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ItemDishesVertical

const styles = StyleSheet.create({
  itemDishes: {
    height: 280,
    width: windowWIdth / 2 - 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.BACKGROUND4,
    
    backgroundColor: COLOR.BACKGROUND2
  },
  image: {
    height: 140,
    width: windowWIdth / 2 - 24,
  },
  content: {
    height: 140,
    width: windowWIdth / 2 - 23,

    paddingHorizontal: 7,
  },
  boxInfo: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  avatar: {
    height: 25,
    width: 25,
    borderRadius: 1000,

  },
  nameUser: {
    fontSize: 12,
    fontStyle: 'normal',
    color: COLOR.BACKGROUND4,
    marginLeft: 5,

  },
  nameDishes: {
    marginTop: 8,
    color: COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: 14,
  },
  boxTime: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,

  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLOR.WHITE,

  },

  textTime: {
    fontWeight: '400',
    color: COLOR.WHITE,
    fontSize: 13,
    fontStyle: 'normal',
    marginLeft: 6,
  },

  boxSave: {

    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,

    borderRadius: 20,
    height: 25,
  },
  boxEmotion: {

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BACKGROUND3,

    borderRadius: 20,
    height: 25,
    width: 40
  },
  textEmotion: {
    fontSize: 13,
    marginLeft: 5,
    color: COLOR.WHITE
  },
  icon2: {
    width: 15,
    height: 15,

  },
})
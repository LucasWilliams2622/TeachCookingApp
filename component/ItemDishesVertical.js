import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Themes';
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ItemDishesVertical = () => {
  return (
    <View style={styles.itemDishes}>
      <Image style={styles.image} source={require('../asset/image/food1.jpg')} />
      <View style={styles.content}>
        <View style={styles.boxInfo}>
          <Image style={styles.avatar} source={require('../asset/image/food1.jpg')} />
          <Text style={styles.nameUser}>Lucas</Text>
        </View>
        <Text style={styles.nameDishes}>Pikachu sốt Thái</Text>

      </View>
    </View>
  )
}

export default ItemDishesVertical

const styles = StyleSheet.create({
  itemDishes: {
    height: 280,
    width: windowWIdth / 2 - 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: COLOR.BACKGROUND2
  },
  image: {
    height: 140,
    width: windowWIdth / 2 - 23,
  },
  content: {
    height: 140,
    width: windowWIdth / 2 - 23,
    borderWidth: 2,
    borderColor: 'red',
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
  nameDishes:{
    marginTop:8,
    color:COLOR.WHITE,
    fontWeight:'bold',
    fontSize:14,
  }
})
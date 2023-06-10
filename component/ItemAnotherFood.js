import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../constants/Themes'

const ItemAnotherFood = (props) => {
  const { recipe ,navigation} = props;

  return (
    <TouchableOpacity
      style={{ backgroundColor: COLOR.BACKGROUND }}>
      <View style={{ marginRight: 10 }}>
        <Image source={
          { uri: recipe.image }
          // recipe.image ==null ? require('../asset/image/pikachu.png'): {uri:recipe.image}
        } />
        <Text style={{ color: COLOR.WHITE, fontSize: 15, marginLeft: 10, marginTop: 15 }} >{recipe.title} </Text>
      </View>

    </TouchableOpacity>
  )
}

export default ItemAnotherFood

const styles = StyleSheet.create({})
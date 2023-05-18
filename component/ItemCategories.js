import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../constants/Themes'

const ItemCategories = (props) => {
    const {category} = props
    const {name, image, backGround} = category
    const {onPress} = props
  return (
    <TouchableOpacity
    onPress={onPress}
    style = {{alignItems: 'center', justifyContent: 'center', margin:10}}>
        
        <Text style = {{
          fontSize: 15,
          lineHeight: 18,
          fontWeight: '400',
          color: COLOR.WHITE
        }}>{name}</Text>
        
      </TouchableOpacity>
  )
}

export default ItemCategories

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from './Search'
import { COLOR, ICON } from '../../constants/Themes'


const SearchMenu = () => {
  return (
    <View style={styles.container}>
      <Search/> 
      <Text style={styles.text1}>Món ăn tìm kiếm phổ biến hôm nay</Text>
    </View>
  )
}

export default SearchMenu

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
  },
  text1: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 13,
    color: COLOR.WHITE,
  },
  
})
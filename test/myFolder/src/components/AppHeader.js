import { SafeAreaView, StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Theme'
import { appStyle } from '../constants/AppStyle'

const AppHeader = () => {
  return (
    <SafeAreaView style={[styles.header,{}]}>
      <View style={[appStyle.row,{marginTop:10,}]}>
        <Image source={require('../assets/icons/Left.png')} />
        <Text style={styles.title}>#Dụng cụ bếp</Text>
      </View>
      <View/>
    </SafeAreaView>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLOR.bgHeader,
    height: 50,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  title: {
    color: '#161616',
    fontSize: 18,
    fontWeight: '500',

  }
})
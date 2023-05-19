
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../constants/Themes'

const ItemUser = () => {
  return (
   
    <View style={styles.boxInfo}>
      <Image style={styles.avatar} source={require('../asset/image/logo.png')} />
      <View style={styles.boxContent}>
        <Text style={styles.nameUser}>Lucas</Text>
        <Text style={styles.title}>Pikachu sốt Thái</Text>
      </View>
    </View>
  )
}

export default ItemUser


const styles = StyleSheet.create({
  avatar: {
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: COLOR.BLACK,
    width: 30,
    height: 30,
  },
  boxInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft:10,
  marginTop:40
    

  },
  boxContent: {
    flexDirection: 'column',
    marginLeft: 14,
  },
  nameUser: {
    color: COLOR.WHITE,
    fontSize: 16,
  },
  title:{
    fontSize:20,
    color:COLOR.WHITE,
    fontWeight:'bold',
  }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Theme'

const ItemNear = (prop) => {
  const {data}= props;
  return (
    <View style={styles.boxNear}>
    </View>
  )
}

export default ItemNear

const styles = StyleSheet.create({
    boxNear:{
        width:100,
        height:100,
        backgroundColor:COLOR.bgDrawer,
        borderRadius:8,
        marginRight:10,
        marginVertical:10,
    }
})
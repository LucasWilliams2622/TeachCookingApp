
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../constants/Themes'

const ItemSteps = (props) => {
  const { data } = props;


  return (
  
    <TouchableOpacity
      style={{ backgroundColor: COLOR.BACKGROUND }}>
      <View style={{ marginTop: 20, flexDirection: 'row' }}>
        <View style={styles.circle}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>1</Text>
        </View>
        <Text style={{ color: COLOR.WHITE, fontSize: 15, marginLeft: 10, paddingRight: 20 }} >{data}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default ItemSteps

const styles = StyleSheet.create({
  circle: {
    backgroundColor: COLOR.WHITE, height: 34, width: 34, borderRadius: 17, alignItems: 'center'
  }
})
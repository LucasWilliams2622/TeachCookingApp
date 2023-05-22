@@ -0,0 +1,30 @@
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../constants/Themes'

const ItemSteps = (props) => {
  const { dulieu } = props;


  return (
  
    <TouchableOpacity
      style={{ backgroundColor: COLOR.BACKGROUND }}>
      <View style={{ marginTop: 20, flexDirection: 'row' }}>
        <View style={styles.circle}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{dulieu._id}</Text>
        </View>
        <Text style={{ color: COLOR.WHITE, fontSize: 15, marginLeft: 10, paddingRight: 20 }} >{dulieu.content}</Text>
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
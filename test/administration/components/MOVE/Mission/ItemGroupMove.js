import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'

const ItemGroupMove = () => {
  return (
    <View style={[appStyle.boxShadow, appStyle.row, { paddingVertical: 22, paddingHorizontal: 27 }]}>
      <Image style={appStyle.avatarItem} source={require('../../../assets/icons/defaultAvatar.png')} />
      <View style={[appStyle.column, { justifyContent: 'flex-start',alignItems:'flex-start',  marginLeft: 27 }]}>
        <Text style={[appStyle.text, { marginBottom: 7 }]}>Quận 10 Trips</Text>
        <Text style={appStyle.normalText}>18 members</Text>
      </View>
    </View>
  )
}

export default ItemGroupMove

const styles = StyleSheet.create({})
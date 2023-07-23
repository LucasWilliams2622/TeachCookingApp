import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle'

const ItemDriveLicense = () => {
  return (
    <View style={[appStyle.row, {}]}>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 19 }]}>
        <Text style={[appStyle.text, { marginBottom: 19 }]}>Driver’s license number: 12 - D1 142.34</Text>
        <Text style={appStyle.normalText}>Date of birth: 10/01/1992</Text>
        <Image style={appStyle.licenseImage} source={require('../assets/images/frontSide.png')} />
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 19, marginLeft: 75 }]}>
        <Text style={[appStyle.text, { marginBottom: 19 }]}>Class: A1</Text>
        <Text style={appStyle.normalText}>Back side of Driver’s license</Text>
        <Image style={appStyle.licenseImage} source={require('../assets/images/backSide.png')} />
      </View>
    </View>
  )
}

export default ItemDriveLicense

const styles = StyleSheet.create({})
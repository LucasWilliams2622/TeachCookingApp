import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { appStyle, windowWidth } from '../../../../theme/appStyle'
import { COLOR } from '../../../../theme/color'
const Report = () => {
  return (
    <SafeAreaView style={[appStyle.boxSysFeature, { width: windowWidth - 500,marginLeft:1,marginTop:40}]}>
      <View>
        <View style={[appStyle.row, { alignItems: 'flex-start', width: windowWidth - 700, justifyContent: 'space-between', alignSelf: 'center', marginTop: 18 }]}>
          <View>
            <Text style={[appStyle.text, { fontSize: 18, color: COLOR.normalText }]}>Total crypto coins held</Text>
            <Text style={[appStyle.textMoney,]}>100</Text>
          </View>
          <View>
            <Text style={[appStyle.text, { fontSize: 18, color: COLOR.normalText }]}>Total amount of crypto paid</Text>
            <Text style={[appStyle.textMoney,]}>200</Text>
          </View>
        </View>
      </View>
      <View style={[appStyle.column,{marginTop:100}]}>

        <TouchableOpacity style={[appStyle.row,{ width: windowWidth - 500,justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:"#EBEBEB",paddingVertical:26,paddingHorizontal:13,}]}>
          <Text style={[appStyle.text, { fontSize:18, }]}>History of posting for sale</Text>
          <View style={appStyle.row}>
            <Text style={[appStyle.text, { fontSize: 18, }]}>10 post</Text>
            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/Right.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[appStyle.row,{ width: windowWidth - 500,justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:"#EBEBEB",paddingVertical:26,paddingHorizontal:13,}]}>
          <Text style={[appStyle.text, { fontSize: 18, }]}>History of posting for purchase</Text>
          <View style={appStyle.row}>
            <Text style={[appStyle.text, { fontSize: 18, }]}>3 post</Text>
            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/Right.png')} />
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Report

const styles = StyleSheet.create({})
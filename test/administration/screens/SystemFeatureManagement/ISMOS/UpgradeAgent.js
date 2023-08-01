import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { appStyle, windowWidth } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'

const UpgradeAgent = () => {
  return (
    <SafeAreaView style={[appStyle.boxSysFeature, { width: windowWidth - 500, marginLeft: 100 }]}>
      <View>
        <Text style={[appStyle.text, { fontSize: 20, fontWeight: '500' }]}>Today 20/07/2023</Text>
        <View style={[appStyle.row, { alignItems: 'flex-start', width: windowWidth - 700, justifyContent: 'space-between', alignSelf: 'center', marginTop: 18 }]}>
          <View>
            <Text style={[appStyle.text, { fontSize: 20, color: COLOR.normalText }]}>Grossed</Text>
            <Text style={[appStyle.textMoney,]}>3.400.000</Text>
          </View>
          <View>
            <Text style={[appStyle.text, { fontSize: 20, color: COLOR.normalText }]}>Profit</Text>
            <Text style={[appStyle.textMoney,]}>3.200.000</Text>
          </View>
        </View>
      </View>
      <View style={[appStyle.column,{marginTop:100}]}>
        <TouchableOpacity style={[appStyle.row,{ width: windowWidth - 500,justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:"#EBEBEB",paddingVertical:26,paddingHorizontal:13,}]}>
          <Text style={[appStyle.text, { fontSize: 20, }]}>Upgraded</Text>
          <View style={appStyle.row}>
            <Text style={[appStyle.text, { fontSize: 20, }]}>120 Store</Text>
            <Image style={appStyle.bigIcon} source={require('../../../assets/icons/Right.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[appStyle.row,{ width: windowWidth - 500,justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:"#EBEBEB",paddingVertical:26,paddingHorizontal:13,}]}>
          <Text style={[appStyle.text, { fontSize: 20, }]}>Decentralization</Text>
          <View style={appStyle.row}>
            <Text style={[appStyle.text, { fontSize: 20, }]}>20 Agent</Text>
            <Image style={appStyle.bigIcon} source={require('../../../assets/icons/Right.png')} />
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  )
}

export default UpgradeAgent

const styles = StyleSheet.create({})
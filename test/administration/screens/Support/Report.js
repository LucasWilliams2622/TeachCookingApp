import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { appStyle, windowWidth } from '../../theme/appStyle'
import { COLOR } from '../../theme/color'

const Report = () => {
  return (
    <SafeAreaView style={[appStyle.boxSysFeature, { width: windowWidth - 500, marginLeft: 100 }]}>
      <View style={[appStyle.column, {}]}>
        <TouchableOpacity style={[appStyle.row, { width: windowWidth - 500, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: "#EBEBEB", paddingVertical: 26, paddingHorizontal: 13, }]}>
          <Text style={[appStyle.text, {}]}>Support list</Text>
          <View style={appStyle.row}>
            <Image style={appStyle.bigIcon} source={require('../../assets/icons/Right.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[appStyle.row, { width: windowWidth - 500, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: "#EBEBEB", paddingVertical: 26, paddingHorizontal: 13, }]}>
          <Text style={[appStyle.text]}>
            Badly rated support member list ( {"< 4 star"})
          </Text>
          <View style={appStyle.row}>
            <Image style={appStyle.bigIcon} source={require('../../assets/icons/Right.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Report

const styles = StyleSheet.create({})
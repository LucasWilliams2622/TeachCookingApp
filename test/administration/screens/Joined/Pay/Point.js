import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'
import PointHistory from './Point/PointHistory'

const Point = () => {
  return (
    <View style={{  width: '95%', }}>
      <Text style={[appStyle.text, { marginTop: 32 }]}>Today - 24/07/2023</Text>
      <View style={[appStyle.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
        <View style={[appStyle.column, { marginTop: 26, alignItems: 'flex-start' }]}>
          <Text style={appStyle.normalText}>Total deposit</Text>
          <Text style={appStyle.textMoney}>3.000.000</Text>
        </View>
        <View style={[appStyle.column, { marginTop: 26, alignItems: 'flex-start' }]}>
          <Text style={appStyle.normalText}>Total transfer</Text>
          <Text style={appStyle.textMoney}>0</Text>
        </View>
        <View style={[appStyle.column, { marginTop: 26, alignItems: 'flex-start' }]}>
          <Text style={appStyle.normalText}>Total withdraw</Text>
          <Text style={appStyle.textMoney}>2.000.000</Text>
        </View>
      </View>
      <Text style={[appStyle.text, { marginTop: 32 }]}>History</Text>
      <View style={{ left: -90 }}>
        <PointHistory />
      </View>
    </View>
  )
}

export default Point

const styles = StyleSheet.create({})
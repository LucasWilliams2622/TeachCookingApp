import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { appStyle } from '../../../theme/appStyle'
import StakeHistory from './Stake/StakeHistory'
import { AppContext } from '../../../AppContext'

const Stake = () => {
  const { currentDay } = useContext(AppContext);

  return (
    <View style={{ width: '95%', }}>
      <Text style={[appStyle.text, { marginTop: 32 }]}>Today - {currentDay}</Text>
      <View style={[appStyle.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
        <View style={[appStyle.column, { marginTop: 26, alignItems: 'flex-start' }]}>
          <Text style={appStyle.normalText}>Total deposit</Text>
          <Text style={appStyle.textMoney}>3.000</Text>
        </View>
        <View style={[appStyle.column, { marginTop: 26, alignItems: 'flex-start' }]}>
          <Text style={appStyle.normalText}>Total transfer</Text>
          <Text style={appStyle.textMoney}>0</Text>
        </View>
        <View style={[appStyle.column, { marginTop: 26, alignItems: 'flex-start' }]}>
          <Text style={appStyle.normalText}>Total withdraw</Text>
          <Text style={appStyle.textMoney}>2.000</Text>
        </View>
      </View>
      <Text style={[appStyle.text, { marginTop: 32 }]}>History</Text>
      <View style={{ left: -90 }}>
        <StakeHistory />
      </View>
    </View>
  )
}

export default Stake

const styles = StyleSheet.create({})
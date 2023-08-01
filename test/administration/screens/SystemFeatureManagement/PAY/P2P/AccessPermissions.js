import { SafeAreaView, StyleSheet, Text, View,Switch } from 'react-native'
import React, { useState } from 'react'
import { appStyle,windowWidth } from '../../../../theme/appStyle'
const AccessPermissions = () => {
  const [isActiveBE, setIsActiveBE] = useState(true);
  const toggleSwitchBE = () => setIsActiveBE(previousState => !previousState);
  const [isActiveFE, setIsActiveFE] = useState(true)
  const toggleSwitchFE = () => setIsActiveFE(previousState => !previousState);

  return (
    <SafeAreaView style={[appStyle.boxSysFeature,{width:windowWidth-600,marginLeft:50,marginTop:36}]}>
      <View style={[appStyle.row,{justifyContent:'space-between',width:500}]}>
        <Text style={[appStyle.text, { fontSize: 14 }]}>Backend</Text>
        <Switch
            style={{ marginTop: 5, left: -10 }}
            trackColor={{ false: '#767577', true: '#059669' }}
            thumbColor={isActiveBE ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchBE}
            value={isActiveBE}
          />
      </View>
      <View style={[appStyle.row,{justifyContent:'space-between',width:500,marginTop:36}]}>
        <Text style={[appStyle.text, { fontSize: 14 }]}>Frontend</Text>
        <Switch
            style={{ marginTop: 5, left: -10 }}
            trackColor={{ false: '#767577', true: '#059669' }}
            thumbColor={isActiveBE ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchFE}
            value={isActiveFE}
          />
      </View>
    </SafeAreaView>
  )
}

export default AccessPermissions

const styles = StyleSheet.create({})
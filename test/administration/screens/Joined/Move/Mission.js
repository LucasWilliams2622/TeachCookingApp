import { StyleSheet, Switch, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../../theme/appStyle';
import ItemRegisInfoUser from '../../../components/MOVE/Mission/ItemRegisInfoUser';
import ItemGroupMove from '../../../components/MOVE/Mission/ItemGroupMove';
import MissionList from './Mission/MissionList';
import { COLOR } from '../../../theme/color';

const   Mission = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [joinedGroup, setJoinedGroup] = useState(true);
  const [missionAvailable, setMissionAvailable] = useState(true)

  return (
    <ScrollView style={{ width: '95%' }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={[appStyle.row, { justifyContent: 'space-between' }]}>
        <Text></Text>
        <Switch
          style={{ marginTop: 5, left: -10 }}
          trackColor={{ false: '#767577', true: '#059669' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <ItemRegisInfoUser />
      <View style={{ marginTop: 68 }}>
        <View style={[appStyle.row, { justifyContent: 'space-between', alignItems: 'flex-start' }]}>
          <Text style={[appStyle.text, { marginBottom: 27 }]}>Group list</Text>
          <TouchableOpacity>
            {joinedGroup ? (<Text style={[appStyle.text, { marginBottom: 27, color: COLOR.primary, fontSize: 14 }]}>See more</Text>) : (<></>)}
          </TouchableOpacity>
        </View>

        {joinedGroup ? (<ItemGroupMove />) : (<Text style={[appStyle.normalText, { alignSelf: 'center', marginVertical: 25 }]}>No data</Text>)}
      </View>
      <View style={{ marginTop: 68 ,}}>
        <Text style={[appStyle.text, { marginBottom: 27 }]}>Mission list</Text>
        {
          missionAvailable ? (<MissionList />) : (
            <Text style={[appStyle.normalText, { alignSelf: 'center', marginVertical: 25, marginBottom: 50 }]}>No data</Text>)
        }
      </View>
    </ScrollView>

  )
}

export default Mission

const styles = StyleSheet.create({})
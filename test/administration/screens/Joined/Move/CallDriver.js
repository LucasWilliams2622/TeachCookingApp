import { StyleSheet, Switch, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../../theme/appStyle';
import ItemCustomerInfo from '../../../components/ItemCustomerInfo';
import ItemTransportDriver from '../../../components/MOVE/CallDriver/ItemTransportDriver';
import OrderList from '../Move/CarDriver/OrderList';
import ItemDriverRegisInfo from '../../../components/MOVE/CallDriver/ItemDriverRegisInfo';
import { COLOR } from '../../../theme/color';
const CallDriver = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [transportList, setTransportList] = useState(true);
  const [orderList, setOrderList] = useState(true)
  const [isDriver, setIsDriver] = useState(true)
  return (
    <>
      {
        isDriver ?
          (<ScrollView style={{ width: '95%' }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
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
            <ItemDriverRegisInfo />

            <View style={{ marginTop: 68,  }}>
              <Text style={[appStyle.text, { marginBottom: 27 }]}>Order list</Text>
              {
                orderList ? (<OrderList />) : (
                  <Text style={[appStyle.normalText, { alignSelf: 'center', marginVertical: 25, marginBottom: 50 }]}>No data</Text>)
              }
            </View>
          </ScrollView>)
          :
          (<ScrollView style={{ width: '95%' }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
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
            <ItemCustomerInfo />
            <View style={{ marginTop: 68 }}>
              <View style={[appStyle.row, { justifyContent: 'space-between', alignItems: 'flex-start' }]}>
                <Text style={[appStyle.text, { marginBottom: 27 }]}>Transport list</Text>
                <TouchableOpacity>
                  {transportList ? (<Text style={[appStyle.text, { marginBottom: 27, color: COLOR.primary, fontSize: 14 }]}>See more</Text>) : (<></>)}
                </TouchableOpacity>
              </View>
              {transportList ? (<ItemTransportDriver />) : (<Text style={[appStyle.normalText, { alignSelf: 'center', marginVertical: 25 }]}>No data</Text>)}
            </View>
            <View style={{ marginTop: 68,  }}>
              <Text style={[appStyle.text, { marginBottom: 27 }]}>Order list</Text>
              {
                orderList ? (<OrderList />) : (
                  <Text style={[appStyle.normalText, { alignSelf: 'center', marginVertical: 25, marginBottom: 50 }]}>No data</Text>)
              }
            </View>
          </ScrollView>)
      }
    </>
  )
}

export default CallDriver

const styles = StyleSheet.create({})
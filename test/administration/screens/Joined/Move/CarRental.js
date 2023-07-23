import { StyleSheet, Switch, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../../theme/appStyle';
import ItemCustomerInfo from '../../../components/ItemCustomerInfo';
import ItemTransport from '../../../components/MOVE/RentalCar/ItemTransport';
import CarRentalHistory from '../Move/CarRental/CarRentalHistory';
import ItemDriverRegisInfo from '../../../components/MOVE/CallDriver/ItemDriverRegisInfo';
import { COLOR } from '../../../theme/color';
import ItemRegisRentalCar from '../../../components/MOVE/RentalCar/ItemRegisRentalCar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    carName: "Mercedes Maybach S680",
    licensePlate: "12 - H5 243.78",
    dateTime: "09:20 am, 15/06/2023",
    approval: true
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    carName: "Mercedes Maybach S680",
    licensePlate: "12 - H5 243.78",
    dateTime: "09:20 am, 15/06/2023",
    approval: false
  },
];
const CarRental = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [transportList, setTransportList] = useState(true);
  const [carRentalHistory, setCarRentalHistory] = useState(true)
  const [isDriver, setIsDriver] = useState(false)
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
            <ItemRegisRentalCar />
            <View style={{ marginTop: 68 }}>
              <View style={[appStyle.row, { justifyContent: 'space-between', alignItems: 'flex-start' }]}>
                <Text style={[appStyle.text, { marginBottom: 27 }]}>Transport list</Text>
                <TouchableOpacity>
                  {transportList ? (<Text style={[appStyle.text, { marginBottom: 27, color: COLOR.primary, fontSize: 14 }]}>See more</Text>) : (<></>)}
                </TouchableOpacity>
              </View>
              {transportList ?
                (
                  <FlatList
                    showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={({ item }) => <ItemTransport data={item} />}
                    keyExtractor={item => item.id}
                  />
                )
                :
                (<Text style={[appStyle.normalText, { alignSelf: 'center', marginVertical: 25 }]}>No data</Text>)}
            </View>
            <View style={{ marginTop: 68, borderWidth: 2, borderColor: 'red' }}>
              <Text style={[appStyle.text, { marginBottom: 27 }]}>Car rental history</Text>
              {
                carRentalHistory ? (<CarRentalHistory />) : (
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

            <View style={{ marginTop: 68, borderWidth: 2, borderColor: 'red' }}>
              <Text style={[appStyle.text, { marginBottom: 27 }]}>Car rental history</Text>
              {
                carRentalHistory ? (<CarRentalHistory />) : (
                  <Text style={[appStyle.normalText, { alignSelf: 'center', marginVertical: 25, marginBottom: 50 }]}>No data</Text>)
              }
            </View>
          </ScrollView>)
      }
    </>
  )
}

export default CarRental

const styles = StyleSheet.create({})
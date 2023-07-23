import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'

const ItemApproved = (props) => {
  const { data } = props;
  const { orderCode, date, nameCustomer, pickupLocation, destination, totalPrice } = data;
  return (
    <View style={[appStyle.boxShadow, appStyle.column, { alignItems: 'flex-start', paddingVertical: 28, paddingHorizontal: 18, marginBottom: 32 }]}>
      <Text style={[appStyle.text, { color: COLOR.textBlue, fontSize: 14, marginBottom: 6 }]}>{orderCode}</Text>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginVertical: 15 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Date</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>{date}</Text>
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginVertical: 15 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Customer</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>{nameCustomer}</Text>
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginVertical: 15 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Pickup location</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>{pickupLocation}</Text>
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginVertical: 15 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Destination</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>{destination}</Text>
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginVertical: 15 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Total price</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>{totalPrice}</Text>
      </View>
    </View>
  )
}

export default ItemApproved

const styles = StyleSheet.create({})
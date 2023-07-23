import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemCanceled from '../../../../components/MOVE/RentalCar/ItemCanceled'

const CanceledList = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      orderCode: "Order-RB-2323083773",
      date: "09:20 am, 15/06/2023",
      nameCustomer:"Nguyễn Văn E",
      pickupLocation:"45 Trần Nhật Duật, abc, Hồ Chí Minh ",
      destination:"45 Trần Nhật Duật, abc, Hồ Chí Minh ",
      totalPrice:"100.000đ"

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      orderCode: "Order-RB-2323083773",
      date: "09:30 am, 15/06/2033",
      nameCustomer:"Nguyễn Văn R",
      pickupLocation:"15 Trần Nhật Duật, abc, Hồ Chí Minh ",
      destination:"15 Trần Nhật Duật, abc, Hồ Chí Minh ",
      totalPrice:"200.000đ"
    }

  ];
  return (
    <View style={{ marginTop: 30, width: '100%' }}>
    <FlatList
      data={DATA}
      vertical
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}

      renderItem={({ item }) => <ItemCanceled data={item} />}
      keyExtractor={item => item.id}
    />
  </View>
  )
}

export default CanceledList

const styles = StyleSheet.create({})
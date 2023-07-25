import { StyleSheet, Text, FlatList, View, ScrollView } from 'react-native'
import React from 'react'
import ItemTransfer from '../../../../components/PAY/Point/ItemTransfer'
import { appStyle } from '../../../../theme/appStyle'
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    status:true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    status:false,

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    status:true,

  },
];
const TransferPoint = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginBottom: 26, }]}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => <ItemTransfer data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  )
}

export default TransferPoint

const styles = StyleSheet.create({})
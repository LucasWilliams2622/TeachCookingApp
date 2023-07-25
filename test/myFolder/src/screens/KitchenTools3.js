import { SafeAreaView, StyleSheet, FlatList,Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../components/AppHeader'
import { appStyle } from '../constants/AppStyle'
import { COLOR } from '../constants/Theme'
import ItemNear from '../components/ItemNear'
import ItemNews from '../components/ItemNews'
import ItemContact from '../components/ItemContact'
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2329d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d472',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2329d32472',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145523171e29d472',
    title: 'Third Item',
  },
];
const KitchenTools3 = () => {
  return (
    <SafeAreaView style={appStyle.container}>
      <AppHeader />
      <FlatList
          vertical
          data={DATA}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ItemContact data={item} />}
          keyExtractor={item => item.id}
        />
      {/* <ItemContact/> */}
    </SafeAreaView>
  )
}

export default KitchenTools3

const styles = StyleSheet.create({

  title: {
    fontWeight: '700',
    fontSize: 18,
    color: COLOR.title,
    marginTop: 10,
  }
})
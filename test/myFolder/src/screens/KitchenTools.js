import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import AppHeader from '../components/AppHeader'
import { appStyle } from '../constants/AppStyle'
import { COLOR } from '../constants/Theme'
import ItemNear from '../components/ItemNear'
import ItemNews from '../components/ItemNews'
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
const kitchenTools = () => {
  return (
    <SafeAreaView style={appStyle.container}>
      <AppHeader />
      <View style={[appStyle.column, { paddingHorizontal: 16 }]}>
        <Text style={styles.title}>Gần bạn</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => <ItemNear data={item} />}
          keyExtractor={item => item.id}
        />
        <Text style={styles.title}>TRENDY NEWS</Text>
        <FlatList
          vertical
          data={DATA}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ItemNews data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default kitchenTools

const styles = StyleSheet.create({

  title: {
    fontWeight: '700',
    fontSize: 18,
    color: COLOR.title,
    marginTop: 10,
  }
})
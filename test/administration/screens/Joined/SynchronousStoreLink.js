import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { COLOR } from '../../theme/color';
import ItemSyncStore from '../../components/LINK/Sync/ItemSyncStore';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  name:"Lam Thảo Cosmetics",
  typeStore:"Retail",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name:"Dì Năm",
    typeStore:"F&B",
  }
  
];
const SynchronousStoreLink = () => {
  return (
    <ScrollView vertical style={{ marginTop: 26, }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ItemSyncStore data={item} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  )
}

export default SynchronousStoreLink

const styles = StyleSheet.create({})

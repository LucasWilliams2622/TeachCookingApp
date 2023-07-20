import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import { appStyle } from '../theme/appStyle'
import ItemMembership from '../components/ItemMembership';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'mrabc456',
    number:"0",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'mrabc123',
    number:"0",

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'mrabc789',
    number:"0",

  },
];
const MembershipUser = () => {
  return (
    <ScrollView style={appStyle.boxInfo} >
      <Text style={appStyle.text}>Membership System</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ItemMembership data={item} />}
        keyExtractor={item => item.id}

      />
    </ScrollView>
  )
}

export default MembershipUser

const styles = StyleSheet.create({

})
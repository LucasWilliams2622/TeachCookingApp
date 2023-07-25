import { ScrollView, StyleSheet, FlatList,Text, View } from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'
import ItemPost from '../../../components/MOVE/SOS/ItemPost'
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
];
const SOS = () => {
  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <Text style={[appStyle.text, { marginTop: 52 }]}>Post list</Text>
      <FlatList
          data={DATA}
          renderItem={({ item }) => <ItemPost data={item} />}
          keyExtractor={item => item.id}
        />
    </ScrollView>
  )
}

export default SOS

const styles = StyleSheet.create({})
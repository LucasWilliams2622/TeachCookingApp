import { StyleSheet, Text, View, ScrollView, Switch, FlatList } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../theme/appStyle'
import ItemStore from './ItemStore';

const dataStore = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nameStore: 'Lam Thảo Cosmetics',
    typeStore: 'Retail',
    statusStore: "Active",
    advertiseStore: "Linked",
    paymentStore: "Unlinked",
    usedCapacityStore: "10 GB",
    branchList: [
      {
        nameStore: "Lam Thảo Cosmetics - Central branch",
      },
      {
        nameStore: "Lam Thảo Cosmetics - Branch 1",
      }
    ]
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    nameStore: 'Dì Năm',
    typeStore: 'Retail',
    statusStore: "Active",
    advertiseStore: "Linked",
    paymentStore: "Unlinked",
    usedCapacityStore: "10 GB",
  },
];
const MosJoined = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView style={appStyle.boxInfo} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginBottom: 38 }]}>
        <Text style={[appStyle.text, { fontSize: 16 }]}>Joined date</Text>
        <Text style={[appStyle.normalText, { fontSize: 16, marginTop: 12 }]}>30-11-2022 05:43:24 am</Text>
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginBottom: 38 }]}>
        <Text style={[appStyle.text, { fontSize: 16 }]}>Activated</Text>
        <Switch
          style={{ marginTop: 5, left: -10 }}
          trackColor={{ false: '#767577', true: '#059669' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginBottom: 38, }]}>
        <Text style={[appStyle.text, { fontSize: 16, marginBottom: 10 }]}>Store list</Text>
        <ItemStore />
        <ItemStore />


      </View>
    </ScrollView>
  )
}

export default MosJoined

const styles = StyleSheet.create({

})
import { StyleSheet, Text, View, ScrollView,FlatList } from 'react-native'
import React from 'react'
import ItemNotificationHistory from '../components/ItemNotificationHistory'
import { appStyle } from '../theme/appStyle';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    info:"Văn An updated new email",
     dateTime:"18/05/2023 09:30 am"
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    info:"Văn An updated new password",
     dateTime:"18/05/2023 09:35 am"
  },
];
const NotificationHistoryUser = () => {
  return (
    <ScrollView style={appStyle.boxInfo} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
       <FlatList
        data={DATA}
        renderItem={({ item }) => <ItemNotificationHistory data={item} />}
        keyExtractor={item => item.id}

      />
    </ScrollView>
  )
}

export default NotificationHistoryUser

const styles = StyleSheet.create({

})
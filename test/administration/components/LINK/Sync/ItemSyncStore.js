import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'

const ItemSyncStore = (props) => {
  const { data } = props;
  const { name, typeStore } = data;

  return (
    <View style={[appStyle.row, { justifyContent: 'space-between', paddingHorizontal: 18, paddingVertical: 20 }]}>
      <View style={appStyle.row}>
        <Image style={appStyle.avatarItem} source={require('../../../assets/icons/iconStore.png')} />
        <View style={[appStyle.column, { alignItems: 'flex-start', marginLeft: 16 }]}>
          <Text style={appStyle.text}>{name}</Text>
          <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>{typeStore}</Text>
        </View>
      </View>
      <View style={appStyle.row}>
        <Image style={appStyle.icon} source={require('../../../assets/icons/iconSynced.png')} />
        <Text style={[appStyle.text, { fontSize: 12, color: COLOR.active, marginLeft: 6 }]}>Synced</Text>
      </View>
    </View>
  )
}

export default ItemSyncStore

const styles = StyleSheet.create({})
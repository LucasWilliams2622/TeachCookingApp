import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'
const ItemPost = () => {
  return (
    <View style={[appStyle.boxShadow, { borderWidth: 0.5, marginRight: 5, paddingVertical: 22, width: 820, marginVertical: 16 }]}>
    <Text style={appStyle.textSmall}>SOS-2323083773</Text>
    <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 15 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Type</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>Xe ô tô</Text>
    </View>
    <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 15 }]}>
           <Text style={[appStyle.normalText, { fontSize: 10, }]}>Straight</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>Ngay đèn giao thông</Text>
    </View>
    <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 15 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Description</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>Công trường đang thi công</Text>
    </View>
    <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 15 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Level</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>Khó di chuyển</Text>
    </View>
    <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 15 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Location</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>45 Trần Nhật Duật, abc, Hồ Chí Minh</Text>
    </View>
</View>
  )
}

export default ItemPost

const styles = StyleSheet.create({})
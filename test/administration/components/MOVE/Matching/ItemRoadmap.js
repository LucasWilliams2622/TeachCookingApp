import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'
const ItemRoadmap = () => {
    return (
        <View style={[appStyle.boxShadow, { borderWidth: 0.5, marginRight: 5, paddingVertical: 22, width: 820, marginVertical: 16 }]}>
            <Text style={appStyle.textSmall}>POST-2323083773</Text>
            <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 15 }]}>
                <Text style={[appStyle.normalText, { fontSize: 10, }]}>Title</Text>
                <Text style={[appStyle.text, { fontSize: 14, }]}>Lộ trình đi Khánh Hoà</Text>
            </View>
            <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 15 }]}>
                   <Text style={[appStyle.normalText, { fontSize: 10, }]}>Pickup location</Text>
                <Text style={[appStyle.text, { fontSize: 14, }]}>45 Trần Nhật Duật, abc, Hồ Chí Minh </Text>
            </View>
            <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 15 }]}>
                <Text style={[appStyle.normalText, { fontSize: 10, }]}>Destination</Text>
                <Text style={[appStyle.text, { fontSize: 14, }]}>120 Hồ Tông, Khánh Hoà, Hồ Chí Minh </Text>
            </View>
            <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 15 }]}>
                <Text style={[appStyle.normalText, { fontSize: 10, }]}>Created date</Text>
                <Text style={[appStyle.text, { fontSize: 14, }]}>09:20 am, 15/06/2023</Text>
            </View>
        </View>

    )
}

export default ItemRoadmap

const styles = StyleSheet.create({})
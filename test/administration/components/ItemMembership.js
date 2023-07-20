import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle'
import { COLOR } from '../theme/color'

const ItemMembership = (props) => {
    const { data } = props;
    const { name, number } = data;
    const { onPress } = props

    return (
        <View style={[appStyle.row,{marginTop:14}]}>
            <View style={[appStyle.middleDot, { backgroundColor: COLOR.titleBreadCrumb }]}></View>
            <Text style={[appStyle.normalText, { color: COLOR.titleBreadCrumb }]}>{name}</Text>
            <Text style={[appStyle.normalText, { color: COLOR.titleBreadCrumb,marginLeft:5 }]}>({number})</Text>

            <TouchableOpacity style={[appStyle.button, { paddingVertical: 8, paddingHorizontal: 14, marginLeft: 15 }]}
            onPress={onPress}>
                <Text style={appStyle.titleButton}>Detail</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ItemMembership

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'

const ItemTransportDriver = () => {
    return (
        <View style={[appStyle.boxShadow, appStyle.row, { paddingVertical: 22, paddingHorizontal: 27 }]}>
            <Image style={[appStyle.avatarItem, { borderRadius: 8, }]} source={require('../../../assets/images/imageVision.png')} />
            <View style={[appStyle.column, { justifyContent: 'flex-start',alignItems:'flex-start',   marginLeft: 27 }]}>
                <Text style={[appStyle.text, { marginBottom: 7 }]}>Honda Vision 2022</Text>
                <Text style={[appStyle.normalText, { color: COLOR.deleteText }]}>12 - D1 142.34</Text>
            </View>
        </View>
    )
}

export default ItemTransportDriver

const styles = StyleSheet.create({})
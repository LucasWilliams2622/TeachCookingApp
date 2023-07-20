import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle'

const ItemAdmin = (props) => {
    const { title,secondTitle, onPress, disable } = props
    return (
        <TouchableOpacity style={appStyle.itemAdmin} onPress={onPress} disabled={disable} >
            <Text style={appStyle.titleLabel}>{title}</Text>
            <Text style={appStyle.titleLabel}>{secondTitle}</Text>
        </TouchableOpacity>
    )
}

export default ItemAdmin

const styles = StyleSheet.create({})
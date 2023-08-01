import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle'

const ItemAdmin = (props) => {
    const { title, secondTitle, onPress, disable, source } = props
    console.log(source);
    return (
        <TouchableOpacity style={appStyle.itemAdmin} onPress={onPress} disabled={disable} >
            {
                source == undefined ? (<></>) : (<Image style={[appStyle.homeIcon, { marginTop: 16 }]} source={source} />)
            }
            <Text style={appStyle.titleLabel}>{title}</Text>
            <Text style={appStyle.titleLabel}>{secondTitle}</Text>
        </TouchableOpacity>
    )
}

export default ItemAdmin

const styles = StyleSheet.create({})
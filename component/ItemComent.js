import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../constants/Themes'

const ItemComent = (props) => {
    const { data } = props;

    return (
        <TouchableOpacity
            style={{ backgroundColor: COLOR.BACKGROUND }}>
            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <Image style={{ width: 30, height: 30 }} source={{ uri: data.image }} />
                <View style={{ marginTop: 5, flexDirection: 'row' }} >
                    <Text style={{ color: COLOR.WHITE, fontSize: 15, marginLeft: 10, fontWeight: 'bold' }} >{data.name}</Text>
                    <Text style={{ color: COLOR.WHITE, fontSize: 15, marginLeft: 10 }} >{data.content}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default ItemComent

const styles = StyleSheet.create({})
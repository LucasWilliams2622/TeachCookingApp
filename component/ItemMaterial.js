import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../constants/Themes'

const ItemMaterial = (props) => {
    const { dulieu } = props;
    return (
        <TouchableOpacity
            style={{ backgroundColor: COLOR.BACKGROUND }}>
            <View style={{ padding: 10 }}>
                <Text style={styles.makeStep} >{dulieu.content}</Text>
                <Text style={styles.makeStep} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </Text>
            </View>

        </TouchableOpacity>
    )
}

export default ItemMaterial

const styles = StyleSheet.create({
    makeStep: {
        color: COLOR.WHITE, fontSize: 15, marginLeft: 10, marginTop: 15
    }
    ,
})
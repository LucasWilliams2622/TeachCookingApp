import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../constants/Themes'

const ItemMaterial = (props) => {
    const { data } = props;
    return (
        <TouchableOpacity
            style={{ backgroundColor: COLOR.BACKGROUND, marginTop: 15 }}>
            <View>
                <Text style={styles.makeStep} numberOfLines={1}  >{data}</Text>
                <Text style={styles.makeStep} numberOfLines={1} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  </Text>
            </View>

        </TouchableOpacity>
    )
}

export default ItemMaterial

const styles = StyleSheet.create({
    makeStep: {
        color: COLOR.WHITE, fontSize: 15,
    }
    ,
})
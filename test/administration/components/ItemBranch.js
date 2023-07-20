import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle'
import { COLOR } from '../theme/color'

const ItemBranch = () => {
    return (
        <View style={[appStyle.row, { backgroundColor: COLOR.bgLabel, paddingVertical: 18, paddingHorizontal: 17, borderRadius: 8, marginBottom: 26, width: "100%" }]}>
            <Image style={appStyle.avatarItem} source={require('../assets/icons/iconStore.png')} />
            <Text style={appStyle.text}>Lam Thảo Cosmetics - Central branch</Text>
        </View>
    )
}

export default ItemBranch

const styles = StyleSheet.create({
    boxItemBranch: {
        backgroundColor: COLOR.bgLabel
    }
})
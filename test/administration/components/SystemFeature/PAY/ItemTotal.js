import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../../theme/color'
import { appStyle } from '../../../theme/appStyle'

const ItemTotalWallet = (props) => {
    const { title, number} = props;

    return (
        <View style={styles.boxItem}>
            <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>{title}</Text>
            <Text style={appStyle.textMoney}>{number}</Text>
        </View>
    )
}

export default ItemTotalWallet

const styles = StyleSheet.create({
    boxItem: {
        backgroundColor: COLOR.bgItemTotal,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLOR.borderItemTotal,
        paddingVertical: 6,
        paddingHorizontal: 16,
        width: 200,
        marginRight:36,
    }
})
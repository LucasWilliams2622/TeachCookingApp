import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'
const ItemDeposit = (props) => {
    const { data } = props
    const { status } = data;
    return (
        <View style={[appStyle.boxShadow, { marginHorizontal: 4, width: '72%', marginVertical: 26 }]}>
            <View style={[appStyle.row, { justifyContent: 'space-between', width: '100%', }]}>
                <Text style={[appStyle.textSmall, { color: COLOR.textBlue }]}>DEPOSIT-2323083773</Text>
                <Text style={[appStyle.textSmall, { color: COLOR.normalText }]}></Text>
            </View>
            <View style={[appStyle.row, { justifyContent: 'space-between', marginTop: 11, width: '100%', }]}>
                <Text style={[appStyle.textSmall, { color: COLOR.text }]}>+100.</Text>
                {status ?
                    (<Text style={[appStyle.textSmall, { color: COLOR.textMoney }]}>Successed</Text>)
                    :
                    (<Text style={[appStyle.textSmall, { color: COLOR.notActive }]}>Failed</Text>)}
            </View>
            <View style={[appStyle.row, { justifyContent: 'space-between', marginTop: 11, width: '100%', }]}>
                <Text style={[appStyle.textSmall, { color: COLOR.text }]}>Bonus</Text>
                <Text style={[appStyle.textSmall, { color: COLOR.normalText }]}>09:20 am, 20/06/2023</Text>
            </View>
        </View>
    )
}

export default ItemDeposit

const styles = StyleSheet.create({})
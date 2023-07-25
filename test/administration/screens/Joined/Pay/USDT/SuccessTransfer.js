import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { appStyle } from '../../../../theme/appStyle'
import { COLOR } from '../../../../theme/color'
const SuccessTransfer = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ width: '90%' }}>
            <View style={[appStyle.column, { marginTop: 30, }]}>
                <Image style={appStyle.bigAvatar} source={require('../../../../assets/icons/OkBig.png')} />
                <Text style={[appStyle.text, { fontWeight: '600', color: COLOR.textMoney, marginTop: 11, }]}>SUCCCESSFUL TRANSACTION</Text>
                <Text style={[appStyle.text, { color: COLOR.text, fontSize: 24, marginTop: 11, }]}>100,000đ</Text>
                <Text style={[appStyle.text, { color: COLOR.normalText, fontSize: 14, marginTop: 11, }]}>09:20 AM, Thur 20/07/2023</Text>
            </View>
            <View style={[appStyle.row, { justifyContent: 'space-between', marginTop: 100 }]}>
                <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                    <Text style={[appStyle.normalText, { marginBottom: 36 }]}>Trading code</Text>
                    <Text style={[appStyle.normalText, { marginBottom: 36 }]}>Receiving card/account number</Text>
                    <Text style={[appStyle.normalText, { marginBottom: 36 }]}>Receiver</Text>
                    <Text style={[appStyle.normalText, { marginBottom: 36 }]}>Amount</Text>
                    <Text style={[appStyle.normalText, { marginBottom: 36 }]}>Content</Text>
                    <Text style={[appStyle.normalText, { marginBottom: 36 }]}>Status</Text>
                </View>
                <View style={[appStyle.column, { alignItems: 'flex-end' }]}>
                    <Text style={[appStyle.text, { color: COLOR.textBlue, fontSize: 16, marginBottom: 36 }]}>TRANSFER-2323083773</Text>
                    <Text style={[appStyle.text, { marginBottom: 36 }]}>123 456 789</Text>
                    <Text style={[appStyle.text, { marginBottom: 36 }]}>NGUYEN VAN A</Text>
                    <Text style={[appStyle.text, { marginBottom: 36 }]}>100.000đ</Text>
                    <Text style={[appStyle.text, { marginBottom: 36 }]}>Diem thuong T06</Text>

                    <Text style={[appStyle.text, { color: COLOR.textMoney, fontSize: 16, marginBottom: 36 }]}>Success</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default SuccessTransfer

const styles = StyleSheet.create({})
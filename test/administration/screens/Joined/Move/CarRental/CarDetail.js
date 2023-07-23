import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyle } from '../../../../theme/appStyle'
import { COLOR } from '../../../../theme/color'

const CarDetail = () => {
    return (
        <View>
            <View style={appStyle.row}>
                <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>BASIC INFOR</Text>
                <Image style={appStyle.icon} source={require('../../../../assets/icons/Ok.png')} />
            </View>
            <View>
                
            </View>
        </View>
    )
}

export default CarDetail

const styles = StyleSheet.create({})
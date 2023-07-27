import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { appStyle, windowWidth } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'
import ButtonPrimary from '../../../components/ButtonPrimary'

const EditCommission = () => {
    return (
        <SafeAreaView style={[appStyle.boxSysFeature, { marginLeft: 1, marginTop: 26 }]}>
            <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>Level</Text>
            <TextInput style={[appStyle.textInput2, { width: windowWidth - 550, marginTop: 8 }]} placeholder='Enter new level' placeholderTextColor={COLOR.normalText} />
            <Text style={[appStyle.text, { color: COLOR.titleLabel, marginTop: 32 }]}>Level</Text>
            <TextInput style={[appStyle.textInput2, { width: windowWidth - 550, marginTop: 8 }]} placeholder='10' placeholderTextColor={COLOR.normalText} />

            <ButtonPrimary  style={{width: windowWidth - 550,marginTop:160}} title="Confirm" onPress={()=>{{}}}/>
        </SafeAreaView>
    )
}

export default EditCommission

const styles = StyleSheet.create({})
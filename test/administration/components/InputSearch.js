import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOR } from '../theme/color'
import { appStyle, windowWidth } from '../theme/appStyle';

const InputSearch = (props) => {
    const { placeholder, placeholderTextColor, colorText, } = props;
    return (
        <View style={[appStyle.row, {}]}>
            <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor}
                style={{ color: colorText, fontSize: 16, width: windowWidth - 650, backgroundColor: '#F5F5F5', borderTopLeftRadius: 32, borderBottomLeftRadius: 32, paddingHorizontal: 14 }} />
            <TouchableOpacity style={appStyle.buttonSearch} onPress={{}}>
                <Text style={appStyle.titleButton}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputSearch

const styles = StyleSheet.create({})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle';

const ItemButton = (props) => {
    const {data}=props;
    const { title, onPress, disable}= data;
    return (
            <TouchableOpacity style={appStyle.button2} onPress={onPress} disable={disable}>
                <Text style={appStyle.titleButton2}>{title}</Text>
            </TouchableOpacity>
    )
}

export default ItemButton

const styles = StyleSheet.create({

})
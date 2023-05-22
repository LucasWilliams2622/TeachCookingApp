import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Themes'

const ItemIngredient = (props) => {
    const { dulieu } = props;
    return (

        <View style={[styles.header, { marginTop: 10, marginStart: 10, marginEnd: 10 }]}>
            <Image style={[styles.image, { width: 20, height: 20, marginTop: 15, marginLeft: 5 }]} source={require('../asset/icon/icon_menu.png')} />
            <TextInput placeholderTextColor={COLOR.TextAdd} placeholder='1kg ớt' style={[styles.textinput, { borderRadius: 5, width: 320, height: 37, marginRight: 15 }]} ></TextInput>
        </View>



    )
}

export default ItemIngredient

const styles = StyleSheet.create({
    header: {

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 74,
        height: 72,


    },
    textinput: {
        width: 390,
        height: 80,
        backgroundColor: "#6C6969",
        marginTop: 10,
        borderRadius: 10,
        fontSize: 15,
        fontStyle: 'normal',
        color: COLOR.TextAdd
    }

})
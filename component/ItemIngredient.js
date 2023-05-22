import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Themes'

const ItemIngredient = (props) => {
    const { dulieu } = props;
    return (

        <View style={[styles.header, { marginTop: 10, marginStart: 10, marginEnd: 10 }]}>
            <Image style={[styles.image]} source={require('../asset/icon/icon_menu.png')}/>
            <TextInput placeholderTextColor={COLOR.GRAY1} placeholder='  1kg ớt' style={[styles.textinput]} ></TextInput>
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
        width:20,
        height:20,
        marginTop:15,
        marginLeft:5
    },
    textinput: {
        width: 300,
        height: 40,
        backgroundColor: COLOR.Head,
        marginTop: 10,
        borderRadius: 6,
        fontSize: 15,
        color: COLOR.WHITE,
        marginRight: 15,
        borderWidth: 0.7, 
        borderColor: COLOR.GRAY1,
    }

})
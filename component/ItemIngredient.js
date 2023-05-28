import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Themes'
const windowWIdth = Dimensions.get('window').width;
const ItemIngredient = (props) => {
    const { dulieu } = props;
    return (

        <View style={[styles.item, {}]}>
            <Image style={[styles.icon]} source={require('../asset/icon/icon_menu.png')} />
            <TextInput placeholderTextColor={COLOR.GRAY1} placeholder='  1kg ớt' style={[styles.textinput]} ></TextInput>
        </View>
    )
}

export default ItemIngredient

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: windowWIdth-20,
        alignItems: 'center',
        // borderWidth: 2, borderColor: 'white',
        marginBottom:25,

    },
    icon: {
        width: 20,
        height: 20,
        marginRight:10,

    },
    textinput: {
        width: '90%',
        height: 40,
        backgroundColor: COLOR.BACKGROUND6,
        marginTop: 10,
        borderRadius: 7,
        fontSize: 15,
        color: COLOR.WHITE,
        marginRight: 15,
        borderWidth: 0.4,
        borderColor: COLOR.GRAY1,
        paddingHorizontal: 10,
    }

})
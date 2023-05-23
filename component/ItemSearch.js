import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { COLOR, ICON } from '../constants/Themes'
const ItemSearch = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity >
                <Image source={ICON.Search} style={styles.imageSearch}></Image>
            </TouchableOpacity>
            <TextInput placeholder='Tìm kiếm'
             placeholderTextColor={COLOR.WHITE}
              style={styles.input}></TextInput>

        </View>
    )
}

export default ItemSearch

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderColor: COLOR.WHITE,
        borderWidth: 0.7,
        backgroundColor: COLOR.BLACK,
        borderRadius: 30,
        flexDirection: 'row'
    },
    input: {

        placeholderTextColor: COLOR.WHITE,
        backgroundColor: COLOR.BLACK,
        height: 30,
        width: '60%',
        borderRadius: 6,
        marginTop: 10,
        paddingLeft: 10
    },
    imageSearch: {
tintColor:COLOR.WHITE,
        placeholderTextColor: COLOR.WHITE,
        marginTop: 1,
        marginLeft: 10,
        marginTop: 10,
        height: 30,
        width: 30,
    },
    text: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
        marginRight: 10
    }
})
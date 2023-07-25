import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { appStyle } from '../constants/AppStyle'
import { COLOR } from '../constants/Theme'
import ButtonBlue from './ButtonBlue'

const ItemContact = () => {
    return (
        <View style={[appStyle.row, { marginBottom: 8, justifyContent: 'flex-start' ,height:140,paddingHorizontal:16}]}>
            <View style={{ height: 20, width: 20, borderRadius: 100, backgroundColor: 'gray', position: 'absolute', zIndex: 999, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white', top: 10, left: 70 }}>
                <Text style={{ fontSize: 10, color: 'white' }}>1</Text>
            </View>
            <Image style={appStyle.avatar} source={require('../assets/images/defaultAvatar.png')} />
            <View style={[appStyle.column, { marginLeft: 16, }]}>
                <Text style={styles.typeNews}>SCIENCE FICTION</Text>
                <Text style={[styles.titleNews, { marginBottom: 16 }]} numberOfLines={2}>Here What The Battlefield Deluxe Hotel Area Edition</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: "white", fontSize: 18, }}>Liên hệ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemContact

const styles = StyleSheet.create({
    typeNews: {
        color: COLOR.bgHeader,
        fontWeight: '400',
        fontSize: 12,
    },
    titleNews: {
        fontWeight: '700',
        color: COLOR.title,
        width: 260,
        fontSize: 16,
        letterSpacing: 0.5,
    },
    button: {
        backgroundColor: "#2696ff",
        paddingHorizontal: 80,
        borderRadius: 10,
        paddingVertical:10,
        alignSelf: 'center',
        // position:'absolute',
        // bottom:-180,
height:50,
    }
})
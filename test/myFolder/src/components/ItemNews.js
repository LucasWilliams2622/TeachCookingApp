import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { appStyle } from '../constants/AppStyle'
import { COLOR } from '../constants/Theme'

const ItemNews = (props) => {
    const {data}= props;
    const {type ,title,date}= data;
    return (
        <View style={[appStyle.row, { marginVertical: 16, }]}>
            <View style={{ height: 20, width: 20, borderRadius: 100, backgroundColor: 'gray', position: 'absolute', zIndex: 999, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white', top: 10, left: 70 }}>
                <Text style={{ fontSize: 10, color: 'white' }}>1</Text>
            </View>
            <Image style={appStyle.avatar} source={require('../assets/images/defaultAvatar.png')} />
            <View style={[appStyle.column, { marginLeft: 16, }]}>
                <Text style={styles.typeNews}>SCIENCE FICTION</Text>
                <Text style={styles.titleNews} numberOfLines={2}>Here What The Battlefield Deluxe Hotel Area Edition</Text>
                <Text style={styles.typeNews}>NOVEMBER 2022</Text>
            </View>
        </View>
    )
}

export default ItemNews

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
    }
})
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle'

const ItemNotificationHistory = (props) => {
    const { data } = props;
    const { info, dateTime } = data;
    const { onPress } = props;
    return (
        <View style={[appStyle.row,{paddingVertical:20}]}>
            <Image style={appStyle.avatarItem} source={require('../assets/icons/defaultAvatar.png')} />
            <View style={[appStyle.column, { alignItems: 'flex-start', marginLeft: 12 }]}>
                <Text style={[appStyle.text, { fontSize: 16 }]}>{info}</Text>
                <Text style={[appStyle.normalText, { fontSize: 12 }]}>{dateTime}</Text>
            </View>
        </View>
    )
}

export default ItemNotificationHistory

const styles = StyleSheet.create({})
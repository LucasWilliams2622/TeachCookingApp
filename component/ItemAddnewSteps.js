
import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Themes'

const ItemAddnewSteps = (props) => {
    const { dulieu } = props;
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 10 }}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textNumber}>{dulieu.text}</Text>
                <Image style={[styles.image, { width: 20, height: 20, marginTop: 10 }]} source={require('../asset/icon/icon_menu.png')} />
            </View>
            <TextInput placeholderTextColor={COLOR.TextAdd} placeholder='250g đường' style={[styles.textinput, { marginLeft: 15, borderRadius: 10, width: 325, height: 52, textAlign: 'auto' }]}></TextInput>
        </View>

    )
}

export default ItemAddnewSteps

const styles = StyleSheet.create({

  circle: {
    backgroundColor: COLOR.WHITE, height: 34, width: 34, borderRadius: 17, alignItems: 'center'
  },

    textNumber: {
        backgroundColor: COLOR.WHITE,
        borderRadius: 1000,
        height: 25,
        width: 25,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        color: COLOR.BLACK,
        fontSize: 15
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
      },


})
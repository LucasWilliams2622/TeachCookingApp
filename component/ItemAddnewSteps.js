import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Themes'

const ItemAddnewSteps = (props) => {
  const { data } = props;
  return (
    <View style={styles.container2}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.textNumber}>{data?.text}</Text>
        <Image style={styles.icon2} source={require('../asset/icon/icon_menu.png')}></Image>
      </View>
      <TextInput placeholderTextColor={COLOR.TextAdd} placeholder='Sơ chế nguyên liệu' style={styles.TextInput}></TextInput>
      {/* [styles.TextInput, { marginLeft: 15, borderRadius: 10, width: 325, height: 52, textAlign: 'auto' }] */}
    </View>
  )
}
export default ItemAddnewSteps

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    marginBottom: 10,
    marginTop: 10
  },
  textNumber: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 1000,
    height: 22,
    width: 22,
    textAlign: 'center',
    marginTop: 10,
    color: COLOR.BLACK,
    fontSize: 14
  },
  icon2: {
    width: 20,
    height: 20,
    marginTop: 7
  },
  TextInput: {
    width: 310,
    height: 52,
    backgroundColor: COLOR.BACKGROUND6,
    marginTop: 10,
    borderRadius: 6,
    fontSize: 15,
    marginLeft: 15,
    paddingLeft:10,
    color:COLOR.WHITE
  },
})

import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Themes'

const ItemAddnewSteps = (props) => {
    const { dulieu } = props;
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textNumber}>{dulieu.text}</Text>
               <Image style={styles.image} source={require('../asset/icon/icon_menu.png')}></Image>
            </View>
            <TextInput placeholderTextColor={COLOR.TextAdd} placeholder='250g đường' style={styles.textinput}></TextInput>
            {/* [styles.textinput, { marginLeft: 15, borderRadius: 10, width: 325, height: 52, textAlign: 'auto' }] */}
        </View>
    )
}
export default ItemAddnewSteps

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row', 
    justifyContent: 'flex-start',
     marginBottom: 10 ,
     marginTop:10
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
      image: {
        width:20,
        height:20,
        marginTop:7
      },
      textinput: {
        width: 310 ,
        height: 52,
        backgroundColor: COLOR.GRAY2,
        marginTop: 10,
        borderRadius: 6,
        fontSize: 15,
        marginLeft:15
      },
})

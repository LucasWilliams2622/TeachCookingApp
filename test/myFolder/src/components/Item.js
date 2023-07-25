import { StyleSheet, Text, Image,View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Theme'
import { appStyle } from '../constants/AppStyle'

const Item = () => {
  return (
    <View style={[appStyle.column,{marginVertical:8,marginRight:16}]}>
      <Image style={styles.image} source={require('../assets/images/imageVision.png')}/>
    
      <Text style={[styles.title,{width:170,}]}>Ministers Could be Forced to Make NHS WorkForce</Text>
      <View style={[appStyle.row,{justifyContent:'flex-start',alignItems:'center',width:160}]}>
        <Text style={styles.text}>BY</Text>
        <Text style={[styles.title,{fontSize:10,paddingHorizontal:5,top:-5}]}>ADMIN</Text>
        <Text style={styles.text}>FEBRUARY 7,2002</Text>

      </View>

    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  image:{
    width:170,
    height:120,
    borderRadius:8, 
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: COLOR.title,
    marginTop: 10,
  },
  text:{
    fontWeight:'400',
    fontSize:10,
  }
})
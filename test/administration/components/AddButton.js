import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle'
import { useNavigation } from '@react-navigation/native';

const AddButton = (props) => {
  const {onPress,disable}= props;

  return (
    <TouchableOpacity style={styles.buttonPlus} onPress={onPress} disable={disable} >
        <Image style={appStyle.buttonPlus} source={require('../assets/icons/ButtonPlus.png')}/>
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    buttonPlus:{
        position:'absolute',
        zIndex:999,
        top:300,
        right:0
    }
})
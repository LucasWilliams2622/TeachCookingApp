import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle'
import { useNavigation } from '@react-navigation/native';

const AddButton = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.buttonPlus} onPress={()=>{navigation.navigate("AddService")}} >
        <Image style={appStyle.buttonPlus} source={require('../assets/icons/ButtonPlus.png')}/>
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    buttonPlus:{
        position:'absolute',
        zIndex:999,
        top:600,
        right:0
    }
})
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle';

const ButtonPrimary = (props) => {
  const {title,onPress,disable}= props;
  return (
    <TouchableOpacity style={appStyle.button} onPress={onPress} disabled={disable}>
      <Text style={appStyle.titleButton}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({})
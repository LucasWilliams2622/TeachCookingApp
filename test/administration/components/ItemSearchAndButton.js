import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOR } from '../theme/color'
import { appStyle } from '../theme/appStyle'

const ItemSearchAndButton = () => {
  return (
    <View style={[appStyle.row, { alignItems: 'flex-start' }]}>
      <TextInput placeholder='Search' placeholderTextColor={COLOR.normalText}
        style={styles.textInput} />
        <TouchableOpacity style={styles.button}>
          <Text style={appStyle.titleButton}>Search</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ItemSearchAndButton

const styles = StyleSheet.create({
  textInput: {
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    width: 520,
    height:40
  },
  button:{
    borderTopRightRadius:32,
    borderBottomRightRadius:32,
    backgroundColor:COLOR.primary,
    paddingHorizontal: 60,
    height:40,
    alignItems:'center',
    justifyContent:'center'

  }
})
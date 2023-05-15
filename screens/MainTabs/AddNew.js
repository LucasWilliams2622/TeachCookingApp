import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'

const AddNew = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        {/** Header*/}

        <View style={styles.header}>
          <Image style={styles.icon} source={require('../../asset/icon/icon_back.png')} />

          <TouchableOpacity style={styles.buttonAdd}>
            <Text style={styles.textButton}>Đăng món</Text>
          </TouchableOpacity>
          <Text></Text>
        </View>


        <TextInput
          placeholder='Tên món ăn '
          keyboardType='default'></TextInput>
      </View>
    </SafeAreaView>
  )
}

export default AddNew

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  main:{
    backgroundColor:COLOR.WHITE,
    marginHorizontal: 15,
    marginTop: 5,
    borderColor:'BLACK',
    borderWidth:2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: COLOR.BLACK
  },
  buttonAdd: {
    backgroundColor: COLOR.SECONDARY,
    padding: 15,
    borderRadius:10,
    borderColor:COLOR.PRIMARY
  },
  textButton:{
fontWeight:'600',

  }

})
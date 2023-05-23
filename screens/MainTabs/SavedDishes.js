import { StyleSheet, Text, TouchableOpacity, Image, Dimensions, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICON, IMAGES, COLOR } from '../../constants/Themes';
import ItemSearch from '../../component/ItemSearch'
const windowWIdth = Dimensions.get('window').width;

const SavedDishes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.buttonChose}>
            <Image style={styles.save} source={ICON.Saved}></Image>
            <Text style={styles.textButton}>Món đã lưu</Text>
          </TouchableOpacity>
          <ItemSearch />
        </View>
        <View style={styles.content}>
          <Image style={styles.image} source={require('../../asset/image/mtSaved.jpg')}></Image>
          <Text style={styles.title}>Chưa có món mới nào được lưu</Text>
          <Text style={styles.text}>Bạn vẫn chưa lưu món nào. Hãy tìm món bạn yêu </Text>
          <Text style={styles.text}>thích và lưu món đó để nấu và tìm thầy những món đó ở đây </Text>
          <Text style={styles.text}> nhé!</Text>
        </View>
      </View>
    </SafeAreaView >
  )
}

export default SavedDishes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  main: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'column'
  },
  buttonChose: {

    flexDirection: 'row',
    marginVertical: 20,
    height: 35,
    width: 150,
    borderRadius: 50,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,

  },
  save: {
    // backgroundColor: COLOR.WHITE,
    marginVertical: -1,
    height: 24,
    width: 24,
    borderColor: COLOR.WHITE,
  },
  textButton: {
    // backgroundColor: COLOR.WHITE,
    color: COLOR.BLACK,
    lineHeight: 25,
    height:30,
    fontSize: 17,
    fontWeight: '400',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginTop: 30,
    height: 200,
    width: 200,
  },
  title: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 7
  },
  text: {
    color: COLOR.WHITE,
    fontWeight: '400',
    fontSize: 13, 
    marginBottom: 5
  }
})
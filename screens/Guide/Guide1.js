import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
const windowHeight = Dimensions.get('window').height;

const Guide1 = (props) => {
  const { navigation } = props
  const Next = () => {
    navigation.navigate("Guide2")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Image style={[styles.image, { width: 420, height: 470 }]} source={require('../../asset/image/pic1.png')} />
        <View>
          <Text style={styles.title}>Bạn đã phát ngán với các bữa ăn không chút mới mẻ hàng ngày mà không biết nên nấu món nào mới?</Text>
        </View>
        <View style={styles.position}>
          <TouchableOpacity style={styles.buttonStyle}
            onPress={Next}>
            <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', fontFamily: 'Poppins' }}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Guide1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'

  },
  title: {
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
    fontStyle: 'Poppins',
    textAlign: 'center',
    marginTop: 20,
    height:90,
   
  },
  buttonStyle: {
    height: 45,
    alignItems: 'center',
    backgroundColor: '#E17913',
    padding: 6,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,

  },
  position:{
    marginBottom: '20%',

  }
})
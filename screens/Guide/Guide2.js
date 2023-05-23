import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Guide2 = (props) => {
  const { navigation } = props
  const Next = () => {
    navigation.navigate("Guide3")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Image style={[styles.image, { width: 420, height: 470 }]} source={require('../../asset/image/pic2.jpeg')} />
        <View>
          <Text style={styles.title}>Bạn muốn nấu ăn cho bạn bè, người thân, người yêu nhưng lại không biết nấu ăn?</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonStyle}
            onPress={Next}>
            <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', fontFamily: 'Poppins' }}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Guide2

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
    borderRadius: 10
  }
})
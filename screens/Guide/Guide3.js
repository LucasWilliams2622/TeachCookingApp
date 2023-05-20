import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Guide3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <Image style={[styles.image, { width: 420, height: 470 }]} source={require('../../asset/image/pic3.png')} />
        <View>
          <Text style={styles.title}>Hãy gia nhập cùng chúng tôi, hàng ngàn công thức nấu ăn mới đang chờ bạn khám phá!</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold', fontFamily: 'Poppins'}}>Tìm hiểu thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Guide3

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
    marginTop: 20

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
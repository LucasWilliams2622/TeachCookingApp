import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../../asset/image/food3.jpg')}
          resizeMode='cover' style={styles.backdrop}>
          <View style={styles.overlay}>
            <Text style={styles.headline}>It should appear in front of the Background Image</Text>
            <Image style={styles.logo} source={require('../../asset/image/food2.jpg')} />
          </View>

        </Image>
      </View>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000'
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 160,
    height: 52
  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
  },
  headline: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
})
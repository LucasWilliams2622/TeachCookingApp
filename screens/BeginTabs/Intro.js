import { SafeAreaView, StyleSheet, Text, Dimensions,View, Image } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../../constants/Themes'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../asset/image/logogenius.png')} />

        </View>
    </View>
</SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FF6600',
      flexDirection: 'column',
  },
  logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  },
  logo: {
      width: 534,
      height: 467,
  }

})
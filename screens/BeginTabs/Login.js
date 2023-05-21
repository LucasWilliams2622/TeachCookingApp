import { SafeAreaView, StyleSheet, Text, Dimensions,View, Image } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../../constants/Themes'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.center}>
          <Text style={styles.title}>Chào mừng đến</Text>
          <View style={styles.boxLogo} >
            <Image style={styles.logo} source={require('../../asset/image/logo.png')} />
            <Text style={styles.title}>Cookly</Text>
          </View>
        </View>

        <View>
          <Text>
            Đăng nhập với Email
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND

  },
  main: {
    flex: 1,

    backgroundColor: COLOR.BACKGROUND,
    marginHorizontal: 20,
    marginTop: 10
  },
  title: {
    color: COLOR.WHITE,
    fontWeight: '700',
    fontSize: 20,
    fontStyle: 'italic'

  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLOR.WHITE,
    marginTop: 100
  },
  logo: {
    width: 90,
    height: 90,
    marginTop: 10,
  },
  boxLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
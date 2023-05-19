import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICON, COLOR } from '../../../constants/Themes'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image style={styles.avatar} source={require('../../../asset/image/AdventureTime.jpg')} />
          </TouchableOpacity>
          <View style={styles.infoUser}>
            <Text style={styles.nameUser}>Paul Walker</Text>
            <Text style={styles.idUser}>@PaulWalker</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image style={styles.iconSetting} source={require('../../../asset/icon/icon_setting.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        {/* Header */}

      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND

  },
  main: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
    marginHorizontal: 15,
    marginTop: 15
  },
  header: {
    paddingHorizontal: 15,
    height: 80,
    width: windowWIdth,
    backgroundColor: COLOR.BACKGROUND3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 100,
    tintColor: COLOR.WHITE,
    height: 50,
    width: 50,

  },
  nameUser: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.WHITE,
  },
  idUser: {
    color: COLOR.WHITE,
    fontWeight: '400',
    fontSize: 14,

  },
  infoUser: {
    flexDirection: 'column',
    marginLeft: 15,


  },
  iconSetting: {
    height: 30,
    width: 30,
  }
})
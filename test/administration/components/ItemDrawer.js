import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle'
import { COLOR } from '../theme/color'

const ItemDrawer = () => {
  return (
    <SafeAreaView style={[appStyle.column, { backgroundColor: COLOR.bgDrawer, height: '100%', width: 320,  paddingHorizontal: 20, alignItems: 'flex-start' }]}>
      <View style={[appStyle.row, { justifyContent: 'space-between', alignItems: 'center', marginTop: 30,  }]}>
        <Image style={appStyle.avatar} source={require('../assets/icons/defaultAvatar.png')} />
        <View style={[appStyle.column, { justifyContent: 'flex-start', alignItems: 'flex-start', marginHorizontal: 20 }]}>
          <Text style={appStyle.text}>Welcome</Text>
          <Text style={[appStyle.text, { color: COLOR.titleLabel, marginTop: 10 }]}>Administration</Text>
        </View>
        <Image style={{ width: 40, height: 40, alignSelf: 'flex-start', right: -30 }} source={require('../assets/icons/Bell.png')} />
      </View>

      <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
        <View style={[appStyle.row, { justifyContent: 'space-between', width: '100%', marginTop: 66 }]}>
          <Text style={appStyle.text}>Warning (5)</Text>
          <Text style={[appStyle.text, { color: COLOR.titleLabel, fontSize: 14, }]}>See more</Text>
        </View>
        <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
          <Text style={[appStyle.text, { color: COLOR.textError, marginTop: 12 }]}>Tình trạng tấn công</Text>
          <Text style={[appStyle.text, { color: COLOR.textError, marginTop: 12 }]}>Server lỗi</Text>
          <Text style={[appStyle.text, { color: COLOR.textError, marginTop: 12 }]}>Lỗi user</Text>
        </View>
      </View>

      <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
        <View style={[appStyle.row, { justifyContent: 'space-between', width: '100%', marginTop: 66 }]}>
          <Text style={appStyle.text}>Server status</Text>
          <Text style={[appStyle.text, { color: COLOR.titleLabel, fontSize: 14, }]}>See more</Text>
        </View>
        <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
          <View style={[appStyle.row, { justifyContent: 'center' }]}>
            <Text style={[appStyle.text, { color: COLOR.textError, marginTop: 12, marginRight: 26 }]}>Server A</Text>
            <Image style={[appStyle.dotStatus, { top: 5 }]} source={require('../assets/icons/greenCircle.png')} />
          </View>
          <View style={[appStyle.row, { justifyContent: 'center' }]}>
            <Text style={[appStyle.text, { color: COLOR.textError, marginTop: 12, marginRight: 26 }]}>Server B</Text>
            <Image style={[appStyle.dotStatus, { top: 5 }]} source={require('../assets/icons/greenCircle.png')} />
          </View>
          <View style={[appStyle.row, { justifyContent: 'center' }]}>
            <Text style={[appStyle.text, { color: COLOR.textError, marginTop: 12, marginRight: 26 }]}>Server C</Text>
            <Image style={[appStyle.dotStatus, { top: 5 }]} source={require('../assets/icons/yellowCircle.png')} />
          </View>
          <View style={[appStyle.row, { justifyContent: 'center' }]}>
            <Text style={[appStyle.text, { color: COLOR.textError, marginTop: 12, marginRight: 26 }]}>Server D</Text>
            <Image style={[appStyle.dotStatus, { top: 5 }]} source={require('../assets/icons/RedCircle.png')} />
          </View>
        </View>
      </View>
      
      <Text style={[appStyle.text, { marginTop: 30 }]}>Grant access</Text>
      <Text style={[appStyle.text, { marginTop: 30 }]}>New feature</Text>
      <TouchableOpacity>
        <Text style={[appStyle.text, { marginTop: 70 }]}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ItemDrawer

const styles = StyleSheet.create({})
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { appStyle, windowWidth } from '../../../../theme/appStyle'
import ItemTotal from '../../../../components/SystemFeature/PAY/ItemTotal'
import { Alert } from 'react-native';
const widthScreen = windowWidth - 560;
const PostpaidWallet = () => {
  const [alertText, setAlertText] = useState('');

  const handleButtonPress = (title) => {
    Alert.alert(
      'Thông báo',
      "" + title,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <SafeAreaView style={[appStyle.boxSysFeature, { width: widthScreen, marginLeft: 100 }]}>
      <View>
        <Text style={[appStyle.text, { fontWeight: '600' }]}>Today - 20/07/2023</Text>
        <View style={[appStyle.row, { marginTop: 23 }]}>
          <ItemTotal title={"Total deposit"} number={1200} />
          <ItemTotal title={"Total withdraw"} number={0} />
          <ItemTotal title={"Total doubt"} number={0} />
        </View>
        <View style={[appStyle.column, { marginTop: 74 }]}>
          <TouchableOpacity style={[appStyle.row, { justifyContent: 'space-between', width: widthScreen, paddingVertical: 24 }]} onPress={() => { handleButtonPress('DoubtList  ./DoubtList') }} >
            <Text style={[appStyle.text, { fontWeight: '600', fontSize: 18 }]}>Doubt list</Text>
            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/Right.png')} />
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity style={[appStyle.row, { justifyContent: 'space-between', width: widthScreen, paddingVertical: 24 }]} onPress={() => { handleButtonPress('History  ./History') }}>
            <Text style={[appStyle.text, { fontWeight: '600', fontSize: 18 }]}>History</Text>
            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/Right.png')} />
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity style={[appStyle.row, { justifyContent: 'space-between', width: widthScreen, paddingVertical: 24 }]} onPress={() => { handleButtonPress('Setting  ./Setting') }}>
            <Text style={[appStyle.text, { fontWeight: '600', fontSize: 18 }]}>Setting</Text>
            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/Right.png')} />
          </TouchableOpacity>
          <View style={styles.line} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostpaidWallet

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#EBEBEB',
    width: widthScreen,
    height: 1,

  }
})
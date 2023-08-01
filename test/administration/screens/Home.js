import { StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Header from '../components/Header'
import { appStyle, windowHeight } from '../theme/appStyle'
import ItemAdmin from '../components/ItemAdmin'
import { AppContext } from '../AppContext'
import ItemDrawer from "../components/ItemDrawer";

const Home = () => {
  const { showDrawer, setShowDrawer } = useContext(AppContext);

  return (
    <SafeAreaView style={appStyle.container}>
      <Header />
      <View style={[appStyle.row, {}]}>
        <View>
          {
            showDrawer ? (<ItemDrawer />) : (<></>)
          }
        </View>
        <ScrollView style={[styles.boxSelect, { left: showDrawer ? 0 : 0 , top:showDrawer ?-50:0 }]}>
          <View style={[styles.boxItem, { width: showDrawer ? "123%" : "100%", left: showDrawer ? -110 : 0 }]}>
            <ItemAdmin title={"User"} secondTitle={"Management"} onPress={() => { }} source={require('../assets/icons/ic_user_home.png')} />
            <ItemAdmin title={"Content "} secondTitle={"Management"} onPress={() => { }} source={require('../assets/icons/ic_content_home.png')} />
            <ItemAdmin title={"System Feature"} secondTitle={"Management"} onPress={() => { }} source={require('../assets/icons/ic_sys_home.png')} />
          </View>
          <View style={[styles.boxItem, { width: showDrawer ? "123%" : "100%", marginTop: 90, left: showDrawer ? -110 : 0 }]}>
            <ItemAdmin secondTitle={"Support "} onPress={() => { }} source={require('../assets/icons/ic_support_home.png')} />
            <ItemAdmin secondTitle={"Report "} onPress={() => { }} source={require('../assets/icons/ic_chart_home.png')} />
            <ItemAdmin title={"Coming soon "} onPress={() => { }} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  boxSelect: {
    flexDirection: "column",
    marginTop: 40,
    marginBottom: 0,
    height: windowHeight-170,

  },
  boxItem: {
    flexDirection: 'row',
    height: 200,
    width: '100%',
    marginBottom: 71,
    justifyContent: 'center',
  },
  boxReport: {
    height: 10,
  }
})
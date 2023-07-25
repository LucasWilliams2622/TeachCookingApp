import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import Header from '../components/Header'
import { appStyle } from '../theme/appStyle'
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
        <ScrollView style={[styles.boxSelect, { left: showDrawer ? 0 : 0 }]}>
          <View style={[appStyle.column, { alignItems: 'center', marginBottom: 50 }]}>
            <Text style={[appStyle.text, { fontWeight: '600', marginBottom: 26, alignSelf: 'flex-start', left: showDrawer ? 120 : 240 }]}>Today - 20/07/2023</Text>
            <View style={[appStyle.row, { justifyContent: 'space-between', width: 500, alignSelf: 'flex-start', left: showDrawer ? 120 : 240 }]}>
              <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                <Text style={[appStyle.normalText, { marginBottom: 8 }]}>Online</Text>
                <Text style={appStyle.textMoney}>369</Text>
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                <Text style={[appStyle.normalText, { marginBottom: 8 }]}>Register</Text>
                <Text style={appStyle.textMoney}>10</Text>
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                <Text style={[appStyle.normalText, { marginBottom: 8 }]}>KYC</Text>
                <Text style={appStyle.textMoney}>2</Text>
              </View>
            </View>
          </View>

          <View style={[styles.boxItem, { width: showDrawer ? "123%" : "100%", left: showDrawer ? -100 : 0 }]}>
            <ItemAdmin title={"User"} secondTitle={"Management"} onPress={() => { }} />
            <ItemAdmin title={"Content "} secondTitle={"Management"} onPress={() => { }} />
          </View>
          <View style={[styles.boxItem, { width: showDrawer ? "123%" : "100%", left: showDrawer ? -100 : 0 }]}>
            <ItemAdmin title={"System Feature"} secondTitle={"Management"} onPress={() => { }} />
            <ItemAdmin title={"Support "} onPress={() => { }} />
          </View>
          <TouchableOpacity style={[appStyle.itemAdmin, { height: 200, width: showDrawer ? "74%" : "62%", alignSelf: 'center', marginBottom: 300 }]}  >
            <Text style={appStyle.titleLabel}>Report</Text>
          </TouchableOpacity>
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
    height: 900,

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
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
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
      {
        showDrawer ? (<ItemDrawer />) : (<></>)
      }

      <View style={styles.boxSelect}>
        <View style={styles.boxItem}>
          <ItemAdmin title={"User"} secondTitle={"Management"} onPress={() => { }} />
          <ItemAdmin title={"Content "} secondTitle={"Management"} onPress={() => { }} />
        </View>
        <View style={styles.boxItem}>
          <ItemAdmin title={"System Feature"} secondTitle={"Management"} onPress={() => { }} />
          <ItemAdmin title={"Support "} onPress={() => { }} />
        </View>
        <View >
          <TouchableOpacity style={[appStyle.itemAdmin, { height: 100, width: "60%", alignSelf: 'center' }]}  >
            <Text style={appStyle.titleLabel}>Report</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  boxSelect: {
    flexDirection: "column",
    marginTop: 50,
    marginBottom: 0,
    height: 900,

  },
  boxItem: {
    flexDirection: 'row',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 71,
  },
  boxReport: {
    height: 10,
  }
})
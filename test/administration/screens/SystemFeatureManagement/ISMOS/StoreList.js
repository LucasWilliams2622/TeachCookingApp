import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions } from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLOR } from '../../../theme/color';
import mStoreList from './StoreList/mStoreList'
import Upgraded from './StoreList/Upgraded'
const renderScene = SceneMap({
  storeList: mStoreList,
  upgraded: Upgraded,

});
const StoreList = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'storeList', title: 'StoreList' },
    { key: 'upgraded', title: 'Upgraded' },

  ]);
  return (
    <SafeAreaView style={[appStyle.boxSysFeature, { marginLeft: 80,height:600,width:'100%'}]}>
      <Text style={[appStyle.text,{fontWeight:'600'}]}>Today 20/07/2023</Text>
      <View style={[appStyle.row, { marginLeft: 70, marginTop: 26, marginBottom: 80 }]}>
        <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
          <Text style={appStyle.normalText}>New registration</Text>
          <Text style={appStyle.textMoney}>1</Text>
        </View>
        <View style={[appStyle.column, { alignItems: 'flex-start', marginLeft: 250 }]}>
          <Text style={appStyle.normalText}>Inactive</Text>
          <Text style={appStyle.textMoney}>20</Text>
        </View>
      </View>
      <TabView
        lazy={true}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        swipeEnabled={true}
        style={[appStyle.TabView, { width: '100%', }]}
        initialLayout={{ width: layout.width }}
        tabBarStyle={styles.tabBar}
        renderTabBar={
          props =>
            <TabBar {...props}
              renderLabel={({ route, color, focused }) => (
                <Text style={{
                  fontSize: 16, fontWeight: '400',
                  color: focused ? COLOR.titleLabel : COLOR.text, alignSelf: 'flex-start',
                  backgroundColor: focused ? COLOR.bg : COLOR.bg,
                }}>
                  {route.title}
                </Text>
              )}
              tabStyle={{ width: 200, alignItems: 'flex-start', left: -10 }}
              scrollEnabled={false}
              indicatorStyle={{
                backgroundColor: COLOR.titleLabel,
                width: 50,
                height: 4,
              }}
              indicatorContainerStyle={{ marginLeft: 5 }}
              style={{ backgroundColor: COLOR.bg, elevation: 0, }}
            />
        }
      />
    </SafeAreaView>
  )
}

export default StoreList

const styles = StyleSheet.create({})
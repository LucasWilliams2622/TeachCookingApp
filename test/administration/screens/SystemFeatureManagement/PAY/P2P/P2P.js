import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions } from 'react-native'
import React from 'react'
import { appStyle } from '../../../../theme/appStyle'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLOR } from '../../../../theme/color';
import Commission from './Commission'
import AccessPermissions from './AccessPermissions'
import Report from './Report'
import ComplaintHistory from './ComplaintHistory'

const renderScene = SceneMap({
  Commission: Commission,
  AccessPermissions: AccessPermissions,
  Report: Report,
  ComplaintHistory: ComplaintHistory,


});
const P2P = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Commission', title: 'Commission' },
    { key: 'AccessPermissions', title: 'AccessPermissions' },
    { key: 'Report', title: 'Report' },
    { key: 'ComplaintHistory', title: 'ComplaintHistory' },

  ]);
  return (
    <SafeAreaView style={[appStyle.boxSysFeature, { marginLeft: 80, height: 600, width: '100%' }]}>
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

export default P2P

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../theme/appStyle'
import OrderHistoryLink from './OrderHistoryLink'
import SynchronousStoreLink from './SynchronousStoreLink'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLOR } from '../../theme/color';

const renderScene = SceneMap({
  first: OrderHistoryLink,
  second: SynchronousStoreLink,
});
const LinkJoined = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Order history' },
    { key: 'second', title: 'Synchronous store list' },
  ]);

  return (
    <View style={[appStyle.boxInfo, { flexDirection: 'row', width: '82%', }]}>
      <TabView
        lazy={true}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={appStyle.TabView}
        initialLayout={{ width: layout.width }}
        tabBarStyle={styles.tabBar}
        renderTabBar={
          props =>
            <TabBar {...props}
              renderLabel={({ route, color, focused }) => (
                <Text style={{
                  fontSize: 16, fontWeight: '400',
                  color: focused ? COLOR.titleLabel : COLOR.text,
                  backgroundColor: focused ? COLOR.bg : COLOR.bg,
                  paddingLeft: route.title == "Synchronous store list" ? 100 : 0,
                }}>
                  {route.title}
                </Text>
              )}
              tabStyle={{ width: "auto"}}
              scrollEnabled={false}
              // indicatorStyle={{
              //   backgroundColor: COLOR.titleLabel,
              //   width: 50 
              // }}
              // indicatorContainerStyle={{ marginHorizontal: 100, paddingHorizontal: 80 }}
              style={{ backgroundColor: COLOR.bg,  elevation: 0,}}
            />
        }
      />
      <Text style={[appStyle.text, { right: 40, top: 15 }]}>P2P</Text>
    </View>

  )
}

export default LinkJoined

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0
  }
})
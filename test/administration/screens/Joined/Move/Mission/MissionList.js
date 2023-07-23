import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../../../theme/appStyle'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLOR } from '../../../../theme/color';
import PendingList from './PendingList'
import CompletedList from './CompletedList'
import CanceledList from './CanceledList'

const renderScene = SceneMap({
  pendingList: PendingList,
  completedList: CompletedList,
  canceledList: CanceledList,

});
const MissionList = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'pendingList', title: 'Pending' },
    { key: 'completedList', title: 'Completed' },
    { key: 'canceledList', title: 'Canceled' },
  ]);

  return (
    <View style={[appStyle.boxInfo, { flexDirection: 'row', width: '100%', height: 600}]}>
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
                }}>
                  {route.title}
                </Text>
              )}
              // tabStyle={{ width: "auto" }}
              scrollEnabled={false}
              indicatorStyle={{
                backgroundColor: COLOR.titleLabel,
                width: 50,
                height: 4,
              }}
              indicatorContainerStyle={{ marginLeft: 105 }}
              style={{ backgroundColor: COLOR.bg, elevation: 0, }}
            />
        }
      />
    </View>
  )
}

export default MissionList

const styles = StyleSheet.create({})
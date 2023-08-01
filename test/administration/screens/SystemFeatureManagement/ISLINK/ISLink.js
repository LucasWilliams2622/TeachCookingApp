import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight } from '../../../theme/appStyle'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLOR } from '../../../theme/color';
import Commission from './Commission'
import AccessPermissions from './AccessPermissions'
import Report from './Report'
import OrderComplaintHistory from './OrderComplaintHistory'

const renderScene = SceneMap({
  Commission: Commission,
  AccessPermissions: AccessPermissions,
  Report: Report,
  OrderComplaintHistory: OrderComplaintHistory,

});
const ISLink = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(2);
  const [routes] = React.useState([
    { key: 'Commission', title: 'Commission' },
    { key: 'AccessPermissions', title: 'Access Permissions' },
    { key: 'Report', title: 'Report' },
    { key: 'OrderComplaintHistory', title: 'Order Complaint History' },

  ]);

  return (
    <View style={[appStyle.boxInfo, { flexDirection: 'row', width: '110%',height:windowHeight -200 }]}>
      <TabView
        lazy={true}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={[appStyle.TabView,{width:'100%',}]}
        initialLayout={{ width: layout.width }}
        tabBarStyle={styles.tabBar}
        renderTabBar={
          props =>
            <TabBar {...props}
              renderLabel={({ route, color, focused }) => (
                <Text style={{
                  fontSize: 16, fontWeight: '400',
                  color: focused ? COLOR.titleLabel : COLOR.text,alignSelf:'flex-start',
                  backgroundColor: focused ? COLOR.bg : COLOR.bg,
                }}>
                  {route.title}
                </Text>
              )}
              tabStyle={{ width: 200 ,alignItems:'flex-start',left:-10}}
              scrollEnabled={false}
              indicatorStyle={{
                backgroundColor: COLOR.titleLabel,
                width: 50,
                height: 4,
              }}
              indicatorContainerStyle={{ marginLeft:12 }}
              style={{ backgroundColor: COLOR.bg, elevation: 0, }}
            />
        }
      />
    </View>
  )
}

export default ISLink

const styles = StyleSheet.create({})
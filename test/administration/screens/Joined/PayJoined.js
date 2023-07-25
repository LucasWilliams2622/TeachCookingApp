import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../theme/appStyle'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLOR } from '../../theme/color';
import Point from '../../screens/Joined/Pay/Point'
import Wallet from '../../screens/Joined/Pay/Wallet'
import USDT from '../../screens/Joined/Pay/USDT'
import ISGroupToken from '../../screens/Joined/Pay/ISGroupToken'
import Stake from '../../screens/Joined/Pay/Stake'
import Dividend from '../../screens/Joined/Pay/Dividend'

const renderScene = SceneMap({
  Point: Point,
  Wallet: Wallet,
  USDT: USDT,
  ISGroupToken: ISGroupToken,
  Stake: Stake,
  Dividend: Dividend,
});

const PayJoined = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Point', title: 'Point' },
    { key: 'Wallet', title: 'Wallet' },
    { key: 'USDT', title: 'USDT' },
    { key: 'ISGroupToken', title: 'ISGroup Token' },
    { key: 'Stake', title: 'Stake' },
    { key: 'Dividend', title: 'Dividend' },

  ]);
  return (
    <View style={[appStyle.boxInfo, { flexDirection: 'row', width: '82%', height: 635, }]}>
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
                height: 3,
              }}
              indicatorContainerStyle={{ marginLeft: 50 }}
              style={{ backgroundColor: COLOR.bg, elevation: 0, }}
            />
        }
      />
    </View>
  )
}

export default PayJoined

const styles = StyleSheet.create({})
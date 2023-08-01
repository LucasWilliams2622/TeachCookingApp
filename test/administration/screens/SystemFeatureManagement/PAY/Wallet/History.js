import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { appStyle, windowHeight } from '../../../../theme/appStyle'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLOR } from '../../../../theme/color';
import Deposit from './History/Deposit'
import Transfer from './History/Transfer'
import Withdraw from './History/Withdraw'

const renderScene = SceneMap({
  deposit: Deposit,
  transfer: Transfer,
  withdraw: Withdraw,

});
const History = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'deposit', title: 'Deposit' },
    { key: 'transfer', title: 'Transfer' },
    { key: 'withdraw', title: 'Withdraw' },

  ]);

  useEffect(() => {

    return () => {

    }
  }, [])
  return (
    <View style={[appStyle.boxInfo, { flexDirection: 'row', width: windowHeight + 40, height: windowHeight - 220, }]}>
      <TabView
        lazy={true}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
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
              indicatorContainerStyle={{ marginLeft: 1 }}
              style={{ backgroundColor: COLOR.bg, elevation: 0, }}
            />
        }
      />
    </View>
  )
}

export default History

const styles = StyleSheet.create({})

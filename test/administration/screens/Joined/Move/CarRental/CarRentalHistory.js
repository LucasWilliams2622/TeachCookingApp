import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../../../theme/appStyle'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLOR } from '../../../../theme/color';
import PendingList from '../Mission/PendingList'
import ApprovedList from './ApprovedList'
import PaidDepositList from './PaidDepositList'
import StartedList from './StartedList'
import FinishedList from './FinishedList'
import CanceledList from '../Mission/CanceledList'


const renderScene = SceneMap({
    pendingList: PendingList,
    approvedList: ApprovedList,
    paidDepositList: PaidDepositList,
    startedList: StartedList,
    finishedList: FinishedList,
    canceledList: CanceledList,


});
const CarRentalHistory = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'pendingList', title: 'Pending' },
        { key: 'approvedList', title: 'Approved' },
        { key: 'paidDepositList', title: 'PaidDeposit' },
        { key: 'startedList', title: 'Started' },
        { key: 'finishedList', title: 'Finished' },
        { key: 'canceledList', title: 'Canceled' },
    ]);

    return (
        <View style={[appStyle.boxInfo, {left:-90, flexDirection: 'row', width: '110%', height: 400,marginBottom:100}]}>
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
                tabStyle={{ width: 120 ,alignItems:'flex-start',left:-10}}
                scrollEnabled={false}
                indicatorStyle={{
                  backgroundColor: COLOR.titleLabel,
                  width: 50,
                  height: 4,
                }}
                indicatorContainerStyle={{ marginLeft:1 }}
                style={{ backgroundColor: COLOR.bg, elevation: 0, }}
              />
          }
        />
      </View>
    )
}

export default CarRentalHistory

const styles = StyleSheet.create({})
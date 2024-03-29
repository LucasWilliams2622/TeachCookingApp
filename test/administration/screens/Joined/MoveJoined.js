import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../theme/appStyle'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLOR } from '../../theme/color';
import Mission from './Move/Mission';
import CallDriver from './Move/CallDriver';
import CarRental from './Move/CarRental';
import Booking from './Move/Booking';
import Matching from './Move/Matching';
import SOS from './Move/SOS';
import DetailCar from './Move/CarRental/DetailCar';



const renderScene = SceneMap({
  mission: Mission,
  callDriver: CallDriver,
  carRental: CarRental,
  booking: Booking,
  matching: Matching,
  sos: SOS,


});
const MoveJoined = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(4);
  const [routes] = React.useState([
    { key: 'mission', title: 'Mission' },
    { key: 'callDriver', title: 'Call Driver' },
    { key: 'carRental', title: 'Car Rental' },
    { key: 'booking', title: 'Booking' },
    { key: 'matching', title: 'Matching' },
    { key: 'sos', title: 'SOS' },

  ]);
  return (
    <View style={[appStyle.boxInfo, { flexDirection: 'row', width: windowWidth-300, height: windowHeight-210,}]}>
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
              tabStyle={{ width: 140 ,alignItems:'flex-start',left:-10}}
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

export default MoveJoined

const styles = StyleSheet.create({})
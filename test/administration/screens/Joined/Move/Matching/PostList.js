import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { appStyle } from '../../../../theme/appStyle'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLOR } from '../../../../theme/color';
import Processed from './ProcessedMatching'
import History from './HistoryMatching'

const renderScene = SceneMap({
    processed: Processed,
    history: History,

});
const PostList = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'processed', title: 'Processed' },
        { key: 'history', title: 'History' },
    ]);
    return (
        <View style={{ height: 270, width: 900, }}>
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
                                    fontSize: 16,
                                    fontWeight: '400',
                                    color: focused ? COLOR.titleLabel : COLOR.text,
                                    backgroundColor: focused ? COLOR.bg : COLOR.bg,
                                }}>
                                    {route.title}
                                </Text>
                            )}
                            tabStyle={{ width: "auto" }}
                            scrollEnabled={false}
                            indicatorStyle={{
                                backgroundColor: COLOR.titleLabel,
                                // width: 50,
                                height: 4,
                                // left:-50
                            }}
                            //   indicatorContainerStyle={{ marginLeft: 50 }}
                            style={{ backgroundColor: COLOR.bg, elevation: 0, }}
                        />
                }
            />
        </View>
    )
}

export default PostList

const styles = StyleSheet.create({})
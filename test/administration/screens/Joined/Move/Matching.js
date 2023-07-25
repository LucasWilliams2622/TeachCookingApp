import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PostList from './Matching/PostList'
import { appStyle } from '../../../theme/appStyle'
import ItemRoadmap from '../../../components/MOVE/Matching/ItemRoadmap'
import ItemMatching from '../../../components/MOVE/Matching/ItemMatching'
import { FlatList } from 'react-native'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Matching = () => {
  const [postListAvailable, setPostListAvailable] = useState(true);
  const [roadmapAvailable, setRoadmapAvailable] = useState(true)
  const [matchingAvailable, setMatchingAvailable] = useState(true)
  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <Text style={[appStyle.text, { marginTop: 52 }]}>Post list</Text>
      {postListAvailable ? (<PostList />) : (<View><Text style={[appStyle.normalText, { alignSelf: 'center', marginVertical: 52 }]}>No data</Text></View>)}
      <Text style={[appStyle.text, { marginTop: 52 }]}>Roadmap list</Text>

      {roadmapAvailable ? (<ScrollView style={{ maxHeight: 400 }} nestedScrollEnabled={true}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <ItemRoadmap data={item} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>) : (<View><Text style={[appStyle.normalText, { alignSelf: 'center', marginVertical: 52 }]}>No data</Text></View>)}
      <Text style={[appStyle.text, { marginTop: 52 }]}>Matching list (Schedule)</Text>
      {matchingAvailable ? (<ScrollView style={{ maxHeight: 400 }} nestedScrollEnabled={true}>
        <FlatList
          style={{ marginBottom: 80 }}
          data={DATA}
          renderItem={({ item }) => <ItemMatching data={item} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>) : (<View><Text style={[appStyle.normalText, { alignSelf: 'center', marginVertical: 52 }]}>No data</Text></View>)}
    </ScrollView >
  )
}

export default Matching

const styles = StyleSheet.create({})
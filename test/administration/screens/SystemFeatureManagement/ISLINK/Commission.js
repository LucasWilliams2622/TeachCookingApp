import { SafeAreaView, StyleSheet, Text, ScrollView, View,Image, Switch,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'
import { useNavigation } from '@react-navigation/native';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AddButton from '../../../components/AddButton';

const Commission = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const tableHead = ["No", "Level", "Commission"];
  const widthArr = [100, 120, 140];

  const asset = [{},{},{},{},{},{},]
  let array = asset.map(obj => ["1", "F1", "10%"]);
  const createElement = (data, index, color) => (
    <View style={{ alignItems: 'flex-start', paddingVertical: 22 }}>
      <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color }}>{data}</Text>
    </View>
  );

  const element1 = (data, index) => createElement(data, index, COLOR.titleBreadCrumb);
  const element2 = (data, index) => createElement(data, index, COLOR.title);

  return (
    <SafeAreaView style={[appStyle.boxSysFeature,{width:windowWidth-500,marginLeft:1,height:windowHeight-260}]}>
    <View style={{ marginLeft: 12 }}>
      <View style={[appStyle.row, { marginTop: 18 }]}>
        <Text style={[appStyle.text, { marginRight: 12 }]}>On/Off</Text>
        <Switch
          style={{ marginTop: 5, left: -10 }}
          trackColor={{ false: '#767577', true: '#059669' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>

    <TouchableOpacity style={styles.buttonPlus} onPress={{}}  >
        <Image style={appStyle.buttonPlus} source={require('../../../assets/icons/ButtonPlus.png')}/>
    </TouchableOpacity>
    <ScrollView  style={{ marginTop: 26,width:400}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <Table style={{ borderRadius: 12, overflow: 'hidden', marginRight: 30 }}>
        <Row
          data={tableHead}
          widthArr={widthArr}
          style={[appStyle.tableHead, { borderWidth: 1, borderTopRightRadius: 12, borderTopLeftRadius: 12, paddingLeft: 12, borderColor: "#00000033" }]}
          textStyle={{ fontSize: 16, fontWeight: '700', }}
        />
        {
          array.map((rowData, index) => {
            const isLastItem = index === array.length - 1;
            return (
              <TableWrapper key={index.id} style={{ flexDirection: "row", borderBottomLeftRadius: isLastItem ? 12 : 0, borderBottomRightRadius: isLastItem ? 12 : 0, borderWidth: 1, borderColor: "#00000033", }}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    style={{ borderWidth: 1, borderColor: "#00000019", paddingLeft: 12 }}
                    key={cellIndex}
                    width={widthArr[cellIndex]}
                    data={cellIndex === 1 ? element1(cellData, index)
                      : cellIndex === 2 ? element2(cellData, index)
                        : cellData}
                  />
                ))}
              </TableWrapper>
            );
          })
        }
      </Table>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Commission

const styles = StyleSheet.create({
  buttonPlus:{
    position:'absolute',
    zIndex:999,
    top:450,
    right:0
}
})
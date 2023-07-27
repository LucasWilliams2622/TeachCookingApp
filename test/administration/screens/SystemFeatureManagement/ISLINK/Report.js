import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';

const Report = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const tableHead = ["No", "ID order", "Store’s name", "Total price", "Created date", "Status"];
  const widthArr = [80, 120, 140, 140, 140, 140];

  const asset = [{ "status": true }, { "status": false }, { "status": true }, { "status": true },]
  let array = asset.map(obj => ["1", "127362", "Dì Năm", "100.000đ", "01/06/2023 09:20 am", obj.status]);
  const createElement = (data, index, color) => (
    <View style={{ alignItems: 'flex-start', paddingVertical: 22 }}>
      <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color }}>{data}</Text>
    </View>
  );

  const element1 = (data, index) => createElement(data, index, COLOR.titleBreadCrumb);
  const element2 = (data, index) => createElement(data, index, COLOR.title);
  const element3 = (data, index) => createElement(data, index, COLOR.title);
  const element4 = (data, index) => createElement(data, index, COLOR.title);
  const element5 = (data, index) => (
    <View style={{ alignItems: 'center', paddingVertical: 22, }}>
      <Text style={[appStyle.text, { color: data ? COLOR.bgSelectJoined : COLOR.textError }]}>{data ? "Complete" : "Cancel"}</Text>
    </View>
  );


  return (
    <SafeAreaView style={[appStyle.boxSysFeature, {  marginTop: 26, height: windowHeight - 300, width: windowWidth - 480, marginLeft: 1 }]}>
      <Text style={[appStyle.text, { fontWeight: '600' }]}>Today 20/07/2023</Text>
      <View style={[appStyle.row, { marginTop: 26, }]}>
        <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
          <Text style={appStyle.normalText}>Complete</Text>
          <Text style={appStyle.textMoney}>120</Text>
        </View>
        <View style={[appStyle.column, { alignItems: 'flex-start', marginLeft: 250 }]}>
          <Text style={appStyle.normalText}>Order</Text>
          <Text style={[appStyle.textMoney, { color: COLOR.text }]}>369</Text>
        </View>
        <View style={[appStyle.column, { alignItems: 'flex-start', marginLeft: 250 }]}>
          <Text style={appStyle.normalText}>Delay</Text>
          <Text style={[appStyle.textMoney, { color: COLOR.textError }]}>2</Text>
        </View>
      </View>
      <ScrollView style={{ marginTop: 50 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Table style={{ borderRadius: 12, overflow: 'hidden', marginRight: 30 }}>
          <Row
            data={tableHead}
            widthArr={widthArr}
            style={[appStyle.tableHead, { borderWidth: 1, paddingHorizontal: 12, borderTopRightRadius: 12, borderTopLeftRadius: 12, paddingLeft: 12, borderColor: "#00000033" }]}
            textStyle={{ fontSize: 16, fontWeight: '700', }}
          />
          {
            array.map((rowData, index) => {
              const isLastItem = index === array.length - 1;
              return (
                <TableWrapper key={index.id} style={{ flexDirection: "row", borderBottomLeftRadius: isLastItem ? 12 : 0, borderBottomRightRadius: isLastItem ? 12 : 0, borderWidth: 1, borderColor: "#00000033", }}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      style={{ borderWidth: 1, borderColor: "#00000019", paddingHorizontal: 12 }}
                      key={cellIndex}
                      width={widthArr[cellIndex]}
                      data={cellIndex === 1 ? element1(cellData, index)
                        : cellIndex === 2 ? element2(cellData, index)
                          : cellIndex === 3 ? element3(cellData, index)
                            : cellIndex === 4 ? element4(cellData, index)
                              : cellIndex === 5 ? element5(cellData, index)
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

export default Report

const styles = StyleSheet.create({})
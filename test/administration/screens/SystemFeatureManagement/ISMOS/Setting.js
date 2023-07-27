import { SafeAreaView, StyleSheet, Text, ScrollView, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowWidth } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'
import { useNavigation } from '@react-navigation/native';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AddButton from '../../../components/AddButton';

const Setting = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const tableHead = ["No", "Level", "Commission"];
  const widthArr = [100, 120, 140];

  const asset = [{
    "allow_sale": 1,
    "barcode": "",
    "barcode_in": null,
    "brand": "",
    "category": "Cà Phê Pha Máy",
    "combo": "",
    "cost": "",
    "cost_log": null,
    "created_date": "2022-02-22 10:08:06",
    "desc": "",
    "exhibition": null,
    "featured": "0",
    "height": "",
    "id": 67,
    "id_category": "",
    "id_outlet": "",
    "id_parent": "",
    "image": "https://access.linkpos.top/databases/customers/A1654847499CAFE_cafe/upload/1661854815_product_ca-phe-den",
    "length": "",
    "limit_stock": "",
    "modified_date": "2022-02-22 10:08:06",
    "original": "",
    "price": 20000,
    "price_off": "",
    "status": "",
    "tags": null,
    "title": "Cà Phê Đen",
    "type": "",
    "unit": "Ly",
    "weight": "",
    "width": ""
  }, {
    "allow_sale": 1,
    "barcode": "",
    "barcode_in": null,
    "brand": "",
    "category": "Cà Phê Pha Máy",
    "combo": "",
    "cost": "",
    "cost_log": null,
    "created_date": "2022-02-22 10:12:19",
    "desc": "",
    "exhibition": null,
    "featured": "0",
    "height": "",
    "id": 68,
    "id_category": "",
    "id_outlet": "",
    "id_parent": "",
    "image": "https://access.linkpos.top/databases/customers/A1654847499CAFE_cafe/upload/1661854739_product_ca-phe-sua",
    "length": "",
    "limit_stock": "",
    "modified_date": "2022-02-22 10:12:19",
    "original": "",
    "price": 25000,
    "price_off": "",
    "status": "",
    "tags": null,
    "title": "Cà Phê Sữa",
    "type": "",
    "unit": "Ly",
    "weight": "",
    "width": ""
  }]
  let array = asset.map(obj => [obj.id, "F1", "10%"]);
  const createElement = (data, index, color) => (
    <View style={{ alignItems: 'flex-start', paddingVertical: 22 }}>
      <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color }}>{data}</Text>
    </View>
  );

  const element1 = (data, index) => createElement(data, index, COLOR.titleBreadCrumb);
  const element2 = (data, index) => createElement(data, index, COLOR.title);

  return (
    <SafeAreaView style={[appStyle.boxSysFeature,{width:windowWidth-580,}]}>
      <View style={{ marginLeft: 12 }}>
        <Text style={appStyle.text}>Commission</Text>
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

      <AddButton onPress={() => { navigation.navigate("AddSetting") }} />
      <ScrollView horizontal style={{ marginTop: 26, }}>
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

export default Setting

const styles = StyleSheet.create({})
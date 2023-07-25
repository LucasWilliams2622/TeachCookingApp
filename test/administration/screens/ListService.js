import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext'
import { appStyle } from '../theme/appStyle'
import Header from '../components/Header'
import ItemDrawer from "../components/ItemDrawer";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { COLOR } from '../theme/color'
import AddButton from '../components/AddButton'
import { useNavigation } from '@react-navigation/native';

const ListService = (props) => {
  const navigation = useNavigation();
  const { showDrawer, setShowDrawer } = useContext(AppContext);
  const tableHead = ["STT", "ID", "Title", "Description", "Created date", "Expiration date"];
  const widthArr = [120, 120, 120, 150, 200, 200];
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
  let array = asset.map(obj => [obj.id, "03847363", "Dịch vụ 1", "Dịch vụ 1 là dịch vụ vui chơi giải trí...", "01/06/2023 09:20 am", "12/06/2023 09:20 am"]);
  const createElement = (data, index, color) => (
    <View style={{ alignItems: 'flex-start', paddingVertical: 22 }}>
      <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color }}>{data}</Text>
    </View>
  );

  const element1 = (data, index) => createElement(data, index, COLOR.titleBreadCrumb);
  const element2 = (data, index) => createElement(data, index, COLOR.title);
  const element3 = (data, index) => createElement(data, index, COLOR.title);
  const element4 = (data, index) => createElement(data, index, COLOR.title);
  const element5 = (data, index) => createElement(data, index, COLOR.textError);

  return (
    <SafeAreaView style={appStyle.container}>
      <Header />
      <View style={appStyle.row}>
        <View>
          {
            showDrawer ? (<ItemDrawer />) : (<></>)
          }
        </View>
        <View style={[appStyle.column, {flex: 1, alignItems: 'flex-start', marginVertical: 32, marginHorizontal: 20, }]}>
          <View style={[appStyle.row, { alignItems: 'center', marginBottom: 30 }]}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Image style={appStyle.bigIcon} source={require('../assets/icons/Left.png')} />
            </TouchableOpacity>
            <Text style={appStyle.text}>List</Text>
          </View>
          <AddButton onPress={()=>{}}/>


          <ScrollView horizontal style={{ marginTop: 26, }}>
            <Table borderStyle={{}}>
              <Row
                data={tableHead}
                widthArr={widthArr}
                style={appStyle.tableHead}
                textStyle={{ fontSize: 13, fontWeight: 'bold', marginLeft: 10 }}
              />
              {
                array.map((rowData, index) => (
                  <TableWrapper key={index.id} style={{ flexDirection: "row", backgroundColor: COLOR.bg }}>
                    {rowData.map((cellData, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        width={widthArr[cellIndex]}
                        data={cellIndex === 1 ? element1(cellData, index)
                          : cellIndex === 2 ? element2(cellData, index)
                            : cellIndex === 3 ? element3(cellData, index)
                              : cellIndex === 4 ? element4(cellData, index)
                                : cellIndex === 5 ? element5(cellData, index)

                                  : cellData}
                      // textStyle={{fontSize:13, padding:10, paddingTop:15, paddingBottom:15}}
                      />
                    ))}
                  </TableWrapper>
                ))
              }
            </Table>
          </ScrollView>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default ListService

const styles = StyleSheet.create({
  tableHead: {
    height: 58,
    width: '100%',
    backgroundColor: COLOR.secondary,

  },
})
import { SafeAreaView, ScrollView, StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../theme/appStyle'
import { COLOR } from '../../theme/color'
import InputSearch from '../../components/InputSearch'
import SelectMultiple from 'react-native-select-multiple'
import { CheckBox } from 'react-native-elements';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';

const SupportMemberList = () => {
  const tableHead = ["No", "ID", "Name", "Phone", "Email", "Activated", "Role", "Support"];
  const widthArr = [80, 120, 140, 120, 140, 120, 120, 420];

  const asset = [{ "status": true, "name": "Nguyễn Văn An", "role": "User" }, { "status": false, "name": "Trần Thị Hồng", "role": "User" }, { "status": true, "name": "Trần Linh", "role": "Support" }, { "status": true, "name": "Nguyễn Văn An" }, {}]
  let array = asset.map(obj => ["1", "127362", obj.name, "0987654321", "abc@gmail.com", obj.status, obj.role, ""]);
  const createElement = (data, index, color) => (
    <View style={{ alignItems: 'flex-start', paddingVertical: 22 }}>
      <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color }}>{data}</Text>
    </View>
  );
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxToggle = (value) => {
    if (checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  const options = [
    { label: 'MOS', value: 'mos' },
    { label: 'LINK', value: 'link' },
    { label: 'LAND', value: 'land' },
    { label: 'PAY', value: 'pay' },

  ];

  const element1 = (data, index) => createElement(data, index, COLOR.title);
  const element2 = (data, index) => createElement(data, index, COLOR.titleBreadCrumb);
  const element3 = (data, index) => createElement(data, index, COLOR.title);
  const element4 = (data, index) => createElement(data, index, COLOR.title);
  const element5 = (data, index) => (
    <View style={{ alignItems: 'center', paddingVertical: 22, }}>
      {
        data ?
          (<Image style={appStyle.icon} source={require('../../assets/icons/greenCircle.png')} />)
          :
          (<Image style={appStyle.icon} source={require('../../assets/icons/RedCircle.png')} />)
      }

    </View>
  );
  const element6 = (data, index) => createElement(data, index, COLOR.title);
  const element7 = (data, index) => (
    <View style={{ flexDirection: 'row', backgroundColor: COLOR.backgroundColor }}>
      {options.map((option) => (
        <CheckBox
          key={option.value}
          title={option.label}
          center
          checkedIcon="check-square-o"
          uncheckedIcon="square-o"
          checked={checkedItems.includes(option.value)}
          onPress={() => handleCheckboxToggle(option.value)}
          containerStyle={{ backgroundColor: COLOR.checkboxColor, borderWidth: 0 }}
          titleProps={{ style: { fontSize: 16, fontWeight: '400' } }}
        />
      ))}
    </View>
  );
  return (
    <SafeAreaView style={[appStyle.boxSysFeature, { marginLeft: 100, width: windowWidth - 480, height: windowHeight - 210 }]}>
      <View style={[appStyle.row, { justifyContent: 'space-between', }]}>
        <View style={appStyle.row}>
          <Text style={[appStyle.text, {}]}>Inactive support member list </Text>
          <Text style={[appStyle.normalText, {}]}>(1)</Text>
        </View>
        <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>See more</Text>
      </View>
      <View style={{ height: 250, }}>
        <ScrollView style={{}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <ScrollView horizontal style={{ marginTop: 16, }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
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
                                    : cellIndex === 6 ? element6(cellData, index)
                                      : cellIndex === 7 ? element7(cellData, index)
                                        : cellData}
                        />
                      ))}
                    </TableWrapper>
                  );
                })
              }
            </Table>
          </ScrollView>
        </ScrollView>
      </View>
      <View style={[appStyle.row, { justifyContent: 'space-between', marginTop: 50 }]}>
        <View style={appStyle.row}>
          <Text style={[appStyle.text, {}]}>Active support member list </Text>
          <Text style={[appStyle.normalText, {}]}>(14)</Text>
        </View>
        <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>See more</Text>
      </View>
      <View style={{ height: 250, marginBottom: 100 }}>
        <ScrollView style={{}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <ScrollView horizontal style={{ marginTop: 16, }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
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
                                    : cellIndex === 6 ? element6(cellData, index)
                                      : cellIndex === 7 ? element7(cellData, index)
                                        : cellData}
                        />
                      ))}
                    </TableWrapper>
                  );
                })
              }
            </Table>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default SupportMemberList

const styles = StyleSheet.create({

})
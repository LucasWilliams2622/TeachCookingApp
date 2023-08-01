import { SafeAreaView, ScrollView, StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../theme/appStyle'
import { COLOR } from '../../theme/color'
import InputSearch from '../../components/InputSearch'
import SelectMultiple from 'react-native-select-multiple'
import { CheckBox } from 'react-native-elements';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';
import myData from '../../../administration/son.data'
const DecentralizationOfSupport = () => {
  const tableHead = ["No", "ID", "Name", "Phone", "Email", "Activated", "Role", "Support"];
  const widthArr = [80, 120, 140, 120, 140, 120, 120, 420];
  let isCheckedArray = myData.supportDecentralization.map(obj => {
    return obj.support.map(item => {
      return item.mos ? item.mos.isChecked : item.link.isChecked;
    });
  });
console.log(isCheckedArray);  
  let array = myData.supportDecentralization.map(obj => [obj.no, obj.id, obj.name, obj.phone, obj.email, obj.activated, obj.role, isCheckedArray]);

  console.log(array);
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
    <ScrollView style={[appStyle.boxSysFeature, { marginLeft: 100, width: windowWidth - 450, height: windowHeight - 210 }]} showsVerticalScrollIndicator={false}>
      <InputSearch placeholder="Search" style={{ width: windowWidth - 100 }} />
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <ScrollView horizontal style={{ marginTop: 50, }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
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
    </ScrollView>
  )
}

export default DecentralizationOfSupport

const styles = StyleSheet.create({

})
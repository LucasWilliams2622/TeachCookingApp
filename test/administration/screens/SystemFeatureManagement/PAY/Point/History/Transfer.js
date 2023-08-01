import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useContext,useEffect } from 'react'
import { AppContext } from '../../../../../AppContext'
import { appStyle, windowHeight, windowWidth } from '../../../../../theme/appStyle'
import Header from '../../../../../components/Header'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { COLOR } from '../../../../../theme/color'
import { useNavigation } from '@react-navigation/native';
import myData from '../../../../../../administration/son.data'
const Transfer = () => {
  const tableHead = ["ID", "Date", "Quantity", "From","To", "Currency", "Ref", 'Status'];
  const widthArr = [90, 120, 120, 140,140, 100, 100, 130];

  let array = myData.SFM_PAY_Wallet_History.map(obj => [obj.id, obj.date, obj.quantity, obj.sender,obj.receiver, obj.currency, obj.ref, obj.status,]);
  const createElement = (data, index, color) => (
    <View style={{ alignItems: 'flex-start', paddingVertical: 22 }}>
      <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color, lineHeight: 25 }}>{data}</Text>
    </View>
  );

  const element1 = (data, index) => createElement(data, index, COLOR.title);
  const element2 = (data, index) => createElement(data, index, COLOR.title);
  const element3 = (data, index) => createElement(data, index, COLOR.title);
  const element4 = (data, index) => createElement(data, index, COLOR.title);
  const element5 = (data, index) => createElement(data, index, COLOR.title);
  const element6 = (data, index) => createElement(data, index, COLOR.title);
  const element7 = (data, index) => createElement(data, index, COLOR.title);

  useEffect(() => {
    
    return () => {
  
    }
  }, [])
  return (
    <SafeAreaView style={[appStyle.column, { width: windowWidth - 490, height: windowHeight - 220,  alignItems: "flex-start" ,marginTop:40}]}>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}  style={{marginBottom:300}}>
          <Table borderStyle={{}}>
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
    </SafeAreaView>
  )
}

export default Transfer

const styles = StyleSheet.create({})
import { SafeAreaView, StyleSheet, Text, ScrollView, View, Switch, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../../theme/appStyle'
import { COLOR } from '../../../../theme/color'
import ItemSearchAndButton from '../../../../components/ItemSearchAndButton'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';

const mStoreList = () => {
  const navigation = useNavigation();
  const tableHead = ["No", "ID", "Name", "Type", "Status", "Advertise", "Payment", "Used capacity", "Upgraded",];
  const widthArr = [70, 80, 135, 120, 120, 120, 120, 120, 110,];
  const asset = [
    {}, {}, {}, {}, {}, {}, {}, {},]
  let array = asset.map(obj => [1, "127362", "Dì Năm", "FnB", "Active", "Linked ", "Unlinked", "0 GB", "Upgraded"]);
  const createElement = (data, index, color) => (
    <View style={{ alignItems: 'flex-start', paddingVertical: 22 }}>
      <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color }}>{data}</Text>
    </View>
  );
  const element1 = (data, index) => createElement(data, index, COLOR.title);
  const element2 = (data, index) => createElement(data, index, COLOR.title);
  const element3 = (data, index) => createElement(data, index, COLOR.title);
  const element4 = (data, index) => createElement(data, index, COLOR.title);
  const element5 = (data, index) => createElement(data, index, COLOR.title);
  const element6 = (data, index) => createElement(data, index, COLOR.title);
  const element7 = (data, index) => createElement(data, index, COLOR.title);
  const element8 = (data, index) => createElement(data, index, COLOR.textMoney);


  return (
    <View style={{ marginTop: 26, width: windowWidth - 460 ,borderWidth:3}}>

      <ItemSearchAndButton />
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ marginBottom: 0 }}>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ marginTop: 40, marginBottom: 100 }}>
          <Table style={{}}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={[appStyle.tableHead, { borderWidth: 1, borderTopRightRadius: 12, borderTopLeftRadius: 12, paddingLeft: 12, borderColor: "#00000033" }]}
              textStyle={{ fontSize: 16, fontWeight: '700', fontFamily: 'Markazi Text' }}
            />
            {
              array.map((rowData, index) => {
                const isLastItem = index === array.length - 1;

                return (
                  <TableWrapper key={index.id} style={{ flexDirection: "row", borderBottomLeftRadius: isLastItem ? 12 : 0, borderBottomRightRadius: isLastItem ? 12 : 0, borderWidth: 0.5, borderColor: "#00000033", }}>
                    {rowData.map((cellData, cellIndex) => (
                      <Cell
                        style={{ borderWidth: 1, borderColor: "#00000019", paddingLeft: 12 }}
                        key={cellIndex}
                        width={widthArr[cellIndex]}
                        data={cellIndex === 1 ? element1(cellData, index)
                          : cellIndex === 2 ? element2(cellData, index)
                            : cellIndex === 3 ? element3(cellData, index)
                              : cellIndex === 4 ? element4(cellData, index)
                                : cellIndex === 5 ? element5(cellData, index)
                                  : cellIndex === 6 ? element6(cellData, index)
                                    : cellIndex === 7 ? element7(cellData, index)
                                      : cellIndex === 8 ? element8(cellData, index)

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

  )

}

export default mStoreList

const styles = StyleSheet.create({})
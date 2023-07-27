import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../../theme/appStyle'
import { COLOR } from '../../../../theme/color'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const ListDecentralization = () => {
  const [assigned, setAssigned] = useState(false)
  const tableHead = ["No", "ID", "Name", "Phone", "Email", "Activated", "Role", "Number of upgrade stores", "Assigning permissions",];
  const widthArr = [70, 80, 135, 120, 120, 120, 120, 120, 220,];
  const asset = [
    {}, {}, {}, {}, {}, {}, {}, {},]
  let array = asset.map(obj => [1, "127362", "Nguyễn Văn An", "0987654321", "abc@gmail.com", true, "User", "0", "Upgraded"]);
  const onAssignPermission = () => {
    setAssigned(!assigned)
  }
  const createElement = (data, index, color) => (
    <View style={{ alignItems: 'flex-start', paddingVertical: 22 }}>
      <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color }}>{data}</Text>
    </View>
  );
  const element1 = (data, index) => createElement(data, index, COLOR.title);
  const element2 = (data, index) => createElement(data, index, COLOR.title);
  const element3 = (data, index) => createElement(data, index, COLOR.title);
  const element4 = (data, index) => createElement(data, index, COLOR.title);
  const element5 = (data, index) => (
    <View style={{ alignItems: 'center', paddingVertical: 22, }}>
      <Image source={require('../../../../assets/icons/greenCircle.png')} />
    </View>
  );

  const element6 = (data, index) => createElement(data, index, COLOR.title);
  const element7 = (data, index) => createElement(data, index, COLOR.title);
  const element8 = (data, index) => (
    <>
      {
        assigned ? (
          <Text style={[appStyle.text, { fontSize: 14, color: COLOR.textMoney }]}>Assigned permissions</Text>


        ) : (<TouchableOpacity style={[appStyle.button, { width: 200, paddingHorizontal: 8 }]} onPress={() => { onAssignPermission() }}>
          <Text style={[appStyle.titleButton, { fontSize: 10 }]}>Assigning permissions</Text>
        </TouchableOpacity>)
      }
    </>


  );
  return (
    <View style={{ width: windowWidth - 480, marginLeft: 100, height: windowHeight - 210 }}>
      <View style={[appStyle.row, { width: windowWidth - 480, justifyContent: 'space-between' }]}>
        <Text style={[appStyle.text, {}]}>Not assigning permissions</Text>
        <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>See more</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ marginBottom: 0, height: 300 }}>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ marginTop: 34, }}>
          <Table style={{ marginRight: 100 }}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={[appStyle.tableHead, { paddingHorizontal: 12, paddingVertical: 18, paddingLeft: 24, borderWidth: 1, borderTopRightRadius: 12, borderTopLeftRadius: 12, borderColor: "#00000033", }]}
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

      <View style={[appStyle.row, { width: windowWidth - 480, justifyContent: 'space-between', marginTop: 60 }]}>
        <Text style={[appStyle.text, {}]}>Assigned permissions</Text>
        <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>See more</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ marginBottom: 0, height: 300 }}>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ marginTop: 34, }}>
          <Table style={{ marginRight: 100 }}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={[appStyle.tableHead, { paddingHorizontal: 12, paddingVertical: 18, paddingLeft: 24, borderWidth: 1, borderTopRightRadius: 12, borderTopLeftRadius: 12, borderColor: "#00000033", }]}
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

export default ListDecentralization

const styles = StyleSheet.create({})
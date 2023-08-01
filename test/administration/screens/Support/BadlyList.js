import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../theme/appStyle'
import { COLOR } from '../../theme/color'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';
import myData from '../../../administration/son.data'
const BadlyList = () => {
    const navigation = useNavigation();
    const tableHead = ["No", "ID Chatbox", "App", "Support", "Support for", "Rate", "Detail", "Date"];
    const widthArr = [60, 120, 120, 160, 160, 100, 240, 120];
    let array = myData.supportBadReport.map(obj => [obj.no,obj.idChatBox, obj.app, obj.support,obj.supportFor,obj.rate,obj.detail,obj.date]);
    const createElement = (data, index, color) => (
        <View style={{ alignItems: 'flex-start', paddingVertical: 12 }}>
            <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color, lineHeight: 24, }}>{data}</Text>
        </View>
    );
    const element1 = (data, index) => createElement(data, index, COLOR.title);
    const element2 = (data, index) => createElement(data, index, COLOR.title);
    const element3 = (data, index) => createElement(data, index, COLOR.titleBreadCrumb);
    const element4 = (data, index) => createElement(data, index, COLOR.title);
    const element5 = (data, index) => createElement(data, index, COLOR.title);
    const element6 = (data, index) => createElement(data, index, COLOR.title);
    const element7 = (data, index) => createElement(data, index, COLOR.title);

    const element8 = (data, index) => (
        <View style={{ alignItems: 'center', paddingVertical: 22, }}>
            <Text style={[appStyle.text, { color: data ? COLOR.bgSelectJoined : COLOR.textError }]}>{data ? "Receive" : "Cancel"}</Text>
        </View>
    );

    useEffect(() => {

        return () => {
        }
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={[appStyle.boxSysFeature, { marginTop: 26, height: windowHeight - 240, width: windowWidth - 480, marginLeft: 80, }]}>
            <ScrollView horizontal style={{}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
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

    )
}

export default BadlyList

const styles = StyleSheet.create({})
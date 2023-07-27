import { SafeAreaView, StyleSheet, Text, ScrollView, View, Switch, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowHeight, windowWidth } from '../../../../theme/appStyle'
import { COLOR } from '../../../../theme/color'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';

const ListUpgraded = () => {

    const navigation = useNavigation();
    const tableHead = ["No", "ID", "Name", "Type", "Status", "Advertise", "Payment", "Used capacity", "Upgraded", "Upgrade account"];
    const widthArr = [90, 90, 135, 120, 120, 120, 120, 120, 110, 200];
    const asset = [
        {}, {}, {}, {}, {}, {}, {}, {},]
    let array = asset.map(obj => [1, "127362", "Dì Năm", "FnB", "Active", "Linked", "Unlinked", "0 GB", "Upgraded", "Nguyễn Văn An 0987654321t"]);
    const createElement = (data, index, color) => (
        <View style={{ alignItems: 'flex-start', paddingVertical: 22 }}>
            <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color }}>{data}</Text>
        </View>
    );
    const element1 = (data, index) => createElement(data, index, COLOR.titleBreadCrumb);
    const element2 = (data, index) => createElement(data, index, COLOR.title);
    const element3 = (data, index) => createElement(data, index, COLOR.title);
    const element4 = (data, index) => createElement(data, index, COLOR.title);
    const element5 = (data, index) => createElement(data, index, COLOR.title);
    const element6 = (data, index) => createElement(data, index, COLOR.title);
    const element7 = (data, index) => createElement(data, index, COLOR.title);
    const element8 = (data, index) => createElement(data, index, COLOR.textMoney);
    const element9 = (data, index) => (
        <View style={{ alignItems: 'flex-start', paddingVertical: 22, }}>
            <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color: COLOR.title }}>{data}</Text>
        </View>
    );
    const CustomCell = ({ cellData, cellIndex }) => {
        const phoneNumber = String(cellData).split(" ").pop();
        const nameUser = String(cellData).replace(phoneNumber, "").trim();

        const isLastItem = cellIndex === array.length - 1;
        console.log(cellIndex);
        return (
            <TableWrapper style={{ height: 70, paddingLeft: 12, paddingVertical: 12, alignItems: 'flex-start', borderBottomLeftRadius: isLastItem ? 12 : 0, borderBottomRightRadius: isLastItem ? 12 : 0, borderWidth: 0.5, borderColor: "#00000033", }}>
                <View style={{ alignItems: 'flex-start', }}>
                    {
                        cellData.length < 10 ?
                            cellIndex === 2 ? (<Text style={[appStyle.text, { color: COLOR.text }]}>{nameUser} {phoneNumber}</Text>) :
                                (<Text style={[appStyle.text, { color: cellIndex == 1 ? COLOR.textBlue : cellIndex == 8 ? COLOR.textMoney : COLOR.text }]}>{phoneNumber}</Text>) :
                            (
                                <>
                                    <Text style={appStyle.text}>{nameUser}</Text>
                                    <Text style={[appStyle.text, { color: COLOR.textBlue, marginTop: 8 }]}>{phoneNumber}</Text>
                                </>
                            )
                    }
                </View>
            </TableWrapper>
        );
    };


    return (
        <View style={{ width: windowWidth - 460, marginLeft: 100, }}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ marginBottom: 0 }}>
                <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ marginBottom: 80 }}>
                    <Table style={{}}>
                        <Row
                            data={tableHead}
                            widthArr={widthArr}
                            style={[appStyle.tableHead, { borderWidth: 1, borderTopRightRadius: 12, borderTopLeftRadius: 12, paddingLeft: 24, borderColor: "#00000033" }]}
                            textStyle={{ fontSize: 16, fontWeight: '700', fontFamily: 'Markazi Text' }}
                        />
                        {array.map((rowData, index) => (

                            <Row
                                widthArr={widthArr}
                                style={{ borderWidth: 1, borderColor: "#00000019", paddingLeft: 12, }}
                                key={index}
                                data={rowData.map((cellData, cellIndex) => (

                                    <CustomCell cellData={cellData} cellIndex={cellIndex} key={cellIndex} />
                                ))}
                            />
                        ))}
                    </Table>
                </ScrollView>
            </ScrollView>
        </View>

    )
}

export default ListUpgraded

const styles = StyleSheet.create({

})
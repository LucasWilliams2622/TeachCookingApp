import React, { useState, useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Switch } from 'react-native'
import { appStyle } from '../../theme/appStyle'
import Header from '../../components/Header'
import { COLOR } from '../../theme/color'
import ItemDrawer from "../../components/ItemDrawer";
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppContext'
import AddButton from '../../components/AddButton'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const ListContent = () => {
    const navigation = useNavigation();
    const { showDrawer, setShowDrawer } = useContext(AppContext);
    const tableHead = ["STT", "ID", "Title", "Content", "Position", "Product", "Created date"];
    const widthArr = [100, 100, 100, showDrawer ? 200 : 300, 100, 100, 200];
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
    let array = asset.map(obj => [obj.id, "03847363", "Thông báo", "Chương trình giảm giá sốc...", "App", "MOS", "12/06/2023 09:20 am"]);
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

    return (
        <SafeAreaView style={appStyle.container}>
            <Header />
            <View style={appStyle.row}>
                <View>
                    {
                        showDrawer ? (<ItemDrawer />) : (<></>)
                    }
                </View>
                <View style={[styles.main, { top: showDrawer ? -30 : 0, width: showDrawer ? '70%' : '95%' }]}>
                    <View style={styles.breadCrumb}>
                        <View style={appStyle.row}>
                            <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                                <Image style={appStyle.icon} source={require('../../assets/icons/Left.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[appStyle.titleBreadCrumb, { color: COLOR.titleBreadCrumbManagement }]}>Content Management/</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[appStyle.titleBreadCrumb, {}]}>List</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <AddButton onPress={()=>{}}/>
                    <ScrollView vertical style={{ marginTop: 26, }}>
                        <Table borderStyle={{}}>
                            <Row
                                data={tableHead}
                                widthArr={widthArr}
                                style={appStyle.tableHead}
                                textStyle={{ fontSize: 13, fontWeight: 'bold', marginLeft: 10, }}
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
                                                                    : cellIndex === 6 ? element6(cellData, index)


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

export default ListContent

const styles = StyleSheet.create({
    main: {
        marginVertical: 30,
        marginHorizontal: 36,
        height: 700,

    },
    mainContent: {
        marginTop: 52,
        flexDirection: 'row',
    },
    barOption: {
        flexDirection: 'column',
        width: '20%',
    },
    breadCrumb: {
        flexDirection: "row",
        alignItems: 'center',
    },
    itemOption: {
        backgroundColor: COLOR.bg,
        paddingVertical: 14,
        paddingHorizontal: 16,
    },

})
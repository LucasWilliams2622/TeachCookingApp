import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import React, { useContext, useEffect,useState } from 'react'
import { appStyle, windowWidth, windowHeight } from '../../theme/appStyle'
import { COLOR } from '../../theme/color'
import { Dropdown } from 'react-native-element-dropdown';
import { AppContext } from '../../AppContext'
import ButtonPrimary from '../../components/ButtonPrimary'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';

const optionsApp = [
    { label: 'MOS', value: 'mos' },
    { label: 'LINK', value: 'link' },
    { label: 'LAND', value: 'land' },
    { label: 'PAY', value: 'pay' },

];
const SupportList = () => {
    const { currentDay } = useContext(AppContext)
    const [valueApp, setValueApp] = useState(null);
    const [isFocusApp, setIsFocusApp] = useState(true)

    const tableHead = ["No", "ID Chatbox", "App", "Support", "Support for", "Date"];
    const widthArr = [80, 140, 140, 140, 140, 180];

    const asset = [{}, {}, {}, {}, {}]
    let array = asset.map(obj => ["1", "127362", "MOS", "Nguyễn Văn An 0987654321", "Trần Ánh 0987654321", "15/06/2023 09:20 am",]);
    const createElement = (data, index, color) => (
        <View style={{ alignItems: 'flex-start', paddingVertical: 22 }}>
            <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color, lineHeight: 30 }}>{data}</Text>
        </View>
    );

    const element1 = (data, index) => createElement(data, index, COLOR.title);
    const element2 = (data, index) => createElement(data, index, COLOR.title);
    const element3 = (data, index) => createElement(data, index, COLOR.titleBreadCrumb);
    const element4 = (data, index) => createElement(data, index, COLOR.title);
    const element5 = (data, index) => createElement(data, index, COLOR.title);
   
  
    const [isDateFromVisible, setIsDateFromVisible] = useState(false);
    const [selectedDateFrom, setSelectedDateFrom] = useState('');
    const [isDateToVisible, setIsDateToVisible] = useState(false)
    const [selectedDateTo, setSelectedDateTo] = useState('')
    const [showFilter, setShowFilter] = useState(true)
    const showDateFromPicker = () => {
        setIsDateFromVisible(true);
    };
    const hideDateFromPicker = () => {
        setIsDateFromVisible(false);
    };
    const handleConfirmFrom = (date) => {
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });
        setSelectedDateFrom(formattedDate);
        hideDateFromPicker();
    };


    const showDateToPicker = () => {
        setIsDateToVisible(true);
    };
    const hideDateToPicker = () => {
        setIsDateToVisible(false);
    };
    const handleConfirmTo = (date) => {
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });
        setSelectedDateTo(formattedDate);
        hideDateToPicker();
    };

    const handleShowFilter = () => {
        setShowFilter(!showFilter)
    }
    const renderLabel = () => {
        if (valueApp || isFocusApp) {
            return (
                <Text style={[styles.label, isFocusApp && { color: COLOR.primary }]}>
                </Text>
            );
        }
        return null;
    };
useEffect(() => {
  
  return () => {
    
  }
}, [])

    return (
        <ScrollView style={[appStyle.boxSysFeature, { width: windowWidth - 420, height: windowHeight - 210, marginLeft: 40, }]} showsVerticalScrollIndicator={false}>
            <View style={styles.tableFilter}>
                <View style={[appStyle.row, { justifyContent: 'space-between' }]}>
                    <View style={appStyle.row}>
                        <Image style={appStyle.icon} source={require('../../assets/icons/Filter.png')} />
                        <Text style={[appStyle.text, { fontWeight: '700', marginLeft: 8 }]}>FILTER</Text>
                    </View>
                    <TouchableOpacity onPress={() => { handleShowFilter() }}>
                        <Text style={[appStyle.text, { fontSize: 14, color: COLOR.titleLabel }]}>Hide</Text>

                    </TouchableOpacity>
                </View>
                {showFilter ? (
                    <>
                        <View style={[appStyle.row, { marginTop: 44, width: windowWidth - 470, }]}>
                            <TouchableOpacity style={appStyle.row} onPress={showDateFromPicker}>
                                <Text style={[appStyle.text, { fontSize: 14 }]}>From</Text>
                                <View style={[appStyle.row, { backgroundColor: COLOR.bg, paddingVertical: 8, paddingHorizontal: 14, borderRadius: 32, marginLeft: 25, justifyContent: 'space-between', width: 200 }]}>
                                    <Text style={[appStyle.text, { fontSize: 14 }]}>{selectedDateFrom ? selectedDateFrom : currentDay}</Text>
                                    <Image style={appStyle.icon} source={require('../../assets/icons/Calender.png')} />
                                </View>
                                <DateTimePickerModal
                                    isVisible={isDateFromVisible}
                                    mode="date"
                                    onConfirm={handleConfirmFrom}
                                    onCancel={hideDateFromPicker}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={appStyle.row} onPress={showDateToPicker}>
                                <Text style={[appStyle.text, { fontSize: 14, marginLeft: 18 }]}>to</Text>
                                <View style={[appStyle.row, { backgroundColor: COLOR.bg, paddingVertical: 8, paddingHorizontal: 14, borderRadius: 32, marginLeft: 25, justifyContent: 'space-between', width: 200 }]}>
                                    <Text style={[appStyle.text, { fontSize: 14 }]}>{selectedDateTo ? selectedDateTo : currentDay}</Text>
                                    <Image style={appStyle.icon} source={require('../../assets/icons/Calender.png')} />
                                </View>
                                <DateTimePickerModal
                                    isVisible={isDateToVisible}
                                    mode="date"
                                    onConfirm={handleConfirmTo}
                                    onCancel={hideDateToPicker}
                                />
                            </TouchableOpacity>
                            <View style={appStyle.row}>
                                <Text style={[appStyle.text, { fontSize: 14, marginLeft: 18 }]}>App</Text>
                                <View style={styles.container}>
                                    {renderLabel()}
                                    <Dropdown
                                        style={[appStyle.dropdown, { marginLeft: 18, width: 200, }, isFocusApp && { borderColor: COLOR.primary }]}
                                        placeholderStyle={appStyle.placeholderStyle}
                                        selectedTextStyle={appStyle.selectedTextStyle}
                                        inputSearchStyle={appStyle.inputSearchStyle}
                                        iconStyle={appStyle.iconStyle}
                                        data={optionsApp}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocusApp ? 'Role' : '...'}
                                        searchPlaceholder="Search..."
                                        value={valueApp}
                                        onFocus={() => setIsFocusApp(true)}
                                        onBlur={() => setIsFocusApp(false)}
                                        onChange={item => {
                                            setValueApp(item.valueApp);
                                            setIsFocusApp(false);
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[appStyle.row, { justifyContent: 'space-between', marginTop: 60 }]}>
                            <View></View>
                            <View style={{ width: 160 }}>
                                <ButtonPrimary title="Apply filter" style={{ paddingHorizontal: 14 }} />
                            </View>
                        </View>
                    </>
                ) : (<></>)}
            </View>
            <ScrollView style={{ width: windowWidth - 420, marginTop: 60, marginBottom: 30 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Table style={{ borderRadius: 12, overflow: 'hidden', }}>
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

export default SupportList

const styles = StyleSheet.create({
    tableFilter: {
        padding: 20,
        backgroundColor: COLOR.bgTableFilter,
        borderRadius: 8,

    },
    container: {
        width: "25%",
    },

    headerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth - 450,
    },
    boxDetailInfo: {
        marginTop: 24,
        flexDirection: 'row',
        marginBottom: 300,
        width: windowWidth - 450
    },
})
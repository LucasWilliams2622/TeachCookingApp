import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView, } from 'react-native'
import React, { useState, useContext } from 'react'
import { appStyle, windowWidth } from '../theme/appStyle'
import Header from '../components/Header'
import { COLOR } from '../theme/color'
import { Dropdown } from 'react-native-element-dropdown';
import ButtonPrimary from '../components/ButtonPrimary'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import FastImage from "react-native-fast-image";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ItemDrawer from '../components/ItemDrawer'
import { AppContext } from '../AppContext'
import myData from '../son.data'
const dataCountry = [
  { labelCountry: 'Viet Nam', valueCountry: '1' },
  { labelCountry: 'The USA', valueCountry: '2' },
  { labelCountry: 'Thai', valueCountry: '3' },
  { labelCountry: 'Singapore', valueCountry: '4' },

];
const dataCity = [
  { labelCity: 'Texas', valueCity: '1' },
  { labelCity: 'New Mexico', valueCity: '2' },
  { labelCity: 'Ho Chi Minh', valueCity: '3' },
  { labelCity: 'Singapore', valueCity: '4' },

];
const dataDistrict = [
  { labelDistrict: '12 District', valueDistrict: '1' },
  { labelDistrict: '1 District', valueDistrict: '2' },
  { labelDistrict: '2 District', valueDistrict: '3' },
  { labelDistrict: '3 District', valueDistrict: '4' },

];

const SearchUser = (props) => {
  const { navigation } = props;
  const { showDrawer, setShowDrawer, currentDay } = useContext(AppContext);
  const [valueCountry, setValueCountry] = useState(null);
  const [isFocusCountry, setIsFocusCountry] = useState(false);

  const [valueCity, setValueCity] = useState(null)
  const [isFocusCity, setIsFocusCity] = useState(false)

  const [valueDistrict, setValueDistrict] = useState(null)
  const [isFocusDistrict, setIsFocusDistrict] = useState(false)

  const [isDateFromVisible, setIsDateFromVisible] = useState(false);
  const [isDateToVisible, setIsDateToVisible] = useState(false)

  const [selectedDateFrom, setSelectedDateFrom] = useState('');
  const [selectedDateTo, setSelectedDateTo] = useState('')

  const [showFilterCountry, setShowFilterCountry] = useState(true)
  const [showFilterDate, setShowFilterDate] = useState(true)

  const tableHead = ["STT", "Barcode", "Refer User", "Fullname", "Account", "Phone", "Activated", "Address", "Country", "Date login"];
  const widthArr = [70, 100, 100, 100, 100, 100, 100, 200, 100, 100];
  let array = myData.UMListUser.map(obj => ["1", "1122QM", "12654 Mr A", "Van An", "abc @gmail", "0987654321", true, "abc, Son Ky Ward, Tan Phú District, Ho Chi Minh City", "Viet Nam", "30 days ago"]);

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

  const onShowFilterCountry = () => {
    console.log(array);
    if (showFilterCountry) {
      setShowFilterCountry(!showFilterCountry)
    } else {
      setShowFilterCountry(!showFilterCountry)

    }
  }
  const onShowFilterDate = () => {
    if (showFilterDate) {
      setShowFilterDate(!showFilterDate)
    } else {
      setShowFilterDate(!showFilterDate)

    }
  }
  const renderLabel = () => {
    if (valueCountry || isFocusCountry) {
      return (
        <Text style={[styles.label, isFocusCountry && { color: COLOR.primary }]}>
        </Text>
      );
    }
    return null;
  };
  const createElement = (data, index, isImage = false) => (
    <View style={{ alignItems: isImage ? 'center' : 'flex-start', paddingVertical: 22 }}>
      {isImage ? (
        <Image source={require('../assets/icons/greenCircle.png')} />
      ) : (
        <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', color: COLOR.title }}>{data}</Text>
      )}
    </View>
  );

  const element1 = (data, index) => createElement(data, index);
  const element2 = (data, index) => createElement(data, index);
  const element3 = (data, index) => createElement(data, index);
  const element4 = (data, index) => createElement(data, index);
  const element5 = (data, index) => createElement(data, index);
  const element6 = (data, index) => createElement(data, index, true);
  const element7 = (data, index) => createElement(data, index);
  const element8 = (data, index) => createElement(data, index);
  const element9 = (data, index) => createElement(data, index);

  return (
    <SafeAreaView style={appStyle.container}>
      <Header />
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={[appStyle.row, {}]}>
          <View>
            {
              showDrawer ? (<ItemDrawer />) : (<></>)
            }
          </View>
          <View style={styles.main}>
            <View style={styles.breadCrumb}>
              <View style={appStyle.row}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                  <Image style={appStyle.icon} source={require('../assets/icons/Left.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[appStyle.titleBreadCrumb, { color: COLOR.titleBreadCrumbManagement }]}>User Management/</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[appStyle.titleBreadCrumb, {}]}>Search User</Text>
                </TouchableOpacity>
              </View>
            </View>
            {showFilterCountry ?
              (<View style={[styles.boxFilter, { width: showDrawer ? windowWidth - 360 : windowWidth - 40, }]}>
                <View style={[appStyle.row, { justifyContent: 'space-between' }]}>
                  <View style={appStyle.row}>
                    <Image style={[appStyle.icon, { marginRight: 9, }]} source={require('../assets/icons/Filter.png')} />
                    <Text style={appStyle.textCapital}>FILTER COUNTRY</Text>
                  </View>
                  <TouchableOpacity onPress={() => { onShowFilterCountry() }}>
                    <Text style={[appStyle.text, { color: COLOR.primary }]}>Hide</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <View style={styles.boxSortALot}>
                    <View style={styles.boxSort}>
                      <Text style={appStyle.text}>Country</Text>
                      <View style={styles.container}>
                        {renderLabel()}
                        <Dropdown
                          style={[appStyle.dropdown, isFocusCountry && { borderColor: COLOR.primary }]}
                          placeholderStyle={appStyle.placeholderStyle}
                          selectedTextStyle={appStyle.selectedTextStyle}
                          inputSearchStyle={appStyle.inputSearchStyle}
                          iconStyle={appStyle.iconStyle}
                          data={dataCountry}
                          search
                          maxHeight={300}
                          labelField="labelCountry"
                          valueField="valueCountry"
                          placeholder={!isFocusCountry ? 'Country' : '...'}
                          searchPlaceholder="Search..."
                          value={valueCountry}
                          onFocus={() => setIsFocusCountry(true)}
                          onBlur={() => setIsFocusCountry(false)}
                          onChange={item => {
                            setValueCountry(item.valueCountry);
                            setIsFocusCountry(false);
                          }}

                        />
                      </View>
                    </View>
                    <View style={[styles.boxSort, { marginLeft: 34 }]}>
                      <Text style={appStyle.text}>City</Text>
                      <View style={styles.container}>
                        {renderLabel()}
                        <Dropdown
                          style={[appStyle.dropdown, isFocusCity && { borderColor: COLOR.primary }]}
                          placeholderStyle={appStyle.placeholderStyle}
                          selectedTextStyle={appStyle.selectedTextStyle}
                          inputSearchStyle={appStyle.inputSearchStyle}
                          iconStyle={appStyle.iconStyle}
                          data={dataCity}
                          search
                          maxHeight={300}
                          labelField="labelCity"
                          valueField="valueCity"
                          placeholder={!isFocusCity ? 'Province/City' : '...'}
                          searchPlaceholder="Search city ..."
                          value={valueCity}
                          onFocus={() => setIsFocusCity(true)}
                          onBlur={() => setIsFocusCity(false)}
                          onChange={item => {
                            setValueCity(item.valueCity);
                            setIsFocusCity(false);
                          }}
                        // renderLeftIcon={() => (
                        //   <Image style={[appStyle.icon, { marginRight: 9, }]} source={require('../assets/icons/TriangleArrow.png')} />
                        // )}
                        />
                      </View>
                    </View>
                    <View style={[styles.boxSort, { marginLeft: 34 }]}>
                      <Text style={appStyle.text}>District</Text>
                      <View style={styles.container}>
                        {renderLabel()}
                        <Dropdown
                          style={[appStyle.dropdown, isFocusDistrict && { borderColor: COLOR.primary }]}
                          placeholderStyle={appStyle.placeholderStyle}
                          selectedTextStyle={appStyle.selectedTextStyle}
                          inputSearchStyle={appStyle.inputSearchStyle}
                          iconStyle={appStyle.iconStyle}
                          data={dataDistrict}
                          search
                          maxHeight={300}
                          labelField="labelDistrict"
                          valueField="valueDistrict"
                          placeholder={!isFocusDistrict ? 'District' : '...'}

                          searchPlaceholder="Search district ..."
                          value={valueDistrict}
                          onFocus={() => setIsFocusDistrict(true)}
                          onBlur={() => setIsFocusDistrict(false)}
                          onChange={item => {
                            setValueDistrict(item.valueDistrict);
                            setIsFocusDistrict(false);
                          }}
                        // renderLeftIcon={() => (
                        //   <Image style={[appStyle.icon, { marginRight: 9, }]} source={require('../assets/icons/TriangleArrow.png')} />
                        // )}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[appStyle.row, { justifyContent: 'space-between', marginTop: 35 }]}>
                    <View />
                    <ButtonPrimary title={"Apply filter"} onPress={() => { { } }} />
                  </View>
                </View>
              </View>
              ) :
              (
                <View style={[styles.boxFilter, { width: showDrawer ? windowWidth - 360 : windowWidth - 40, }]}>
                  <View style={[appStyle.row, { justifyContent: 'space-between' }]}>
                    <View style={appStyle.row}>
                      <Image style={[appStyle.icon, { marginRight: 9, }]} source={require('../assets/icons/Filter.png')} />
                      <Text style={appStyle.textCapital}>FILTER COUNTRY</Text>
                    </View>
                    <TouchableOpacity onPress={() => { { onShowFilterCountry() } }}>
                      <Text style={[appStyle.text, { color: COLOR.primary }]}>
                        Show
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}


            {
              showFilterDate ?
                (<View style={[styles.boxFilter, { width: showDrawer ? windowWidth - 360 : windowWidth - 40, }]}>
                  <View style={[appStyle.row, { justifyContent: 'space-between' }]}>
                    <View style={appStyle.row}>
                      <Image style={[appStyle.icon, { marginRight: 9, }]} source={require('../assets/icons/Filter.png')} />
                      <Text style={appStyle.textCapital}>FILTER DATE</Text>
                    </View>
                    <TouchableOpacity onPress={() => { onShowFilterDate() }}>
                      <Text style={[appStyle.text, { color: COLOR.primary }]}>Hide</Text>
                    </TouchableOpacity>
                  </View>
                  <View>


                    <View style={[appStyle.row, { marginTop: 50, marginBottom: 11 }]}>
                      <View style={styles.boxSort}>
                        <Text style={appStyle.text}>From</Text>
                        <TouchableOpacity style={styles.boxPickDate} onPress={showDateFromPicker}>
                          <Text style={{ backgroundColor: COLOR.black, paddingLeft: 10 }} >{selectedDateFrom == "" ? "Pick a date" : selectedDateFrom}</Text>
                          <Image style={[appStyle.icon, {}]} source={require('../assets/icons/Calender.png')} />
                          <DateTimePickerModal
                            isVisible={isDateFromVisible}
                            mode="date"
                            onConfirm={handleConfirmFrom}
                            onCancel={hideDateFromPicker}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={[styles.boxSort, { marginLeft: 42 }]}>
                        <Text style={appStyle.text}>to</Text>
                        <TouchableOpacity style={styles.boxPickDate} onPress={showDateToPicker}>
                          <Text style={{ backgroundColor: COLOR.black, paddingLeft: 10 }} >{selectedDateTo == "" ? "Pick a date" : selectedDateTo}</Text>
                          <Image style={[appStyle.icon, {}]} source={require('../assets/icons/Calender.png')} />
                          <DateTimePickerModal
                            isVisible={isDateToVisible}
                            mode="date"
                            onConfirm={handleConfirmTo}
                            onCancel={hideDateToPicker}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={[appStyle.row, { justifyContent: 'space-between', marginTop: 35 }]}>
                      <View />
                      <ButtonPrimary title={"Apply filter"} onPress={() => { { } }} />
                    </View>

                  </View>
                </View>
                )
                :
                (<View style={[styles.boxFilter, { width: showDrawer ? windowWidth - 360 : windowWidth - 40, }]}>
                  <View style={[appStyle.row, { justifyContent: 'space-between' }]}>
                    <View style={appStyle.row}>
                      <Image style={[appStyle.icon, { marginRight: 9, }]} source={require('../assets/icons/Filter.png')} />
                      <Text style={appStyle.textCapital}>FILTER DATE</Text>
                    </View>
                    <TouchableOpacity onPress={() => { { onShowFilterDate() } }}>
                      <Text style={[appStyle.text, { color: COLOR.primary }]}>
                        Show
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>)
            }
            <View style={[styles.boxSearch, { justifyContent: 'flex-start', flexDirection: 'row', width: windowWidth - 360 }]}>
              <View style={styles.textInput}>
                <TextInput style={styles.searchInput} placeholder='Search by member...' />
              </View>
              <TouchableOpacity style={[styles.buttonSearch, { alignItems: 'center', justifyContent: "center" }]}>
                <Text style={[appStyle.titleButton, { fontSize: 14, width: 100, left: 30 }]}>Search</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{ width: windowWidth - 360 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
              <ScrollView horizontal style={{ marginTop: 26, }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <Table borderStyle={{}}>
                  <Row
                    data={tableHead}
                    widthArr={widthArr}
                    style={styles.tableHead}
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
                                      : cellIndex === 6 ? element6(cellData, index)
                                        : cellIndex === 7 ? element7(cellData, index)
                                          : cellIndex === 8 ? element8(cellData, index)
                                            : cellIndex === 9 ? element9(cellData, index)

                                              : cellData}
                          // textStyle={{fontSize:13, padding:10, paddingTop:15, paddingBottom:15}}
                          />
                        ))}
                      </TableWrapper>
                    ))
                  }
                </Table>
              </ScrollView>
            </ScrollView>
          </View>
        </View>
      </ScrollView >
    </SafeAreaView>

  )
}

export default SearchUser

const styles = StyleSheet.create({
  main: {
    marginVertical: 42,
    marginHorizontal: 22,
  },
  breadCrumb: {
    flexDirection: "row",
    alignItems: 'center',

  },
  boxFilter: {
    backgroundColor: COLOR.secondary,
    marginVertical: 18,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 8,

  },

  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,

  },
  boxSortALot: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',

  },
  boxSort: {
    flexDirection: "row",
    alignItems: 'center',


  },
  boxPickDate: {
    backgroundColor: COLOR.bg,
    height: 41,
    width: 262,
    borderRadius: 32,
    marginLeft: 85,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10

  },
  boxSearch: {
    width: "100%",

  },
  buttonSearch: {
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
    backgroundColor: COLOR.bgButton,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: "center",
    width: '15%'

  },
  textInput: {
    backgroundColor: COLOR.secondary,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    width: '85%',
    paddingLeft: 20,
  },
  tableHead: {
    height: 58,
    width: '100%',
    backgroundColor: COLOR.secondary,
  },
  searchInput: {
    color: COLOR.title,
    fontWeight: '700'
  },

  container: {
    width: "25%",
  },
})
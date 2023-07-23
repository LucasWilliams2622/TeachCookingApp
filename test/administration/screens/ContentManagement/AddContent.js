import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import ItemDrawer from "../../components/ItemDrawer";
import { AppContext } from '../../AppContext'
import { appStyle } from '../../theme/appStyle'
import Header from '../../components/Header'
import ButtonPrimary from '../../components/ButtonPrimary'
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../../theme/color'
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from 'react-native-virtualized-view';
const dataPosition = [
    { labelPosition: 'App', valuePosition: '1' },
    { labelPosition: 'Web', valuePosition: '2' },
];

const dataProduct = [
    { labelProduct: 'ISMOS', valueProduct: '1' },
    { labelProduct: 'ISLINK', valueProduct: '2' },
    { labelProduct: 'ISMOVE', valueProduct: '3' },
    { labelProduct: 'ISLAND', valueProduct: '4' },
    { labelProduct: 'PAY', valueProduct: '5' },
];
const AddContent = () => {
    const navigation = useNavigation();
    const { showDrawer, setShowDrawer } = useContext(AppContext);
    const [valuePosition, setValuePosition] = useState(null)
    const [isFocusPosition, setIsFocusPosition] = useState(false)
    const [valueProduct, setValueProduct] = useState(null)
    const [isFocusProduct, setIsFocusProduct] = useState(false)
    const renderLabel = () => {
        if (valuePosition || isFocusPosition) {
            return (
                <Text style={[styles.label, isFocusPosition && { color: COLOR.primary }]}>
                </Text>
            );
        }
        return null;
    };
    return (
        <SafeAreaView style={appStyle.container}>
            <Header />
            <View style={appStyle.row}>
                <View>
                    {
                        showDrawer ? (<ItemDrawer />) : (<></>)
                    }
                </View>

                <View style={[appStyle.column, { top: showDrawer ? -10 : 0, flex: 1, alignItems: 'flex-start', marginVertical: 32, marginHorizontal: 20, }]}>
                    <View style={[appStyle.row, { alignItems: 'center', marginBottom: 30 }]}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <Image style={appStyle.bigIcon} source={require('../../assets/icons/Left.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={appStyle.text}>Content Management/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[appStyle.text, { color: COLOR.titleBreadCrumb }]}>List/</Text>
                        </TouchableOpacity>
                        <Text style={[appStyle.text, { color: COLOR.titleBreadCrumb }]}>Add</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ alignSelf: 'center', marginBottom: 300, height: '85%', paddingHorizontal: "20%" }}>
                        <View style={[appStyle.column, { alignSelf: 'center', }]}>
                            <View style={[appStyle.column, { alignItems: 'flex-start', }]}>
                                <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>Title</Text>
                                <View style={[appStyle.textInput, { marginTop: 7 }]}>
                                    <TextInput style={{ backgroundColor: COLOR.black, width: 500 }} placeholder='Enter new title' />
                                </View>
                            </View>
                            <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 36, }]}>
                                <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>Content</Text>
                                <View style={[appStyle.textInput, { marginTop: 7, }]}>
                                    <TextInput style={{ backgroundColor: COLOR.black, width: 500, height: 300, textAlign: 'left', paddingLeft: 12, paddingVertical: 20, textAlignVertical: "top" }} placeholderTextColor={COLOR.normalText} placeholder='Enter new content' />
                                </View>
                            </View>
                            <View style={[appStyle.column, { alignItems: 'flex-start', alignSelf: 'flex-start', }]}>
                                <Text style={[appStyle.text, { color: COLOR.titleLabel, marginBottom: 7, left: 5 }]}>Position</Text>
                                <View style={[styles.container, { left: -20 }]}>
                                    {renderLabel()}
                                    <Dropdown
                                        style={[appStyle.dropdown, isFocusPosition && { borderColor: COLOR.primary }, { borderRadius: 5, width: 500, left: 15 }]}
                                        placeholderStyle={appStyle.placeholderStyle}
                                        selectedTextStyle={appStyle.selectedTextStyle}
                                        inputSearchStyle={appStyle.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={dataPosition}
                                        search
                                        maxHeight={300}
                                        labelField="labelPosition"
                                        valueField="valuePosition"
                                        placeholder={!isFocusPosition ? 'Position' : '...'}
                                        searchPlaceholder="Search Position ..."
                                        value={valuePosition}
                                        onFocus={() => setIsFocusPosition(true)}
                                        onBlur={() => setIsFocusPosition(false)}
                                        onChange={item => {
                                            setValuePosition(item.valuePosition);
                                            setIsFocusPosition(false);
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={[appStyle.column, { alignItems: 'flex-start', alignSelf: 'flex-start', marginTop: 36, }]}>
                                <Text style={[appStyle.text, { color: COLOR.titleLabel, marginBottom: 7, left: 5 }]}>Product</Text>
                                <View style={[styles.container, { left: -20 }]}>
                                    {renderLabel()}
                                    <Dropdown
                                        style={[appStyle.dropdown, isFocusProduct && { borderColor: COLOR.primary }, { borderRadius: 5, width: 500, left: 15 }]}
                                        placeholderStyle={appStyle.placeholderStyle}
                                        selectedTextStyle={appStyle.selectedTextStyle}
                                        inputSearchStyle={appStyle.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={dataProduct}
                                        search
                                        maxHeight={300}
                                        labelField="labelProduct"
                                        valueField="valueProduct"
                                        placeholder={!isFocusProduct ? 'Product' : '...'}
                                        searchPlaceholder="Search Product ..."
                                        value={valueProduct}
                                        onFocus={() => setIsFocusProduct(true)}
                                        onBlur={() => setIsFocusProduct(false)}
                                        onChange={item => {
                                            setValueProduct(item.valueProduct);
                                            setIsFocusProduct(false);
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 36, width: 500, marginBottom: 100 }}>
                                <ButtonPrimary title={"Confirm"} onPress={() => { }} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default AddContent

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext'
import { appStyle } from '../theme/appStyle'
import Header from '../components/Header'
import ItemDrawer from "../components/ItemDrawer";
import { COLOR } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper'
import ButtonPrimary from '../components/ButtonPrimary'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const AddService = () => {
    const navigation = useNavigation();
    const { showDrawer, setShowDrawer } = useContext(AppContext);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        setSelectedDate(formattedDate);
        hideDatePicker();
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
                <View style={[appStyle.column, { top: showDrawer ? -150 : 0, flex: 1, alignItems: 'flex-start', marginVertical: 32, marginHorizontal: 20, }]}>
                    <View style={[appStyle.row, { alignItems: 'center', marginBottom: 30 }]}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <Image style={appStyle.bigIcon} source={require('../assets/icons/Left.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={appStyle.text}>List/</Text>
                        </TouchableOpacity>
                        <Text style={[appStyle.text, { color: COLOR.titleBreadCrumb }]}>Add</Text>
                    </View>
                    <View style={[appStyle.column, { alignSelf: 'center', }]}>
                        <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 36 ,}]}>
                            <Text style={appStyle.text}>Title</Text>
                            <View style={[appStyle.textInput, { marginTop: 7 }]}>
                                <TextInput style={{ backgroundColor: COLOR.black, width: 500 }} placeholder='Enter new title' />
                            </View>
                        </View>
                        <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 36 }]}>
                            <Text style={appStyle.text}>Description</Text>
                            <View style={[appStyle.textInput, { marginTop: 7 }]}>
                                <TextInput style={{ backgroundColor: COLOR.black, width: 500 }} placeholder='Enter new description' />
                            </View>
                        </View>
                        <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 36 }]}>
                            <Text style={appStyle.text}>Expiration date</Text>
                            <TouchableOpacity style={[appStyle.textInput, { marginTop: 7, paddingVertical: 12, }]} onPress={showDatePicker}>
                                <Text style={{ backgroundColor: COLOR.black, width: 500 ,paddingLeft:10}} >{selectedDate}</Text>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 36, width: 500 }}>
                            <ButtonPrimary title={"Confirm"} onPress={() => { }} />
                        </View>
                    </View>

                </View>
            </View>
        </SafeAreaView >
    )
}

export default AddService

const styles = StyleSheet.create({})
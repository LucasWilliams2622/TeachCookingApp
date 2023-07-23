import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { appStyle } from '../theme/appStyle'

const ItemCustomerInfo = () => {
    return (
        <View style={[appStyle.boxShadow, { paddingTop: 22, paddingHorizontal: 18, marginTop: 16, }]}>
            <View style={[appStyle.row, { justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
                <Image style={appStyle.bigAvatar} source={require('../assets/icons/defaultAvatar.png')} />
                <View style={[appStyle.column, { alignItems: 'flex-start', marginLeft: 24 }]}>
                    <View style={[appStyle.row, { justifyContent: 'space-between', width: "71%" }]}>
                        <Text style={appStyle.text}>Registration Information</Text>
                        <Image style={appStyle.icon} source={require('../assets/icons/Ok.png')} />
                    </View>
                    <View style={[appStyle.column, { marginTop: 21, alignItems: 'flex-start', marginBottom: 32 }]}>
                        <View style={[appStyle.row, { marginBottom: 8 }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>Fullname: Văn An</Text>
                        </View>
                        <View style={[appStyle.row, { marginBottom: 8 }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>Date of birth: 10/01/1992</Text>
                        </View>
                        <View style={[appStyle.row, { marginBottom: 8 }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>Gender: Male</Text>
                        </View>
                        <View style={[appStyle.row, { marginBottom: 8 }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>Email: abc@gmail.com</Text>
                        </View>
                        <View style={[appStyle.row, { }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>Phone: 0987654321</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemCustomerInfo

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../../theme/appStyle'
import ItemDriveLicense from '../../ItemDriveLicense'

const ItemRegisInfoUser = () => {
    const [verification, setVerification] = useState(false)

    const onVerification = () => {
        setVerification(!verification)
    }
    return (
        <View style={[appStyle.boxShadow, { paddingVertical: 22, paddingHorizontal: 18, marginTop: 16, }]}>
            <View style={[appStyle.row, { justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
                <Image style={appStyle.bigAvatar} source={require('../../../assets/icons/defaultAvatar.png')} />
                <View style={[appStyle.column, { alignItems: 'flex-start', marginLeft: 24 }]}>
                    <View style={[appStyle.row, { justifyContent: 'space-between', width: "71%" }]}>
                        <Text style={appStyle.text}>Registration Information</Text>
                        {verification ?
                            (<Image style={[appStyle.icon, { right: -40 }]} source={require('../../../assets/icons/Ok.png')} />)
                            :
                            (<TouchableOpacity style={[appStyle.button, { paddingHorizontal: 10, right: -80 }]} onPress={() => { onVerification() }}>
                                <Text style={[appStyle.titleButton, { fontSize: 10 }]}>Verification</Text>
                            </TouchableOpacity>)}
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
                        <View style={[appStyle.row, { marginBottom: 8 }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>Phone: 0987654321</Text>
                        </View>
                        <View style={[appStyle.row, { marginBottom: 8 }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>Address: abc, Son Ky Ward, Tan Phu District, Ho Chi Minh City</Text>
                        </View>
                        <View style={[appStyle.row, { marginBottom: 8 }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>ID nation: 1234567890</Text>
                        </View>
                        <View style={[appStyle.row, { marginBottom: 8 }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>Issuance date : 14/03/2005</Text>
                        </View>
                        <View style={[appStyle.row, { marginBottom: 8 }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>Expiration date: 14/03/2025</Text>
                        </View>
                        <View style={[appStyle.row, { marginBottom: 8 }]}>
                            <View style={appStyle.middleDot} />
                            <Text style={appStyle.normalText}>Issued by : CA Binh Thuan</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ paddingHorizontal: 12 }}>
                <Text style={appStyle.text}>Driver’s license</Text>
                <ItemDriveLicense />

            </View>
        </View>
    )
}

export default ItemRegisInfoUser

const styles = StyleSheet.create({})
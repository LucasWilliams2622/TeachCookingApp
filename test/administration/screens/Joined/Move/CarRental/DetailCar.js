import { SafeAreaView, StyleSheet, Text, View, ToastAndroid, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../../../theme/appStyle'
import { COLOR } from '../../../../theme/color'

const DetailCar = () => {
    const [isApproval, setIsApproval] = useState(false)
    const onApproval = () => {
        setIsApproval(true)
        ToastAndroid.show('Approval', ToastAndroid.SHORT);
    }
    return (
        <ScrollView>
            <View style={[appStyle.column, { alignItems: 'flex-start', marginVertical: 16, marginLeft: 190 }]}>
                <View style={[appStyle.row, { justifyContent: 'space-between', width: '88%' }]}>
                    <Text style={appStyle.titleDetail}>BASIC INFOR</Text>
                    {isApproval ? (<Image style={appStyle.icon} source={require('../../../../assets/icons/Ok.png')} />) : (<></>)}
                </View>
                <View style={[appStyle.row, { marginTop: 26, }]}>
                    <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                        <Text style={[appStyle.text, { marginBottom: 26 }]}>Car number plates:</Text>
                        <Text style={[appStyle.text, { marginBottom: 26 }]}>Descriptive name:</Text>
                        <Text style={[appStyle.text, { marginBottom: 26 }]}>Car maker:</Text>
                        <Text style={[appStyle.text, { marginBottom: 26 }]}>Car model:</Text>
                        <Text style={[appStyle.text, { marginBottom: 26 }]}>Year of manufacture:</Text>
                        <Text style={[appStyle.text, { marginBottom: 26 }]}>Seat:</Text>
                        <Text style={[appStyle.text, { marginBottom: 26 }]}>Gearbox:</Text>
                        <Text style={[appStyle.text, { marginBottom: 26 }]}>Type of fuel:</Text>
                    </View>
                    <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                        <Text style={[appStyle.text, { color: COLOR.deleteText, marginLeft: 75, marginBottom: 26 }]}>12 - H5 243.78</Text>
                        <Text style={[appStyle.text, { color: COLOR.deleteText, marginLeft: 75, marginBottom: 26 }]}>Maybach S680</Text>
                        <Text style={[appStyle.text, { color: COLOR.deleteText, marginLeft: 75, marginBottom: 26 }]}>Mercedes</Text>
                        <Text style={[appStyle.text, { color: COLOR.deleteText, marginLeft: 75, marginBottom: 26 }]}>Maybach S680</Text>
                        <Text style={[appStyle.text, { color: COLOR.deleteText, marginLeft: 75, marginBottom: 26 }]}>2022</Text>
                        <Text style={[appStyle.text, { color: COLOR.deleteText, marginLeft: 75, marginBottom: 26 }]}>4 </Text>
                        <Text style={[appStyle.text, { color: COLOR.deleteText, marginLeft: 75, marginBottom: 26 }]}>Số tự động </Text>
                        <Text style={[appStyle.text, { color: COLOR.deleteText, marginLeft: 75, marginBottom: 26 }]}>Dầu Diesel</Text>
                    </View>
                </View>

                <Text style={[appStyle.titleDetail, { marginTop: 100 }]}>DETAILS INFOR</Text>
                <View style={[appStyle.row, { marginTop: 26, alignItems: 'flex-start' }]}>
                    <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                        <Text style={[appStyle.text, { marginBottom: 26, alignSelf: 'flex-start', height: 170 }]}>Description:</Text>
                        <Text style={[appStyle.text, { marginBottom: 26, alignSelf: 'flex-start' }]}>Fuel consumption::</Text>
                    </View>
                    <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                        <Text numberOfLines={6} style={[appStyle.text, { color: COLOR.deleteText, marginLeft: 75, marginBottom: 26, width: 200, height: 170 }]}>Phiên bản cao cấp nhất của Mercedes S-class thế hệ mới
                            về Việt Nam vào cuối tháng 12/2021 với thay đổi nhiều chi
                            tiết về ngoại thất và nội thất so với S-class tiêu chuẩn.
                            Hiện tại, chỉ hai chiếc S680 được đưa về nước, trong đó
                            chiếc S680 sở hữu hai tông màu vàng kim và đỏ ánh kim
                            là chiếc đầu tiên, chiếc còn lại sơn đen.</Text>
                        <Text numberOfLines={6} style={[appStyle.text, { color: COLOR.deleteText, marginLeft: 75, marginBottom: 26, width: 200, }]}>50 lít/100km</Text>
                    </View>
                </View>

                <Text style={[appStyle.text, { marginTop: 53 }]}>Car’s images:</Text>
                <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                    <View style={[appStyle.row, { marginTop: 26 }]}>
                        <View style={appStyle.column}>
                            <Image style={appStyle.imageCar} source={require("../../../../assets/images/imageMercedesHorizon.png")} />
                            <Text style={[appStyle.text, { marginTop: 16, color: COLOR.normalText }]}>Front side</Text>
                        </View>
                        <View style={[appStyle.column, { marginLeft: 48 }]}>
                            <Image style={appStyle.imageCar} source={require("../../../../assets/images/imageMercedesHorizon.png")} />
                            <Text style={[appStyle.text, { marginTop: 16, color: COLOR.normalText }]}>Back side</Text>
                        </View>
                    </View>
                    <View style={[appStyle.row, { marginTop: 42 }]}>
                        <View style={appStyle.column}>
                            <Image style={appStyle.imageCar} source={require("../../../../assets/images/imageMercedesHorizon.png")} />
                            <Text style={[appStyle.text, { marginTop: 16, color: COLOR.normalText }]}>Left side</Text>
                        </View>
                        <View style={[appStyle.column, { marginLeft: 48 }]}>
                            <Image style={appStyle.imageCar} source={require("../../../../assets/images/imageMercedesHorizon.png")} />
                            <Text style={[appStyle.text, { marginTop: 16, color: COLOR.normalText }]}>Right side</Text>
                        </View>
                    </View>
                </View>

                <Text style={[appStyle.text, { marginTop: 43 }]}>Car’s images:</Text>
                <View style={[appStyle.row, { marginTop: 26 }]}>
                    <View style={appStyle.column}>
                        <Image style={appStyle.imageCar} source={require("../../../../assets/images/imageCarRegister.png")} />
                        <Text style={[appStyle.text, { marginTop: 16, color: COLOR.normalText }]}>Front side</Text>
                    </View>
                    <View style={[appStyle.column, { marginLeft: 48 }]}>
                        <Image style={appStyle.imageCar} source={require("../../../../assets/images/imageCarRegister.png")} />
                        <Text style={[appStyle.text, { marginTop: 16, color: COLOR.normalText }]}>Back side</Text>
                    </View>
                </View>

                <Text style={[appStyle.text, { marginTop: 53 }]}>Car insurance:</Text>
                <View style={[appStyle.row, { marginTop: 26 }]}>
                    <View style={appStyle.column}>
                        <Image style={appStyle.imageCar} source={require("../../../../assets/images/imageCarInsurance.png")} />
                        <Text style={[appStyle.text, { marginTop: 16, color: COLOR.normalText }]}>Front side</Text>
                    </View>
                    <View style={[appStyle.column, { marginLeft: 48 }]}>
                        <Image style={appStyle.imageCar} source={require("../../../../assets/images/imageCarInsurance.png")} />
                        <Text style={[appStyle.text, { marginTop: 16, color: COLOR.normalText }]}>Back side</Text>
                    </View>
                </View>

                <Text style={[appStyle.text, { marginTop: 53 }]}>Thumbnail:</Text>
                <Image style={[appStyle.imageCar, { width: 650, height: 290 }]} source={require("../../../../assets/images/imageMercedesHorizon.png")} />
                {isApproval ?
                    (<TouchableOpacity style={[appStyle.button, { paddingVertical: 16, backgroundColor: COLOR.deleteText, width: '89%', marginTop: 54 }]}>
                        <Text style={[appStyle.titleButton, { fontSize: 20, }]}>Delete</Text>
                    </TouchableOpacity>)
                    :
                    (<View style={[appStyle.row, { justifyContent: 'space-between', marginTop: 62, }]}>
                        <TouchableOpacity style={[appStyle.button, { paddingVertical: 16, backgroundColor: COLOR.deleteText, width: 300 }]}>
                            <Text style={[appStyle.titleButton, { fontSize: 20, }]}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[appStyle.button, { paddingVertical: 16, width: 300, marginLeft: 48 }]} onPress={() => { onApproval() }}>
                            <Text style={[appStyle.titleButton, { fontSize: 20, }]}>Approval</Text>
                        </TouchableOpacity>
                    </View>)}
            </View>
        </ScrollView>
    )
}

export default DetailCar

const styles = StyleSheet.create({})
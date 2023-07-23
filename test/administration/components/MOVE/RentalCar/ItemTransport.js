import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'

const ItemTransport = (props) => {
    const { data } = props;
    const { carName, licensePlate, dateTime, approval } = data;

    const [isApproval, setIsApproval] = useState(false)
    const onApproval = () => {
        setIsApproval(!isApproval)
    }
    return (
        <View style={[appStyle.boxShadow, appStyle.row, { paddingVertical: 22, marginBottom: 25, paddingHorizontal: 27, justifyContent: 'space-between' }]}>
            <View style={appStyle.row}>
                <Image style={[appStyle.imageVehicle, { borderRadius: 8, }]} source={require('../../../assets/images/imageMercedesMayBach.png')} />
                <View style={[appStyle.column, { justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 27 }]}>
                    <Text style={[appStyle.text, { marginBottom: 7 }]}>{carName}</Text>
                    <Text style={[appStyle.normalText, { color: COLOR.deleteText }]}>{licensePlate}</Text>
                </View>
            </View>
            <View style={[appStyle.column, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
                {approval ?
                    (<Image style={[appStyle.icon, { borderRadius: 1000, marginBottom: 40 }]} source={require('../../../assets/icons/Ok.png')} />) :
                    (<TouchableOpacity style={[appStyle.button, { paddingHorizontal: 16, marginBottom: 40 }]} onPress={() => { onApproval() }}>
                        <Text style={[appStyle.titleButton, { fontSize: 10, }]}>Approval</Text>
                    </TouchableOpacity>)}
                <Text style={[appStyle.normalText, {}]}>{dateTime}</Text>
            </View>
        </View>
    )
}

export default ItemTransport

const styles = StyleSheet.create({})
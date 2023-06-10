import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context';

const InfoApp = (props) => {
    const { navigation } = props;

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Image style={[styles.icon, {}]} source={require('../../asset/icon/icon_back.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Thông tin</Text>
                <Text></Text>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.title2}>Thành viên đội phát triển:</Text>
                <View style={styles.boxMember}>
                    <View style={styles.boxNumber}>
                        <Text style={styles.textNumber}>1</Text>
                    </View>
                    <Text style={styles.name}>Nguyễn Văn Sơn (Leader)</Text>
                </View>
                <View style={styles.boxMember}>
                    <View style={styles.boxNumber}>
                        <Text style={styles.textNumber}>2</Text>
                    </View>
                    <Text style={styles.name}>Phạm Nguyễn Thế Sơn</Text>
                </View>
                <View style={styles.boxMember}>
                    <View style={styles.boxNumber}>
                        <Text style={styles.textNumber}>3</Text>
                    </View>
                    <Text style={styles.name}>Nguyễn Hữu Hòa</Text>
                </View>
            </View>
            <View style={styles.boxCenter}>
            <Image style={[styles.image, {}]} source={require('../../asset/image/logo.png')} />

                <Text style={styles.phone}>SĐT Liên hệ: 0337744148</Text>
            </View>

        </SafeAreaView>

    )
}

export default InfoApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLOR.BACKGROUND2,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',

    },
    icon: {
        width: 25,
        height: 25,
        tintColor: COLOR.WHITE,

    },
    title: {
        color: COLOR.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    title2: {
        color: COLOR.WHITE,
        fontSize: 18,
        fontWeight: '500',
    },
    infoBox: {
        marginHorizontal: 20,
        marginVertical: 20,

    },
    boxNumber: {
        backgroundColor: COLOR.WHITE,
        borderRadius: 1000,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    textNumber: {
        fontSize: 16,
        fontWeight: '500'
    },
    name: {
        color: COLOR.WHITE,
        fontSize: 16
    },
    boxMember: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    boxCenter: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50,
    },
    phone: {
        color: COLOR.WHITE,
        fontSize: 24,
        fontWeight: '500',
        marginTop:50

    }
})
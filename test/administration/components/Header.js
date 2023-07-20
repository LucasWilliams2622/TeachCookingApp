import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native'
import { COLOR } from '../theme/color'
import { appStyle } from '../theme/appStyle'
import { AppContext } from '../AppContext'

const Header = () => {
    const { showDrawer, setShowDrawer } = useContext(AppContext);
    const handleShow = () => {
        setShowDrawer(!showDrawer)
        console.log(showDrawer);

    }
    return (
        <SafeAreaView style={styles.boxHeader}>
            <TouchableOpacity onPress={() => { handleShow() }}>
                <Image style={appStyle.bigIcon} source={require('../assets/icons/Menu.png')} />
            </TouchableOpacity>
            <Text style={appStyle.title}>Administration</Text>
            <Text></Text>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    boxHeader: {
        width: '100%',
        height: "10%",
        backgroundColor: COLOR.bgHeader,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 26
    },
})
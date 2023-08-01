import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState, useContext } from 'react'
import { appStyle } from '../../theme/appStyle'
import Header from '../../components/Header'
import { COLOR } from '../../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppContext'
import ItemDrawer from "../../components/ItemDrawer";
import DecentralizationOfSupport from './DecentralizationOfSupport'
import SupportMemberList from './SupportMemberList'
import Report from './BadlyList'
import Chat from './Chat'

const Support = () => {
    const { showDrawer, setShowDrawer } = useContext(AppContext);
    const navigation = useNavigation();
    const [isSelect, setIsSelect] = useState(3);
    const [selectISMos, setSelectISMos] = useState(4)
    const handleSelect = (id) => {
        setIsSelect(id);
    };
    const handleSelectISMos = (id, idJoined) => {
        setSelectISMos(id);
        setIsSelect(idJoined);
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
                <View style={[styles.main, { top: showDrawer ? -30 : 0 }]}>
                    <View style={styles.breadCrumb}>
                        <View style={appStyle.row}>
                            <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                                <Image style={appStyle.icon} source={require('../../assets/icons/Left.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[appStyle.titleBreadCrumb, { color: COLOR.titleBreadCrumbManagement }]}>Support</Text>
                            </TouchableOpacity>
                            {
                                isSelect == 1 ?
                                    (<TouchableOpacity>
                                        <Text style={[appStyle.titleBreadCrumb, {}]}>/ Decentralization of support</Text>
                                    </TouchableOpacity>)
                                    : isSelect == 2 ?
                                        (<TouchableOpacity>
                                            <Text style={[appStyle.titleBreadCrumb, {}]}>/ Support member list </Text>
                                        </TouchableOpacity>)
                                        : isSelect == 3 ?
                                            (<TouchableOpacity>
                                                <Text style={[appStyle.titleBreadCrumb, {}]}>/ Report </Text>
                                            </TouchableOpacity>)
                                            :
                                            (<TouchableOpacity>
                                                <Text style={[appStyle.titleBreadCrumb, {}]}>/ Chat </Text>
                                            </TouchableOpacity>)
                            }
                        </View>
                    </View>

                    <View style={styles.mainContent}>
                        <View style={styles.barOption}>
                            <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 1 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(1) }}>
                                <Text style={[appStyle.text, { color: isSelect === 1 ? COLOR.titleLabel : COLOR.text }]}>Decentralization of support</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 2 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(2) }}>
                                <Text style={[appStyle.text, { color: isSelect === 2 ? COLOR.titleLabel : COLOR.text }]}>Support member list</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 3 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(3) }}>
                                <Text style={[appStyle.text, { color: isSelect === 3 ? COLOR.titleLabel : COLOR.text }]}>Report</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 4 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(4) }}>
                                <Text style={[appStyle.text, { color: isSelect === 4 ? COLOR.titleLabel : COLOR.text }]}>Chat</Text>
                            </TouchableOpacity>
                        </View>
                        {
                            isSelect == 1 ? (<DecentralizationOfSupport />)
                                : isSelect == 2 ? (<SupportMemberList />)
                                    : isSelect == 3 ? (<Report />)
                                        : (<Chat />)
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Support

const styles = StyleSheet.create({
    main: {
        marginVertical: 30,
        marginHorizontal: 36,
        height: 700,

    },
    mainContent: {
        marginTop: 40,
        flexDirection: 'row',
    },
    barOption: {
        flexDirection: 'column',
    },
    breadCrumb: {
        flexDirection: "row",
        alignItems: 'center',
    },
    itemOption: {
        backgroundColor: COLOR.bg,
        paddingVertical: 14,
        paddingHorizontal: 16,
        width: 300
    },
})
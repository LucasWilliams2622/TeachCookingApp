import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState, useContext } from 'react'
import { appStyle } from '../theme/appStyle'
import Header from '../components/Header'
import { COLOR } from '../theme/color'

import InformationUser from './InformationUser'
import KYCUser from './KYCUser'
import Membership from './MembershipUser'
import NotificationHistoryUser from './NotificationHistoryUser'
import AccountUser from './AccountUser'
import { AppContext } from '../AppContext'
import ItemDrawer from "../components/ItemDrawer";
import LinkJoined from './Joined/LinkJoined';
import MosJoined from './Joined/MosJoined';
import MoveJoined from './Joined/MoveJoined';
import PayJoined from './Joined/PayJoined';
import { useNavigation } from '@react-navigation/native';


const ProfileUser = (props) => {
  const { showDrawer, setShowDrawer } = useContext(AppContext);
  const navigation = useNavigation();

  const [isSelect, setIsSelect] = useState(6);
  const [selectJoined, setSelectJoined] = useState(4)

  const handleSelect = (id) => {
    setIsSelect(id);
  };
  const handleSelectJoined = (id, idJoined) => {
    setSelectJoined(id);
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
                <Image style={appStyle.icon} source={require('../assets/icons/Left.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[appStyle.titleBreadCrumb, { color: COLOR.titleBreadCrumbManagement }]}>User Management/</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[appStyle.titleBreadCrumb, {}]}>Search User/ </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[appStyle.titleBreadCrumb, {}]}>Profile User/ </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[appStyle.titleBreadCrumb, {}]}>0987654321 </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainContent}>
            <View style={styles.barOption}>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 1 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(1) }}>
                <Text style={[appStyle.text, { color: isSelect === 1 ? COLOR.titleLabel : COLOR.text }]}>Information</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 2 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(2) }}>
                <Text style={[appStyle.text, { color: isSelect === 2 ? COLOR.titleLabel : COLOR.text }]}>KYC</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 3 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(3) }}>
                <Text style={[appStyle.text, { color: isSelect === 3 ? COLOR.titleLabel : COLOR.text }]}>Membership</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 4 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(4) }}>
                <Text style={[appStyle.text, { color: isSelect === 4 ? COLOR.titleLabel : COLOR.text }]}>Notification History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 5 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(5) }}>
                <Text style={[appStyle.text, { color: isSelect === 5 ? COLOR.titleLabel : COLOR.text }]}>Account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 6 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(6) }}>
                <Text style={[appStyle.text, { color: isSelect === 6 ? COLOR.titleLabel : COLOR.text }]}>Joined</Text>
              </TouchableOpacity>

              <View style={[appStyle.column, { marginLeft: 5, marginTop: 10 }]}>
                <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 6 && selectJoined === 1 ? COLOR.bgJoined : COLOR.bg, width: '100%', alignItems: 'center' }]} onPress={() => { handleSelectJoined(1, 6) }}>
                  <Text style={[appStyle.text, { color: isSelect === 6 && selectJoined === 1 ? COLOR.bgSelectJoined : COLOR.text }]}>MOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 6 && selectJoined === 2 ? COLOR.bgJoined : COLOR.bg, width: '100%', alignItems: 'center' }]} onPress={() => { handleSelectJoined(2, 6) }}>
                  <Text style={[appStyle.text, { color: isSelect === 6 && selectJoined === 2 ? COLOR.bgSelectJoined : COLOR.text }]}>LINK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 6 && selectJoined === 3 ? COLOR.bgJoined : COLOR.bg, width: '100%', alignItems: 'center' }]} onPress={() => { handleSelectJoined(3, 6) }}>
                  <Text style={[appStyle.text, { color: isSelect === 6 && selectJoined === 3 ? COLOR.bgSelectJoined : COLOR.text }]}>MOVE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 6 && selectJoined === 4 ? COLOR.bgJoined : COLOR.bg, width: '100%', alignItems: 'center' }]} onPress={() => { handleSelectJoined(4, 6) }}>
                  <Text style={[appStyle.text, { color: isSelect === 6 && selectJoined === 4 ? COLOR.bgSelectJoined : COLOR.text }]}>PAY</Text>
                </TouchableOpacity>
              </View>
            </View>
            {
              isSelect == 1 ? (<InformationUser />)
                : isSelect == 2 ? (<KYCUser />)
                  : isSelect == 3 ? (<Membership />)
                    : isSelect == 4 ? (<NotificationHistoryUser />)
                      : isSelect == 5 ? (<AccountUser />)
                        : (selectJoined == 1 ? (<MosJoined />)
                          : selectJoined == 2 ? (<LinkJoined />)
                            : selectJoined == 3 ? (<MoveJoined />)
                              : (<PayJoined />)
                        )
            }
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileUser

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
    width: '20%',
  },
  breadCrumb: {
    flexDirection: "row",
    alignItems: 'center',
  },
  itemOption: {
    backgroundColor: COLOR.bg,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

})
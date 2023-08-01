import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Switch, Alert } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { appStyle } from '../../theme/appStyle'
import Header from '../../components/Header'
import { COLOR } from '../../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppContext'
import ItemDrawer from "../../components/ItemDrawer";
import ISLink from './ISLINK/ISLink'
import Pay from './PAY/Pay'
import Setting from './ISMOS/Setting'
import AccessPermissions from './ISMOS/AccessPermissions'
import StoreSync from './ISMOS/StoreSync'
import UpgradeAgent from './ISMOS/UpgradeAgent/ListDecentralization'
import StoreList from './ISMOS/StoreList'
import P2P from './PAY/P2P/P2P'
import Point from './PAY/Point/History'
import Wallet from './PAY/Wallet/Wallet'
import PostpaidWallet from './PAY/PostpaidWallet/PostpaidWallet'
import USDT from './PAY/USDT/USDT'
import ISGroupToken from './PAY/ISGroupToken/ISGroupToken'
import Stake from './PAY/Stake/Stake'
import Dividend from './PAY/Dividend/Dividend'
const SystemFeature = () => {
  const { showDrawer, setShowDrawer } = useContext(AppContext);
  const navigation = useNavigation();
  const [isSelect, setIsSelect] = useState(1);
  const [selectISMos, setSelectISMos] = useState(1)
  const [selectPay, setSelectPay] = useState(1)
  const handleSelect = (id) => {
    setIsSelect(id);
  };
  const handleSelectISMos = (id, idJoined) => {
    setSelectISMos(id);
    setIsSelect(idJoined);
  };
  const handleSelectPay = (id, idPay) => {
    setSelectPay(id);
    setIsSelect(idPay);
  };
  const handleButtonPress = (title) => {
    Alert.alert(
      'Thông báo',
      "" + title,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }
  useEffect(() => {

    return () => {

    }
  }, [])
  const breadcrumbOptions = [
    [
      { selectISMos: 1, text: "/ Setting" },
      { selectISMos: 2, text: "/ Access permissions" },
      { selectISMos: 3, text: "/ Store list" },
      { selectISMos: 4, text: "/ Upgrade agent" },
      { selectISMos: 5, text: "/ Store sync" },
    ],
    [],
    [
      { selectPay: 1, text: "/ P2P" },
      { selectPay: 2, text: "/ Point" },
      { selectPay: 3, text: "/ Wallet" },
      { selectPay: 4, text: "/ Postpaid Wallet" },
      { selectPay: 5, text: "/ USDT" },
      { selectPay: 6, text: "/ ISGroup Token" },
      { selectPay: 7, text: "/ Stake" },
    ],
    [{ text: "/ Dividend" }],
  ];

  const breadcrumbText = breadcrumbOptions[isSelect - 1]
    .find((option) => option.selectISMos === selectISMos || option.selectPay === selectPay)
    ?.text;
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
              <TouchableOpacity style={appStyle.row} onPress={() => { handleButtonPress('Home  ../Home') }}>
                <Image style={appStyle.icon} source={require('../../assets/icons/Left.png')} />
                <Text style={[appStyle.titleBreadCrumb, { color: COLOR.titleBreadCrumbManagement }]}> System feature management</Text>
              </TouchableOpacity>
              {
                isSelect == 1 ?
                  (<TouchableOpacity>
                    <Text style={[appStyle.titleBreadCrumb, { color: COLOR.titleBreadCrumbManagement }]}>/ ISMOS </Text>
                  </TouchableOpacity>) :
                  isSelect == 2 ?
                    (<TouchableOpacity>
                      <Text style={[appStyle.titleBreadCrumb, {}]}>/ ISLINK </Text>
                    </TouchableOpacity>)
                    : (<TouchableOpacity>
                      <Text style={[appStyle.titleBreadCrumb, { color: COLOR.titleBreadCrumbManagement }]}>/ PAY </Text>
                    </TouchableOpacity>)
              }
              <TouchableOpacity>
                <Text style={[appStyle.titleBreadCrumb, {}]}>{breadcrumbText}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mainContent}>
            <View style={styles.barOption}>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 1 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(1) }}>
                <Text style={[appStyle.text, { color: isSelect === 1 ? COLOR.titleLabel : COLOR.text }]}>ISMOS</Text>
              </TouchableOpacity>
              {
                isSelect === 1 ? (<View style={[appStyle.column, { marginLeft: 20, marginTop: 10, alignItems: 'flex-start' }]}>
                  <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 1 && selectISMos === 1 ? COLOR.bgJoined : COLOR.bg, alignItems: 'flex-start' }]} onPress={() => { handleSelectISMos(1, 1) }}>
                    <Text style={[appStyle.text, { color: isSelect === 1 && selectISMos === 1 ? COLOR.bgSelectJoined : COLOR.text }]}>Setting</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 1 && selectISMos === 2 ? COLOR.bgJoined : COLOR.bg, alignItems: 'flex-start' }]} onPress={() => { handleSelectISMos(2, 1) }}>
                    <Text style={[appStyle.text, { color: isSelect === 1 && selectISMos === 2 ? COLOR.bgSelectJoined : COLOR.text }]}>Access permissions</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 1 && selectISMos === 3 ? COLOR.bgJoined : COLOR.bg, alignItems: 'flex-start' }]} onPress={() => { handleSelectISMos(3, 1) }}>
                    <Text style={[appStyle.text, { color: isSelect === 1 && selectISMos === 3 ? COLOR.bgSelectJoined : COLOR.text }]}>Store list</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 1 && selectISMos === 4 ? COLOR.bgJoined : COLOR.bg, alignItems: 'flex-start' }]} onPress={() => { handleSelectISMos(4, 1) }}>
                    <Text style={[appStyle.text, { color: isSelect === 1 && selectISMos === 4 ? COLOR.bgSelectJoined : COLOR.text }]}>Upgrade agent</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 1 && selectISMos === 5 ? COLOR.bgJoined : COLOR.bg, alignItems: 'flex-start' }]} onPress={() => { handleSelectISMos(5, 1) }}>
                    <Text style={[appStyle.text, { color: isSelect === 1 && selectISMos === 5 ? COLOR.bgSelectJoined : COLOR.text }]}>Store sync</Text>
                  </TouchableOpacity>
                </View>) : (<></>)
              }

              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 2 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(2) }}>
                <Text style={[appStyle.text, { color: isSelect === 2 ? COLOR.titleLabel : COLOR.text }]}>ISLINK</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 3 ? COLOR.bgOption : COLOR.bg, }]} onPress={() => { handleSelect(3) }}>
                <Text style={[appStyle.text, { color: isSelect === 3 ? COLOR.titleLabel : COLOR.text }]}>PAY</Text>
              </TouchableOpacity>
              {isSelect === 3 && (
                <View style={[appStyle.column, { marginLeft: 20, marginTop: 10, alignItems: 'flex-start' }]}>
                  {[
                    { label: 'P2P', value: 1 },
                    { label: 'Point', value: 2 },
                    { label: 'Wallet', value: 3 },
                    { label: 'Postpaid Wallet', value: 4 },
                    { label: 'USDT', value: 5 },
                    { label: 'ISGroup Token', value: 6 },
                    { label: 'Stake', value: 7 },
                    { label: 'Dividend', value: 8 },
                  ].map(option => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.itemOption,
                        {
                          backgroundColor: isSelect === 3 && selectPay === option.value ? COLOR.bgJoined : COLOR.bg,
                          alignItems: 'flex-start',
                        },
                      ]}
                      onPress={() => handleSelectPay(option.value, 3)}
                    >
                      <Text
                        style={[
                          appStyle.text,
                          {
                            color: isSelect === 3 && selectPay === option.value ? COLOR.bgSelectJoined : COLOR.text,
                          },
                        ]}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
            {
              isSelect == 1 ? (
                selectISMos == 1 ? (<Setting />)
                  : selectISMos == 2 ? (<AccessPermissions />)
                    : selectISMos == 3 ? (<StoreList />)
                      : selectISMos == 4 ? (<UpgradeAgent />)
                        : (<StoreSync />))
                : isSelect == 2 ? (<ISLink />)
                  : (
                    selectPay == 1 ? (<P2P />)
                      : selectPay == 2 ? (<Point />)
                        : selectPay == 3 ? (<Wallet />)
                          : selectPay == 4 ? (<PostpaidWallet />)
                            : selectPay == 5 ? (<USDT />)
                              : selectPay == 6 ? (<ISGroupToken />)
                                : selectPay == 7 ? (<Stake />)
                                  : (<Dividend />)
                  )
            }
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SystemFeature

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
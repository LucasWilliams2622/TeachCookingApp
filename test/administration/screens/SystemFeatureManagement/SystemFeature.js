import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState, useContext } from 'react'
import { appStyle } from '../../theme/appStyle'
import Header from '../../components/Header'
import { COLOR } from '../../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppContext'
import ItemDrawer from "../../components/ItemDrawer";
import ISMos from './ISMOS/ISMos'
import ISLink from './ISLINK/ISLink'
import Pay from './PAY/Pay'

const SystemFeature = () => {
    const { showDrawer, setShowDrawer } = useContext(AppContext);
    const navigation = useNavigation();
    const [isSelect, setIsSelect] = useState(1);
    const [selectISMos, setSelectISMos] = useState(1)
    const handleSelect = (id) => {
        setIsSelect(id);
      };
      const handleSelectISMos= (id, idJoined) => {
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
              <Text style={[appStyle.titleBreadCrumb, { color: COLOR.titleBreadCrumbManagement }]}>System feature management/</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[appStyle.titleBreadCrumb, {color: COLOR.titleBreadCrumbManagement}]}>MOS/ </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[appStyle.titleBreadCrumb, {}]}>Setting </Text>
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
            

            <View style={[appStyle.column, { marginLeft: 5, marginTop: 10 }]}>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 6 && selectISMos === 1 ? COLOR.bgJoined : COLOR.bg, width: '100%', alignItems: 'center' }]} onPress={() => { handleselectISMos(1, 6) }}>
                <Text style={[appStyle.text, { color: isSelect === 6 && selectISMos === 1 ? COLOR.bgselectISMos : COLOR.text }]}>MOS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 6 && selectISMos === 2 ? COLOR.bgJoined : COLOR.bg, width: '100%', alignItems: 'center' }]} onPress={() => { handleselectISMos(2, 6) }}>
                <Text style={[appStyle.text, { color: isSelect === 6 && selectISMos === 2 ? COLOR.bgselectISMos : COLOR.text }]}>LINK</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 6 && selectISMos === 3 ? COLOR.bgJoined : COLOR.bg, width: '100%', alignItems: 'center' }]} onPress={() => { handleselectISMos(3, 6) }}>
                <Text style={[appStyle.text, { color: isSelect === 6 && selectISMos === 3 ? COLOR.bgselectISMos : COLOR.text }]}>MOVE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemOption, { backgroundColor: isSelect === 6 && selectISMos === 4 ? COLOR.bgJoined : COLOR.bg, width: '100%', alignItems: 'center' }]} onPress={() => { handleselectISMos(4, 6) }}>
                <Text style={[appStyle.text, { color: isSelect === 6 && selectISMos === 4 ? COLOR.bgselectISMos : COLOR.text }]}>PAY</Text>
              </TouchableOpacity>
            </View>
          </View>
          {
            isSelect == 1 ? (<ISMos />)
              : isSelect == 2 ? (<ISLink />)
                :  (<Pay />)
                 
                     
                      
          }
        </View>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default SystemFeature

const styles = StyleSheet.create({})
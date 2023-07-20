import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../theme/appStyle'
import Header from '../components/Header'
import { COLOR } from '../theme/color'
import { ScrollView } from 'react-native-virtualized-view'
import { Dropdown } from 'react-native-element-dropdown';

const dataRole = [
  { labelRole: 'Super Admin', valueRole: '1' },
  { labelRole: 'Admin', valueRole: '2' },
  { labelRole: 'Staff', valueRole: '3' },
  { labelRole: 'Demo', valueRole: '4' },
  { labelRole: 'Normal', valueRole: '5' },


]
const InformationUser = (props) => {
  const { navigation } = props;
  const [valueRole, setValueRole] = useState(null);
  const [isFocusRole, setIsFocusRole] = useState(true)
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const renderLabel = () => {
    if (valueRole || isFocusRole) {
      return (
        <Text style={[styles.label, isFocusRole && { color: COLOR.primary }]}>
        </Text>
      );
    }
    return null;
  };
  return (
    <View>
      <View style={appStyle.boxInfo}>
        <View style={styles.headerInfo}>
          <View style={appStyle.row}>
            <Image style={[appStyle.avatar, { width: 100, height: 100 }]} source={require('../assets/icons/defaultAvatar.png')} />
            <View style={[appStyle.column, { marginLeft: 26, alignItems: 'flex-start' }]}>
              <Text style={[appStyle.text, { fontSize: 16 }]}>Văn An</Text>
              <Text style={[appStyle.text, { fontSize: 16, color: COLOR.titleLabel }]}>User</Text>
              <Text style={[appStyle.text, { fontSize: 16 }]}>1122QM</Text>
            </View>
          </View>
          <Text style={[appStyle.text, { color: COLOR.active }]}>Active</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <View style={styles.boxDetailInfo}>
            <View style={[appStyle.column, { justifyContent: "flex-start", alignItems: 'flex-start', width: '50%' }]}>
              <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                <Text style={appStyle.text}>Created date</Text>
                <Text style={[appStyle.text, { color: COLOR.normalText, marginTop: 12, }]}>30-11-2022 05:43:24 am</Text>
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 35 }]}>
                <Text style={appStyle.text}>Email</Text>
                <Text style={[appStyle.text, { color: COLOR.normalText, marginTop: 12, }]}>abc@gmail.com</Text>
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 35 }]}>
                <Text style={appStyle.text}>Phone</Text>
                <Text style={[appStyle.text, { color: COLOR.normalText, marginTop: 12, }]}>098765432</Text>
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 35 }]}>
                <Text style={appStyle.text}>Membership</Text>
                <View style={[appStyle.row, { marginTop: 8 }]}>
                  <Text style={[appStyle.text, { color: COLOR.normalText, }]}>Premium</Text>
                  <TouchableOpacity style={{ backgroundColor: COLOR.bgButton, padding: 10, borderRadius: 5, marginLeft: 10 }}>
                    <Text style={[appStyle.text, { fontSize: 10, color: COLOR.white }]}>Upgrade</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 35 }]}>
                <Text style={appStyle.text}>Affiliate</Text>
                <Text style={[appStyle.text, { color: COLOR.normalText, marginTop: 12, }]}>0</Text>
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 35 }]}>
                <Text style={appStyle.text}>Invited by</Text>
                <Text style={[appStyle.text, { color: COLOR.titleBreadCrumb, marginTop: 12, }]}>Mr A</Text>
              </View>
            </View>

            <View style={[appStyle.column, { justifyContent: "flex-start", alignItems: 'flex-start' }]}>
              <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                <Text style={appStyle.text}>Country</Text>
                <Text style={[appStyle.text, { color: COLOR.normalText, marginTop: 12, }]}>Vietnam</Text>
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 35 }]}>
                <Text style={appStyle.text}>Banned</Text>
                <Switch
                  style={{ marginTop: 5, left: -10 }}
                  trackColor={{ false: '#767577', true: '#059669' }}
                  thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 35 }]}>
                <Text style={appStyle.text}>Activated</Text>
                <Switch
                  style={{ marginTop: 5, left: -10 }}
                  trackColor={{ false: '#767577', true: '#059669' }}
                  thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 35 }]}>
                <Text style={appStyle.text}>Role user</Text>
                <View style={styles.container}>
                  {renderLabel()}
                  <Dropdown
                    style={[appStyle.dropdown, { marginLeft: 0, marginTop: 7, width: 300, }, isFocusRole && { borderColor: COLOR.primary }]}
                    placeholderStyle={appStyle.placeholderStyle}
                    selectedTextStyle={appStyle.selectedTextStyle}
                    inputSearchStyle={appStyle.inputSearchStyle}
                    iconStyle={appStyle.iconStyle}
                    data={dataRole}
                    search
                    maxHeight={300}
                    labelField="labelRole"
                    valueField="valueRole"
                    placeholder={!isFocusRole ? 'Role' : '...'}
                    searchPlaceholder="Search..."
                    value={valueRole}
                    onFocus={() => setIsFocusRole(true)}
                    onBlur={() => setIsFocusRole(false)}
                    onChange={item => {
                      setValueRole(item.valueRole);
                      setIsFocusRole(false);
                    }}
                  // renderLeftIcon={() => (
                  //   <Image style={[appStyle.icon, { marginRight: 9, }]} source={require('../assets/icons/TriangleArrow.png')} />
                  // )}
                  />
                </View>
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 35 }]}>
                <Text style={appStyle.text}>Mac device</Text>
                <View style={appStyle.row}>
                  <Text style={[appStyle.text, { color: COLOR.normalText, marginTop: 12, marginRight: 22 }]}>MAC</Text>
                  <Text style={[appStyle.text, { color: COLOR.normalText, marginTop: 12, }]}>0D1FA671-BFC4-4120-AB55-D4653CCC4804</Text>
                </View>
              </View>
              <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 35 }]}>
                <Text style={appStyle.text}>Wallet address</Text>
                <View style={appStyle.row}>
                  <Text style={[appStyle.text, { color: COLOR.normalText, marginTop: 12, marginRight: 22 }]}>USDT</Text>
                  <Text style={[appStyle.text, { color: COLOR.normalText, marginTop: 12, }]}>232323xBf50F8850Aea1f1683Ee0b8fc71132F9c6BD1dE1</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default InformationUser

const styles = StyleSheet.create({
  container: {
    width: "25%",
  },

  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxDetailInfo: {
    marginTop: 68,
    flexDirection: 'row',
    marginBottom: 300,
  },
})
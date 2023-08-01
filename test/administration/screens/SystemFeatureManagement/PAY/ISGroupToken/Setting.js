import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';

import { appStyle, windowHeight } from '../../../../theme/appStyle'
import { COLOR } from '../../../../theme/color';
const optionsApp = [
  { label: '1.000.000', value: '1' },
  { label: '2.000.000', value: 'link' },
  { label: '3.000.000', value: 'land' },
  { label: '5.000.000', value: 'pay' },

];
const Setting = () => {
  const [valueApp, setValueApp] = useState(null);
  const [isFocusApp, setIsFocusApp] = useState(true)

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const renderLabel = () => {
    if (valueApp || isFocusApp) {
      return (
        <></>
      );
    }
    return null;
  };
  return (
    <View style={[appStyle.column, { alignItems: 'flex-start', width: windowHeight - 100, height: windowHeight - 220, marginLeft: 100, }]}>
      <View style={[appStyle.row, appStyle.boxShadow, { backgroundColor: COLOR.bgOptionSetting, justifyContent: 'space-between', width: windowHeight - 100, }]}>
        <Text style={[appStyle.text, { fontSize: 18 }]}>Withdraw</Text>
        <View style={[appStyle.row, { alignItems: 'center' }]}>
          <Text style={[appStyle.text, { marginRight: 17 }]}>Auto</Text>
          <Switch
            style={{ marginTop: 5, left: -10 }}
            trackColor={{ false: '#767577', true: '#059669' }}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={[appStyle.row, appStyle.boxShadow, { backgroundColor: COLOR.bgOptionSetting, justifyContent: 'space-between', width: windowHeight - 100, marginTop: 24, paddingVertical: 20 }]}>
        <Text style={[appStyle.text, { fontSize: 18 }]}>Pay up to 1 day</Text>
        <View style={[styles.container, {}]}>
          {renderLabel()}
          <Dropdown
            style={[appStyle.dropdown, { width: 180, borderRadius: 8, paddingVertical: 0 }, isFocusApp && { borderColor: COLOR.primary, height: 40 }]}
            placeholderStyle={appStyle.placeholderStyle}
            selectedTextStyle={appStyle.selectedTextStyle}
            inputSearchStyle={appStyle.inputSearchStyle}
            data={optionsApp}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocusApp ? 'Role' : '...'}
            searchPlaceholder="Search..."
            value={valueApp}
            onFocus={() => setIsFocusApp(true)}
            onBlur={() => setIsFocusApp(false)}
            onChange={item => {
              setValueApp(item.valueApp);
              setIsFocusApp(false);
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, TextInput } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../theme/appStyle'
import { COLOR } from '../theme/color';

const AccountUser = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView style={appStyle.boxInfo} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={[appStyle.row, { alignItems: 'flex-start', marginBottom: 41, }]}>
        <View style={[appStyle.boxShadow, { width: '40%' }]}>
          <Text style={[appStyle.text, { marginBottom: 16 }]}>Change password</Text>
          <TouchableOpacity style={[appStyle.button, { width: '100%' }]}>
            <Text style={[appStyle.titleButton, { paddingHorizontal: 18, fontSize: 10 }]}>Send link for reset password</Text>
          </TouchableOpacity>
        </View>
        <View style={[appStyle.boxShadow, { marginLeft: 100, flexDirection: 'row', paddingHorizontal: 30, width: '40%' }]}>
          <View style={appStyle.column}>
            <Text style={[appStyle.text, { marginBottom: 16 }]}>Banned</Text>
            <Switch
              style={{ marginTop: 5, left: -10 }}
              trackColor={{ false: '#767577', true: '#059669' }}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={[appStyle.column, { marginLeft: 136 }]}>
            <Text style={[appStyle.text, { marginBottom: 16, }]}>Activated</Text>
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
      </View>
      <View style={[appStyle.row, { alignItems: 'flex-start', marginBottom: 41, }]}>
        <View style={[appStyle.boxShadow, { width: '40%' }]}>
          <Text style={[appStyle.text, { marginBottom: 16 }]}>Change password</Text>
          <View style={[appStyle.textInput, { marginBottom: 20 }]}>
            <TextInput style={{ paddingLeft: 10, }} placeholder='New password' />
          </View>
          <View style={[appStyle.textInput, { marginBottom: 20 }]}>
            <TextInput style={{ paddingLeft: 10, }} placeholder='Re-enter new password' />
          </View>
          <TouchableOpacity style={[appStyle.button, { width: '70%', alignSelf: 'center' }]}>
            <Text style={[appStyle.titleButton, { paddingHorizontal: 18, fontSize: 10 }]}>Reset password</Text>
          </TouchableOpacity>
        </View>

        <View style={[appStyle.boxShadow, { marginLeft: 100, width: '40%' }]}>
          <Text style={[appStyle.text, { marginBottom: 16 }]}>Login device</Text>
          <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
            <Text style={appStyle.text}>Macbook Pro</Text>
            <Text style={[appStyle.text, { fontSize: 12, color: COLOR.normalText }]}>Ho Chi Minh, Vietnam • 18/05/2023</Text>
          </View>
          <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
            <Text style={appStyle.text}>IPhone 7 Plus</Text>
            <Text style={[appStyle.text, { fontSize: 12, color: COLOR.normalText }]}>Ho Chi Minh, Vietnam • 18/05/2023</Text>
          </View>
        </View>
      </View>
      <View style={[appStyle.row, { alignItems: 'flex-start', marginBottom: 41, }]}>
        <View style={[appStyle.boxShadow, { width: '40%' }]}>
          <Text style={[appStyle.text, { marginBottom: 16 }]}>Change email</Text>
          <TouchableOpacity style={[appStyle.button, { width: '100%' }]}>
            <Text style={[appStyle.titleButton, { paddingHorizontal: 18, fontSize: 10 }]}>Send link for reset email</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[appStyle.row, { alignItems: 'flex-start', marginBottom: 41, }]}>
        <View style={[appStyle.boxShadow, { width: '40%', marginBottom: 100 }]}>
          <Text style={[appStyle.text, { marginBottom: 16 }]}>Change email</Text>
          <View style={[appStyle.textInput, { marginBottom: 20 }]}>
            <TextInput style={{ paddingLeft: 10, }} placeholder='Enter new email' />
          </View>
          <View style={[appStyle.textInput, { marginBottom: 20 }]}>
            <TextInput style={{ paddingLeft: 10, }} placeholder='Re-enter new email' />
          </View>
          <TouchableOpacity style={[appStyle.button, { width: '70%', alignSelf: 'center' }]}>
            <Text style={[appStyle.titleButton, { paddingHorizontal: 18, fontSize: 10 }]}>Reset email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default AccountUser

const styles = StyleSheet.create({

})
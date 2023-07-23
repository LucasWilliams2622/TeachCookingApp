import { StyleSheet, Text, View, Switch, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { appStyle } from '../theme/appStyle'
import { COLOR } from '../theme/color'

const KYCUser = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <ScrollView style={styles.boxInfo} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={[appStyle.row, { justifyContent: 'space-between' }]}>
        <View style={appStyle.row}>
          <Text style={[appStyle.text, { fontSize: 16 }]}>Information</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={[appStyle.text, { fontSize: 10, marginLeft: 10, color: COLOR.deleteText }]}  >Delete</Text>
          </TouchableOpacity>
        </View>
        <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
          <Text style={[appStyle.text, { fontSize: 16 }]}>Verified KYC</Text>
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
      <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
        <View style={[appStyle.row, { alignItems: 'center', justifyContent: 'center', marginBottom: 8 }]}>
          <View style={appStyle.middleDot}></View>
          <Text style={appStyle.normalText}>Role: premium</Text>
        </View>
        <View style={[appStyle.row, { alignItems: 'center', justifyContent: 'center', marginBottom: 8 }]}>
          <View style={appStyle.middleDot}></View>
          <Text style={appStyle.normalText}>Fullname: Bảo Trân</Text>
        </View>
        <View style={[appStyle.row, { alignItems: 'center', justifyContent: 'center', marginBottom: 8 }]}>
          <View style={appStyle.middleDot}></View>
          <Text style={appStyle.normalText}>ID: 12654</Text>
        </View>
        <View style={[appStyle.row, { alignItems: 'center', justifyContent: 'center', marginBottom: 8 }]}>
          <View style={appStyle.middleDot}></View>
          <Text style={appStyle.normalText}>Address: abc, Son Ky Ward, Tan Phú District, Ho Chi Minh City</Text>
        </View>
        <View style={[appStyle.row, { alignItems: 'center', justifyContent: 'center', marginBottom: 8 }]}>
          <View style={appStyle.middleDot}></View>
          <Text style={appStyle.normalText}>Country: Vietnam</Text>
        </View>
        <View style={[appStyle.row, { alignItems: 'center', justifyContent: 'center', marginBottom: 8 }]}>
          <View style={appStyle.middleDot}></View>
          <Text style={appStyle.normalText}>IP: 118.68.107.120</Text>
        </View>
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 40 }]}>
        <View style={appStyle.row}>
          <Text style={[appStyle.text, { fontSize: 16 }]}>Email</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={[appStyle.text, { fontSize: 10, marginLeft: 10, color: COLOR.deleteText }]}  >Delete</Text>
          </TouchableOpacity>
        </View>
        <Text style={[appStyle.normalText, { marginTop: 12 }]}>abc@gmail.com</Text>
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 40 }]}>
        <View style={appStyle.row}>
          <Text style={[appStyle.text, { fontSize: 16 }]}>Phone</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={[appStyle.text, { fontSize: 10, marginLeft: 10, color: COLOR.deleteText }]}  >Delete</Text>
          </TouchableOpacity>
        </View>
        <Text style={[appStyle.normalText, { marginTop: 12 }]}>0987654321</Text>
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 40 }]}>
        <View style={appStyle.row}>
          <Text style={[appStyle.text, { fontSize: 16 }]}>Images</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={[appStyle.text, { fontSize: 10, marginLeft: 10, color: COLOR.deleteText }]}  >Delete</Text>
          </TouchableOpacity>
        </View>

        <View style={[appStyle.row, { justifyContent: 'space-between' }]}>
          <View style={[appStyle.column, { alignItems: "flex-start", }]}>
            <View style={[appStyle.row, { alignItems: 'center', justifyContent: 'center', marginTop: 25 }]}>
              <Text style={[appStyle.normalText, { marginTop: 12 }]}>Front side of ID Nation</Text>
              <Image style={[appStyle.icon, { marginLeft: 13, top: 6 }]} source={require('../assets/icons/Ok.png')} />
            </View>
            <Image style={[appStyle.licenseImage, { marginLeft: 13, top: 6, left: -10 }]} source={require('../assets/images/frontSide.png')} />
          </View>
          <View style={[appStyle.column, { alignItems: "flex-start", marginLeft: 150 }]}>
            <View style={[appStyle.row, { alignItems: 'center', justifyContent: 'center', marginTop: 25 }]}>
              <Text style={[appStyle.normalText, { marginTop: 12 }]}>Back side of ID Nation</Text>
              <Image style={[appStyle.icon, { marginLeft: 13, top: 6 }]} source={require('../assets/icons/Ok.png')} />
            </View>
            <Image style={[appStyle.licenseImage, { marginLeft: 13, top: 6, left: -10 }]} source={require('../assets/images/backSide.png')} />
          </View>
        </View>
        <View style={[appStyle.column, { marginBottom: 100, alignItems: 'flex-start' }]}>
          <View style={[appStyle.row, { marginTop: 45, }]}>
            <Text style={[appStyle.normalText, { marginTop: 12 }]}>Bill</Text>
            <TouchableOpacity style={[appStyle.button, { paddingVertical: 8, paddingHorizontal: 12, top: 5, marginLeft: 10 }]}>
              <Text style={[appStyle.titleButton, { fontSize: 10, }]}>Verification</Text>
            </TouchableOpacity>
          </View>
          <Text style={[appStyle.normalText, { marginTop: 12, fontSize: 14, }]}>(Internet/Electricity/Gas/Driver license ... with your real Full Name and address like your ID Nation/Passport)</Text>
          <Image style={[appStyle.licenseImage, { marginLeft: 13, top: 6, marginTop: 16, left: -10 }]} source={require('../assets/images/license.png')} />

        </View>

      </View>
    </ScrollView>
  )
}

export default KYCUser

const styles = StyleSheet.create({
  boxInfo: {
    width: '75%',
    paddingLeft: 88,

  },

})
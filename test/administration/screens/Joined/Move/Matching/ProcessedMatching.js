import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appStyle } from '../../../../theme/appStyle'

const Processed = () => {
  return (
    <View style={[appStyle.boxShadow, { borderWidth: 0.5, marginRight: 5 ,paddingVertical:22,width:820,marginTop:16}]}>
      <Text style={appStyle.textSmall}>POST-2323083773</Text>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 22 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Title</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>Tìm xe đi SG</Text>
      </View>
      <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 22 }]}>
        <Text style={[appStyle.normalText, { fontSize: 10, }]}>Created date</Text>
        <Text style={[appStyle.text, { fontSize: 14, }]}>09:20 am, 15/06/2023</Text>
      </View>
    </View>
  )
}

export default Processed

const styles = StyleSheet.create({})
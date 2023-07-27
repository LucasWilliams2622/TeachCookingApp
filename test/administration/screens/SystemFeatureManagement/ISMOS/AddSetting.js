import { StyleSheet, Text, TextInput, View ,SafeAreaView} from 'react-native'
import React from 'react'
import { appStyle } from '../../../theme/appStyle'
import { COLOR } from '../../../theme/color'
import ButtonPrimary from '../../../components/ButtonPrimary'

const AddSetting = () => {
    return (
        <SafeAreaView style={[appStyle.boxSysFeature,{marginLeft:200}]}>
            <View>
                <Text style={[appStyle.titleLabel, { fontSize: 14, marginBottom: 7 }]}>Level</Text>
                <TextInput style={[appStyle.textInput2, { width: 470 }]} placeholder='Enter new level' placeholderTextColor={COLOR.normalText} />
            </View>

            <View style={{marginTop:30}}>
                <Text style={[appStyle.titleLabel, { fontSize: 14, marginBottom: 7 }]}>Conmission (%)</Text>
                <TextInput style={[appStyle.textInput2, { width: 470 }]} placeholder='10' placeholderTextColor={COLOR.normalText} />
            </View>
            <ButtonPrimary style={{marginTop:200,width:470}}  title="Confirm" onPress={()=>{{}}}/>
        </SafeAreaView>
    )
}

export default AddSetting

const styles = StyleSheet.create({})
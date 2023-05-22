import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { ICON, IMAGES, COLOR } from '../../../constants/Themes'
import { Icon } from 'react-native-vector-icons/icon'

const Profile = () => {
  return (
    
        
  
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/** Header*/}
        <View style={styles.header}>
              <Image style={styles.icon} source={ICON.Goback} />

            <TouchableOpacity style={styles.buttonAdd}>
              <Text style={styles.textButton}>cập nhật</Text>
            </TouchableOpacity>
          </View>

        {/** Body*/}
          <View style={styles.body}>
            <View style={styles.head}>
              <Image style={styles.avatar} source={IMAGES.Avatar} />
              <View style={styles.info}>
                <Text style={styles.name}>PAUL WALKER</Text>
                <Text style={styles.keyname}>@LearnCook</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton2}>xem trang bếp</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line}>
              <Text style={styles.textField}>Full Name</Text>
              <TextInput style={styles.textHint}>Martias Duarte</TextInput>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>  
                <View style={{flex:  1, height: 1, backgroundColor: 'white'}} />
              </View>
            </View>
            <View style={styles.line}>
              <Text style={styles.textField}>ID Cookpad</Text>
              <TextInput style={styles.textHint}>@LearnCook</TextInput>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>  
                <View style={{flex:  1, height: 1, backgroundColor: 'white'}} />
              </View>
            </View>
            <View style={styles.line}>
              <Text style={styles.textField}>Email</Text>
              <TextInput style={styles.textHint}>paulwalker@gmail.com</TextInput>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>  
                <View style={{flex:  1, height: 1, backgroundColor: 'white'}} />
              </View>
            </View>
            <View style={styles.linebox1}>
              <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Đến từ:.."
              placeholderTextColor = "gray"

              keyboardType="numeric"/>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>  
                <View style={{flex:  1, height: 1, backgroundColor: 'white'}} />
              </View>
            </View>
            <View style={styles.linebox2}>
              <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Vài dòng về đam mê nấu nướng
              "
              placeholderTextColor="gray" 
              keyboardType="numeric"/>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>  
                <View style={{flex:  1, height: 1, backgroundColor: 'white'}} />
              </View>
            </View>
            
           
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
  },
  
  header: {
    backgroundColor:COLOR.HEADER,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  icon: {
    marginHorizontal: 10,
    marginVertical: 23,
    height: 22,
    width: 40,
    tintColor: COLOR.WHITE,
    
  },
  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    height : 37,
    width: 106,
    backgroundColor: COLOR.GRAY1,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 15,
  },
  textButton: {
    color: COLOR.HEADER,
    fontSize: 15,
  },

  /*Body*/
  body: {
    height: '100%',
  },
  head: {
    flexDirection: 'row',
  },
  info: {
    flexDirection: 'column',
  },
  avatar: {
    marginVertical: 25,
    marginHorizontal: 32,
    height: 117,
    width: 116,
    borderRadius: 100,
    flexDirection: 'row',
   
  },
  line: {
    width: '80%',
    marginHorizontal: 32,
  },
  linebox1: {
    marginVertical: 30,
    width: '80%',
    marginHorizontal: 32,
  },
  linebox2: {
    marginVertical: 3,
    width: '80%',
    marginHorizontal: 32,
  },
  name: {
    marginVertical: 31,
    fontSize: 20,
    lineHeight: 30,
    color: COLOR.WHITE,
  },
  keyname: {
    marginVertical: -25,
    color: COLOR.WHITE,
  },
  button: {
    marginVertical: 39,
    borderWidth: 1,
    borderRadius: 10,
    letterSpacing: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height : 40,
    width: 127,
    borderColor: COLOR.WHITE,
    
  },
  textButton2: {
    color: COLOR.WHITE,
    fontSize: 15,
  },
  textField: {
    marginVertical: 9,
    marginHorizontal: 0,
    color: COLOR.BACKGROUND3,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1,
  },
  textHint: {
    marginVertical: 0,
    marginHorizontal: 0,
    color: COLOR.WHITE,
    fontSize: 20,
    lineHeight: 20,
  },
  textInput: {
    marginVertical: 0,
    marginHorizontal: 26,
    fontSize: 20,
  },

  input: {
    height: 50,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    paddingBottom: 16,
    padding: 12,
    fontSize:17,
    paddingBottom: 0,
  },
})
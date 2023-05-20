import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'

const AddNew = () => {
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          {/** Header*/}

          <View style={styles.header}>
            <Image style={styles.icon} source={require('../../asset/icon/icon_back.png')} />

            <TouchableOpacity style={[styles.buttonAdd, { marginLeft: 100, backgroundColor: '#202020' }]}>
              <Text style={[styles.textButton, { color: "#FCF0F0", fontFamily: 'Poppins' }]}>Lưu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonAdd, { backgroundColor: '#837B7B' }]}>
              <Text style={[styles.textButton, { fontFamily: 'Poppins' }]}>Đăng món</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.anh}>
            <TouchableOpacity style={styles.btnimage}>
              <Image style={styles.image} source={require('../../asset/image/chef.png')} />
              <Text style={{ color: '#FFF6F6' }}>Choose images to upload...</Text>

            </TouchableOpacity>

          </View>
          <View>
            <TextInput style={styles.textinput} placeholder='Name' placeholderTextColor={'white'}></TextInput>

          </View>
          <View>
            <TextInput numberOfLines={4} editable
        multiline
              style={[styles.textinput, { height: 200, textAlign: 'auto' }]} placeholder='Share the story behind your recipe and what makes it special.' placeholderTextColor={'white'}></TextInput>

          </View>
          <View>
          <View style={[styles.header,{marginTop:15}]}>
            <Text style={{color:'#FFFDFD', fontSize:17,marginTop:14}}>Khẩu phần</Text>
            <TextInput placeholderTextColor={'white'} placeholder='2 người' style={[styles.textinput,{borderRadius:5,width:200,height:37}]}></TextInput>
        

          </View>
          <View style={[styles.header,{marginTop:15}]}>
            <Text style={{color:'#FFFDFD', fontSize:17,marginTop:14}}>Thời gian nấu</Text>
            <TextInput placeholderTextColor={'white'} placeholder='1 tiếng 30 phút' style={[styles.textinput,{borderRadius:5,width:200,height:37}]}></TextInput>
        

          </View>
          <View style={{height:5,backgroundColor:'#6C6969',marginTop:20,marginStart:0,marginEnd:0}}>

          </View>

          <View>
            <Text style={{color:'#FFFDFD',fontSize:20, marginTop:10,fontFamilyn: 'lucida grande'}}>Nguyên liệu</Text>
            <View style={[styles.header,{marginTop:10}]}>
            <Image style={[styles.image,{width:20,height:20,marginTop:15,marginLeft:10}]} source={require('../../asset/icon/list2.png')} />
            <TextInput placeholderTextColor={'white'} placeholder='1kg ớt' style={[styles.textinput,{borderRadius:5,width:300,height:37}]}></TextInput>
        

          </View>
          <View style={[styles.header,{marginTop:10}]}>
            <Image style={[styles.image,{width:20,height:20,marginTop:15,marginLeft:10}]} source={require('../../asset/icon/list2.png')} />
            <TextInput placeholderTextColor={'white'} placeholder='250g đường' style={[styles.textinput,{borderRadius:5,width:300,height:37}]}></TextInput>
        

          </View>

          <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
         <TouchableOpacity>
         <Text style={{color:'#FFFDFD', fontSize:17,marginTop:20}}>+ Khẩu phần</Text>
        
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={{color:'#FFFDFD', fontSize:17,marginTop:20}}>+ Nguyên liệu</Text>
        
         </TouchableOpacity>
        
        

        
            
          </View>
          
          </View>

          <View style={{height:5,backgroundColor:'#6C6969',marginTop:20,marginStart:0,marginEnd:0}}></View>
          <View>
          <Text style={{color:'#FFFDFD',fontSize:20, marginTop:10,fontFamilyn: 'lucida grande'}}>Cách làm</Text>
          <View style={{flexDirection: 'row',justifyContent:'flex-start'}}>
            <View style={{flexDirection: 'column'}}>
            <Image style={[styles.image,{width:20,height:20,marginTop:15,marginLeft:10}]} source={require('../../asset/icon/1.png')} />
            <Image style={[styles.image,{width:20,height:20,marginTop:15,marginLeft:10}]} source={require('../../asset/icon/list2.png')} />
            </View>
            <TextInput placeholderTextColor={'white'} placeholder='250g đường' style={[styles.textinput,{marginLeft:55,borderRadius:5,width:300,height:70,textAlign:'auto'}]}></TextInput>



          </View>
          <View style={{flexDirection: 'row',justifyContent:'flex-start'}}>
            <View style={{flexDirection: 'column'}}>
            <Image style={[styles.image,{width:20,height:20,marginTop:15,marginLeft:10}]} source={require('../../asset/icon/2.png')} />
            <Image style={[styles.image,{width:20,height:20,marginTop:15,marginLeft:10}]} source={require('../../asset/icon/list2.png')} />
            </View>
            <TextInput placeholderTextColor={'white'} placeholder='250g đường' style={[styles.textinput,{marginLeft:55,borderRadius:5,width:300,height:70,textAlign:'auto'}]}></TextInput>



          </View>
          <View style={{flexDirection: 'row',justifyContent:'flex-start'}}>
            <View style={{flexDirection: 'column'}}>
            <Image style={[styles.image,{width:20,height:20,marginTop:15,marginLeft:10}]} source={require('../../asset/icon/3.png')} />
            <Image style={[styles.image,{width:20,height:20,marginTop:15,marginLeft:10}]} source={require('../../asset/icon/list2.png')} />
            </View>
            <TextInput placeholderTextColor={'white'} placeholder='250g đường' style={[styles.textinput,{marginLeft:55,borderRadius:5,width:300,height:70,textAlign:'auto'}]}></TextInput>

            

          </View>
          <TouchableOpacity>
         <Text style={{color:'#FFFDFD', fontSize:17,marginTop:20,textAlign:"center"}}>+ Nguyên liệu</Text>
        
         </TouchableOpacity>
          </View>


          </View>

         




        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default AddNew

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    marginStart: 10,
    marginEnd: 10,
    flexDirection: 'column'
  },
  main: {
    backgroundColor: '#373737',


    borderWidth: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',



  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#EBEFF5'
  },
  image: {
    width: 74,
    height: 72,


  },
  buttonAdd: {

    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    borderColor: COLOR.PRIMARY
  },
  btnimage: {
    marginTop: 30,
    alignItems: "center"
  },
  textButton: {
    fontWeight: '600',
    textAlign: 'center'

  },
  anh: {
    marginTop: 2,
    width: 389,
    backgroundColor: "#6C6969",
    height: 180

  },
  textinput: {
    width: 390,
    height: 100,
    backgroundColor: "#6C6969",
    marginTop: 10,
    borderRadius: 10,
    color: "#FFF6F6"
    , textAlign: 'center',
    fontSize: 15

  }

})
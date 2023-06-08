import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../constants/Themes'
const windowWIdth = Dimensions.get('window').width;
const ItemIngredient = (props) => {
    const { data } = props;
  
    const handleQuantityChange = (text) => {
      setQuantity(text);
    };
  
    const handleUnitChange = (text) => {
      setUnit(text);
    };
  
    const handleNameChange = (text) => {
    setName(text);
    };
  
    const sendData = () => {
      const newIngredient = {
        quantity: props.quantity,
        unit: props.unit,
        name: props.name,
      };
      props.handleAddIngredient(newIngredient);
    };
  
    return (
      <View style={[styles.item, {}]}>
        <Image style={[styles.icon]} source={require('../asset/icon/icon_menu.png')} />
        <TextInput
          placeholderTextColor={COLOR.GRAY1}
          placeholder='1'
          style={[styles.textinput]}
          value={props.quantity}
          onChangeText={handleQuantityChange}
        />
        <TextInput
          placeholderTextColor={COLOR.GRAY1}
          placeholder='kg'
          style={[styles.textinput]}
          value={props.unit}
          onChangeText={handleUnitChange}
        />
        <TextInput
          placeholderTextColor={COLOR.GRAY1}
          placeholder='Chanh'
          style={[styles.textinput]}
          value={props.name}
          onChangeText={handleNameChange}
        />
        <TouchableOpacity onPress={sendData}>
          <Text style={{ color: 'white' }}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };
  

export default ItemIngredient

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: windowWIdth - 20,
        alignItems: 'center',
        // borderWidth: 2, borderColor: 'white',
        marginBottom: 25,

    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,

    },
    textinput: {
        width: '26%',
        height: 40,
        backgroundColor: COLOR.BACKGROUND6,
        marginTop: 10,
        borderRadius: 7,
        fontSize: 15,
        color: COLOR.WHITE,
        marginRight: 15,
        borderWidth: 0.4,
        borderColor: COLOR.GRAY1,
        paddingHorizontal: 10,

    }

})
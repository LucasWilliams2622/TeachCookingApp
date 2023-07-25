import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonBlue = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{color:"white",fontSize:18,}}>Load More</Text>
    </TouchableOpacity>
  )
}

export default ButtonBlue

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#2696ff",
        paddingVertical:16,
        paddingHorizontal:80,
        borderRadius:10 ,
        alignSelf:'center',
        position:'absolute',
        bottom:-180,
        
        marginBottom:200
    }
})
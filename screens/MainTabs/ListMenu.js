import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListMenu = () => {
  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}/>
    </View>
  )
}

export default ListMenu

const styles = StyleSheet.create({})
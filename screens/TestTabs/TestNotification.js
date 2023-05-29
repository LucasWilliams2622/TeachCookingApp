import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { requestUserPermission, NotoficationListener, } from '../../src/utils/pushnotification_helper'

const TestNotification = () => {
  useEffect(() => {
    requestUserPermission();
    NotoficationListener();
  }, [])
  return (
    <View>
      <Text>TestNotification</Text>
    </View>
  )
}

export default TestNotification

const styles = StyleSheet.create({})
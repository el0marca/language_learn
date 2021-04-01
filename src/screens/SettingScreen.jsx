import React from 'react'
import { Button } from 'react-native';
import { Text, View } from 'react-native';

export const SettingScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is setting screen {navigation.name}</Text>
    </View>
  )
};
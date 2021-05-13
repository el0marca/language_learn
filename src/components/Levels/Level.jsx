import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const Level = ({ level, num }) => {
  const navigation = useNavigation()
  return (
        <TouchableOpacity style={s.container} activeOpacity={.5} onPress={() => navigation.navigate('Lessons', { num: num, level: level })}>
          <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
            <Image style={{width: 50, height: 50}} source={require('../../img/award.png')} />
            <Text style={s.text}>{level}</Text>
          </View>
          <View style={{ flex:1 }}>
            <Image style={{width: 50, height: 50}} source={require('../../img/next-641.png')} />
          </View>
        </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex:1, 
    paddingVertical:20 
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    flex: 1,
    fontFamily: 'SFUIDisplay-Bold',
    color: '#fff'
  },
  img: {
    width: 60,
    height: 60,
    flex:1
  }
})
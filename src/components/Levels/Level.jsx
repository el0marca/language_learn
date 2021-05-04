import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import { Circle } from '../Common/Circle'
import { useNavigation } from '@react-navigation/native'

export const Level = ({ level, num, percent, bColor }) => {
    const navigation = useNavigation()
    return (
      <View  style={s.container}>
        <View style={{backgroundColor:bColor, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, borderRadius:20, height:'100%'}}>
          <Circle percent={percent} type='levels' />
          <TouchableOpacity style={s.touchble} onPress={() => navigation.navigate('Lessons', { num: num, level: level })}>
            <Text style={s.text}>{level}</Text>
            <View style={{justifyContent:'center'}}><Image style={s.img} source={require('../../img/next-641.png')} /></View>
          </TouchableOpacity>
        </View>
      </View>
      )
  }

  const s = StyleSheet.create({
      container:{
        justifyContent: 'center',
        alignItems:'center',
        width: '90%', 
        paddingBottom:'1%',
        flex: 0.8
      },
      touchble:{
        flexDirection: 'row', 
        flex: 1
      },
      text:{
        fontSize: 23, 
        textAlign: 'center', 
        flex: 4.9,
        fontFamily: 'SFUIDisplay-Bold', 
        color: '#fff'
      },
      img:{
        width: 28, 
        height: 28
      }
  })
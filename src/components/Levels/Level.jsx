import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, FlatList, ImageBackground, Image } from 'react-native'
import { Circle } from '../Common/Circle'
import { useNavigation, useRoute } from '@react-navigation/native'

export const Level = ({ level, num, percent, bColor }) => {
    const navigation = useNavigation()
    return (
      <View  style={s.container}>
        <View style={{backgroundColor:bColor, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, elevation: 5, borderRadius:10, height:'100%'}}>
          <Circle num={0} percent={percent} radius={28} />
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
        width: '95%', 
        paddingBottom:'1%',
        flex:1
      },
      touchble:{
        flexDirection: 'row', flex: 1
      },
      text:{
        fontSize: 23, textAlign: 'center', flex: 4.9,
        fontFamily: 'SFUIDisplay-Bold', color: '#fff'
      },
      img:{
        width: 28, height: 28
      }
  })
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export const Task = ({ routeName, setDisable, lessonIndex, setSuccess, header, descr }) => {
  const navigation = useNavigation()
  const locked = <Image style={s.images} source={require('../../img/locked1.png')} />
  const ready = <Image style={s.images} source={require('../../img/okk.png')} />
  const studying = <Image style={s.images} source={require('../../img/studying1.png')} />
  return (
    <View style={s.wrapper}>
      <TouchableOpacity activeOpacity={0.8} disabled={setDisable} style={s.touchble} onPress={() => navigation.navigate(`${routeName}`, { lessonIndex: lessonIndex })}>
        <View style={{ borderWidth: 5, borderColor: setDisable && '#ffe3e0' || !setSuccess && '#ccfff6' || setSuccess && '#F7F9FA', borderStyle: 'solid', borderRadius: 999, justifyContent: 'center', alignItems: 'center', padding: 2 }}>{setDisable && locked || !setSuccess && ready || setSuccess && studying}</View>
        <View style={s.descr}>
        <Text style={{fontSize: 16, color: '#555',fontFamily:'SFUIDisplay-Bold'}}>
          {header}</Text>
        <Text style={{color:'#737479',fontFamily:'SFUIDisplay-ZillaSlab-Light',paddingTop:5,fontSize:15}}>{descr}</Text>
        </View>
        <View style={{ paddingRight: 15 }}>
          <View style={{ borderWidth: 4, borderStyle: 'dotted', borderRadius: 999, justifyContent: 'center', alignItems: 'center', padding: 2, borderColor: '#ccfff6' }}>
            <Image style={{ height: 30, width: 30 }} source={require('../../img/next5.png')} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const s = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,255,0.03)',
    height: 100,
    flexDirection: 'row',
    paddingLeft: 13,
    marginHorizontal: 15,
    borderRadius: 20,
    marginBottom: 5
  },
  touchble: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  descr: {
    flex: 1,
    flexDirection:'column',
    paddingLeft:10
  },
  images: {
    height: 35,
    width: 35
  }
})
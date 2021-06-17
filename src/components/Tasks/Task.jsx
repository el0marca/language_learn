import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export const Task = ({ routeName, setDisable, lessonIndex, setSuccess, header }) => {
  const navigation = useNavigation()
  const locked = <Image style={s.images} source={require('../../img/locked1.png')} />
  const ready = <Image style={s.images} source={require('../../img/okk.png')} />
  const studying = <Image style={s.images} source={require('../../img/studying1.png')} />
  return (
    <View style={s.wrapper}>
      <TouchableOpacity activeOpacity={0.5} disabled={setDisable} style={s.touchble} onPress={() => navigation.navigate(`${routeName}`, { lessonIndex: lessonIndex })}>
       <View style={{ borderWidth:5, borderColor:setDisable&&'#ffe3e0'||!setSuccess&&'#ccfff6'||setSuccess &&'#F7F9FA', borderStyle:'solid', borderRadius:999, justifyContent:'center', alignItems:'center', padding:2 }}>{setDisable && locked || !setSuccess && ready || setSuccess && studying }</View>
        <Text style={s.descr}>{header}</Text>
        <View style={{ paddingRight: 15 }}>
          <View style={{borderWidth:4,borderStyle:'solid', borderRadius:999, justifyContent:'center', alignItems:'center', padding:2, borderColor:'#ccfff6'}}><Image style={{ height: 30, width: 30 }} source={require('../../img/next5.png')} /></View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const s = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    height: 90,
    flexDirection: 'row',
    paddingLeft: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    marginBottom: 2,
  },
  touchble: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  descr: {
    fontSize: 15,
    color: '#444',
    flex: 1,
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Regular',
  },
  images: {
    height: 35,
    width: 35
  }
})
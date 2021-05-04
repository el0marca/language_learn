import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export const Task = ({ routeName, setDisable, lessonIndex, num, setSuccess, header }) => {
  const navigation = useNavigation()
  const locked = <Image style={s.images} source={require('../../img/locked1.png')} />
  const ready = <Image style={s.images} source={require('../../img/okk.png')} />
  const studying = <Image style={s.images} source={require('../../img/studying1.png')} />
  return (
    <View style={s.wrapper}>
      <TouchableOpacity activeOpacity={0.5} disabled={setDisable} style={s.touchble} onPress={() => navigation.navigate(`${routeName}`, { lessonIndex: lessonIndex, num: num })}>
        <View>{setDisable ? locked : !setSuccess ? ready : setSuccess ? studying : null}</View>
        <Text style={s.descr}>{header}</Text>
        <View style={{ paddingRight: 15 }}>
          <Image style={{ height: 35, width: 35 }} source={require('../../img/next5.png')} />
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
    borderColor: 'rgba(0, 0, 255, 0.1)'
  },
  touchble: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  descr: {
    fontSize: 16,
    color: '#00264d',
    flex: 1,
    paddingRight: 10,
    paddingLeft: 5,
    textAlign: 'center',
    fontFamily: 'SFUIDisplay-Regular',
  },
  images: {
    height: 40,
    width: 40
  }
})
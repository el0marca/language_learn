import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { setBottomTabVisible } from '../../redux/bottomTab'

export const Task = ({ routeName, setDisable, lessonIndex, num, setSuccess, header}) => {
    const dispatch= useDispatch()
    const navigation = useNavigation()
    const locked = <Image style={s.images} source={require('../../img/locked1.png')}/>
    const ready = <Image style={s.images} source={require('../../img/success.png')}/>
    const studying = <Image style={s.images} source={require('../../img/studying1.png')}/>
    return (
        <View style={s.wrapper}>
        <TouchableOpacity activeOpacity={0.5} disabled={setDisable} style={s.touchble} onPress={() => navigation.navigate(`${routeName}`, { lessonIndex: lessonIndex, num: num } )}>
            <View>{setDisable?locked:!setSuccess?ready:setSuccess?studying:null}</View>
            <Text style={s.descr}>{header}</Text>
            <View style={{paddingRight:10}}>
                <Image style={{ height: 40, width: 40 }} source={require('../../img/next1.png')}/>
            </View>
        </TouchableOpacity>
        </View>
    )
}
const s = StyleSheet.create({
    wrapper: {
      alignItems: 'center', justifyContent: 'flex-start', 
      backgroundColor: 'rgba(255, 255, 255, 0.95)', height: 90, flexDirection: 'row', paddingLeft: 10, borderRadius:20, marginTop:1, marginHorizontal:5
    },
    touchble: {
      flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'
    },
    descr: {
      fontSize: 17, color: '#000', flex: 1, paddingLeft: 20, paddingRight:10, textAlign:'center',fontFamily:'SFUIDisplay-Regular'
    },
    images: {
      height: 50, width: 50
    }
  })
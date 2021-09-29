import React, { useState, useEffect, useReducer } from 'react'
import { Button, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { Text, View, StyleSheet } from 'react-native'
import database from '@react-native-firebase/database'
import auth, { firebase } from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { downloadProgress, updateBeginnerProgress } from '../redux/progress'
import { useDispatch, useSelector } from 'react-redux'
import { setCommonProgress } from '../redux/progress'
import { setUserInfo } from '../redux/auth'
import { changeVoice } from '../redux/voice'
import { Back } from '../components/Common/Back'
const radioTrue = require('../img/radioTrue.png')
const radioFalse = require('../img/radioFalse.png')

export const SettingScreen = ({ navigation, route }) => {
  const progress = useSelector(state => state.progress)
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.auth.user)
  const [text, onChangeText] = React.useState('1')
  const voice = useSelector(state => state.voice.value)
  return (
    <ImageBackground source={require('../img/bg/tasksBg.jpg')} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
        <View style={{ position: 'absolute', left: 20, bottom: 15, zIndex: 1 }}>
          <Back />
        </View>
        <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center', fontFamily: 'SFUIDisplay-Bold', paddingBottom: 15 }}>Ayarlar</Text>
      </View>
      <View style={{ alignItems: 'center', flex: 7, justifyContent: 'flex-start', backgroundColor: '#fff', borderRadius: 40 }}>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: '85%' }}>
          <Text style={{ textAlign: 'center', marginTop: 20, marginBottom: 10, fontSize: 22, fontFamily: 'SFUIDisplay-Regular', color: '#0f3073' }}>Tələffüz:</Text>
          <TouchableOpacity activeOpacity={0.9} onPress={() => dispatch(changeVoice('us/male'))} style={{ flexDirection: 'row', marginBottom: 20 }}>
            <Image style={{ width: 25, height: 25, marginRight: 10 }} source={voice == 'us/male' && radioTrue || radioFalse} />
            <Text style={{ fontSize: 20, fontFamily: 'SFUIDisplay-Regular', color: '#444' }}>Amerikan İngiliscəsi</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={() => dispatch(changeVoice('uk/male'))} style={{ flexDirection: 'row' }}>
            <Image style={{ width: 25, height: 25, marginRight: 10 }} source={voice == 'uk/male' && radioTrue || radioFalse} />
            <Text style={{ fontSize: 20, fontFamily: 'SFUIDisplay-Regular', color: '#444' }}>Britaniya İngiliscəsi</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={{marginTop:150}}
          onChangeText={onChangeText}
          value={text} />
        <Button title='setmyprogress' onPress={() => dispatch(updateBeginnerProgress(Number(text)))} />
        {/* <Text>Welcome {userInfo.email}</Text> */}
        {/* <Button title='signOut' onPress={signOut} /> */}
        {/* <Button title='setData' onPress={setData} /> */}
        {/* <Button title='getData' onPress={()=>getData(userInfo.uid)} /> */}
        {/* <Button title='remooveValue' onPress={() => removeFew()} /> */}
        {/* <Button title='setCommonProgress' onPress={() => dispatch(downloadProgress())} /> */}
      </View>
    </ImageBackground>
  )
}
const s = StyleSheet.create({

});
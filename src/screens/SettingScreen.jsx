import React, { useState, useEffect, useReducer } from 'react'
import { Button, TextInput } from 'react-native';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';
import auth, { firebase } from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { downloadProgress, updateBeginnerProgress } from '../redux/progress';
import { useDispatch, useSelector } from 'react-redux';
import { setCommonProgress } from '../redux/progress'
import {setUserInfo} from '../redux/auth'

export const SettingScreen = ({ navigation, route }) => {
  const progress = useSelector(state => state.progress)
  const dispatch = useDispatch()
  const userInfo=useSelector(state=>state.auth.user)
  return (
    <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
      {/* <Button title='remooveValue' onPress={() => removeFew()} /> */}
      {/* <Button title='setCommonProgress' onPress={() => dispatch(downloadProgress())} /> */}
      <Button title='resetProgress' onPress={() => dispatch(updateBeginnerProgress(1))} />
      <Button title='setProgress' onPress={() => dispatch(updateBeginnerProgress(640))} />
      {/* <Button title='setelementary' onPress={() => dispatch(updateElementaryProgress(22))} />
      <Button title='setpreintermediate' onPress={() => dispatch(updatePreIntermediateProgress(1))} />
      <Button title='setintermediate' onPress={() => dispatch(updateIntermediateProgress(1))} />
      <Button title='setupperintermediate' onPress={() => dispatch(updateUpperIntermediateProgress(1))} /> */}
      {/* <Text>Welcome {userInfo.email}</Text> */}
      {/* <Button title='signOut' onPress={signOut} /> */}
      {/* <Button title='setData' onPress={setData} /> */}
      {/* <Button title='getData' onPress={()=>getData(userInfo.uid)} /> */}
    </View>
  )
}
const s = StyleSheet.create({
  
});
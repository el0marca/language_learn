import React, { useState, useEffect, useReducer } from 'react'
// import AStorage from './AStorage'
import { Button, TextInput } from 'react-native';
import { Text, View } from 'react-native';
import database from '@react-native-firebase/database';
// import { authEmail, } from '../components/Auth/AuthScreen';
import auth, { firebase } from '@react-native-firebase/auth';
import { AuthScreen } from '../components/Auth/AuthScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateElementaryProgress, updatePreIntermediateProgress, updateIntermediateProgress, updateUpperIntermediateProgress, downloadProgress, updateBeginnerProgress } from '../redux/progress';
import { useDispatch, useSelector } from 'react-redux';


export const ProfileScreen = ({ navigation, route }) => {
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('beginner', JSON.stringify(1))
      await AsyncStorage.setItem('elementary', JSON.stringify(1))
      await AsyncStorage.setItem('preIntermediate', JSON.stringify(1))
      await AsyncStorage.setItem('intermediate', JSON.stringify(1))
      await AsyncStorage.setItem('upperIntermediate', JSON.stringify(1))
    } catch (e) {
      console.log(e)
    }
  }
  const getData  = async () => {
    try {
      const beginner = await AsyncStorage.getItem('beginner')
      const elementary = await AsyncStorage.getItem('elementary')
      const preIntermediate = await AsyncStorage.getItem('preIntermediate')
      const intermediate = await AsyncStorage.getItem('intermediate')
      const upperIntermediate = await AsyncStorage.getItem('upperIntermediate')

      if (beginner&&elementary&&preIntermediate&&intermediate&&upperIntermediate !== null) {
        console.log(JSON.parse(beginner)),
        console.log(JSON.parse(elementary)),
        console.log(JSON.parse(preIntermediate)),
        console.log(JSON.parse(intermediate)),
        console.log(JSON.parse(upperIntermediate))
      }
    } catch (e) {
      console.log(e)
    }
  }

  const removeValue = async (value) => {
    try {
      await AsyncStorage.removeItem(value)
    } catch (e) {
      console.log(e)
    }
    console.log('Done.')
  }

  const dispatch = useDispatch()

  const removeFew = async () => {
    const keys = ['beginner','elementary','preIntermediate','intermediate','upperIntermediate']
    try {
      await AsyncStorage.multiRemove(keys)
    } catch(e) {
      // remove error
    }
  
    console.log('Done')
  }
  

  return (
    <View>
      <Button title='storeData' onPress={storeData} />
      <Button title='getData' onPress={getData} />
      <Button title='remooveValue' onPress={() => removeFew()} />
      <Button title='setCommonProgress' onPress={()=>dispatch(downloadProgress())} />
      <Button title='setbeginner' onPress={()=>dispatch(updateBeginnerProgress(99))} />
      <Button title='setelementary' onPress={()=>dispatch(updateElementaryProgress(199))} />
      <Button title='setpreintermediate' onPress={()=>dispatch(updatePreIntermediateProgress(99))} />
      <Button title='setintermediate' onPress={()=>dispatch(updateIntermediateProgress(99))} />
      <Button title='setupperintermediate' onPress={()=>dispatch(updateUpperIntermediateProgress(999))} />

    </View>
  )
}

// const UselessTextInput = (props) => {
//   return (
//     <TextInput
//       {...props}
//       editable
//       maxLength={40}
//     />
//   );
// }
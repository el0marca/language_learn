import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Tasks } from '../components/Tasks/Tasks'
import { TranslateFromAz } from '../components/TranslateFromAz'
import { TranslateFromEn } from '../components/TranslateFromEn'
import MatchWordsEnAz from '../components/MatchWordsEnAz'
import { ListenAndAnswer } from '../components/ListenAndAnswer'
import { LearnWords } from '../components/LearnWords/LearnWords'
import { Theory } from '../components/Theory/Theory'
import { Levels } from '../components/Levels/Levels'
import { Lessons } from '../components/Lessons/Lessons'
import { useDispatch } from 'react-redux'
import { downloadProgress } from '../redux/progress'

const MainStack = createStackNavigator()

export function MainStackscreen() {
  const dispatch=useDispatch()

  useEffect(()=>{dispatch(downloadProgress())},[])
  return (
    <MainStack.Navigator
      options={{
        headerStyle: {
          backgroundColor: '#33826a',
        },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
      }}>
      <MainStack.Screen
        name="Levels"
        component={Levels}
        options={{
          headerShown:false,
        headerStyle: {
          backgroundColor: '#33826a',}}}/>
      <MainStack.Screen
        name="Lessons"
        component={Lessons}
        options={{
          headerStyle:{backgroundColor: '#33826a',
        },
          headerTitleAlign: 'center',
          headerTitle:
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold', marginLeft: 10 }}>Lessons</Text>
            </View>
        }}
      />
      <MainStack.Screen
        name="Tasks"
        component={Tasks}
        options={{headerShown:false}}
      />
      <MainStack.Screen
        name="TranslateFromAz"
        component={TranslateFromAz}
        options={{headerShown:false, title: 'TranslateFromAz' }}
      />
      <MainStack.Screen
        name="TranslateFromEn"
        component={TranslateFromEn}
        options={{headerShown:false, title: 'TranslateFromEn' }}
      />
      <MainStack.Screen
        name="MatchWordsEnAz"
        component={MatchWordsEnAz}
      
        options={{ title: 'MatchWordsEnAz', headerShown:false }}
      />
      <MainStack.Screen
        name="ListenAndAnswer"
        component={ListenAndAnswer}
        options={{headerShown:false, title: 'ListenAndAnswer' }}
      />
      <MainStack.Screen
        name="LearnWords"
        component={LearnWords}
        options={{headerShown:false, title: 'LearnWords' }}
      />
      <MainStack.Screen
        name="Theory"
        component={Theory}
        options={{headerShown:false, title: 'Theory' }}
      />
    </MainStack.Navigator>)
}
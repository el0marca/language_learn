import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tasks } from '../components/Tasks/Tasks'
import { TranslateFromAz } from '../components/TranslateFromLMode/TranslateFromAz'
import { TranslateFromEn } from '../components/TranslateFromLMode/TranslateFromEn'
import { LearnWords } from '../components/LearnWords/LearnWords'
import { Theory } from '../components/Theory/Theory'
import Lessons from '../components/Lessons/Lessons'
import { ListenAndEnter } from '../components/Listening/ListenAndEnter'
import { ListenAndTranslate } from '../components/Listening/ListenAndTranslate'
import { MatchWordsEnAz } from '../components/MatchWords/MatchWordsEnAz'
import { useSelector } from 'react-redux'
import { TranslateFromAzSecond } from '../components/TranslateFromLMode/TranslateFromAzSecond'
import { ListenAndEnterSecond } from '../components/Listening/ListenAndEnterSecond'
import { completeSentence } from '../components/CompleteSentence/CompleteSentence'

const MainStack = createNativeStackNavigator()

export function MainStackscreen({ navigation }) {

  const tabVisible = useSelector(state => state.bottomTab.show)
  React.useLayoutEffect(() => {
    {
      navigation.setOptions({
        tabBarStyle: !tabVisible && { display: 'none' } || { position: 'absolute' }
      })
    }
  }, [navigation, tabVisible])

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Lessons"
        component={Lessons}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Tasks"
        component={Tasks}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="LearnWords"
        component={LearnWords}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="MatchWordsEnAz"
        component={MatchWordsEnAz}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Theory"
        component={Theory}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="TranslateFromAz"
        component={TranslateFromAz}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="TranslateFromAzSecond"
        component={TranslateFromAzSecond}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="TranslateFromEn"
        component={TranslateFromEn}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="ListenAndEnter"
        component={ListenAndEnter}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="ListenAndEnterSecond"
        component={ListenAndEnterSecond}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="ListenAndTranslate"
        component={ListenAndTranslate}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="completeSentence"
        component={completeSentence}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>)
}
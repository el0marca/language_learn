import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Tasks } from '../components/Tasks/Tasks'
import { TranslateFromAz } from '../components/TranslateFromAz'
import { TranslateFromEn } from '../components/TranslateFromEn'
import { LearnWords } from '../components/LearnWords/LearnWords'
import { Theory } from '../components/Theory/Theory'
import { Levels } from '../components/Levels/Levels'
import { Lessons } from '../components/Lessons/Lessons'
import { ListenAndEnter } from '../components/ListenAndEnter'
import { ListenAndTranslate } from '../components/ListenAndTranslate'
import { MatchWordsEnAz } from '../components/MatchWords/MatchWordsEnAz'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'

const MainStack = createStackNavigator()

export function MainStackscreen({navigation, route}) {
  const tabVisible=useSelector(state=>state.bottomTab.show)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      tabBarVisible: tabVisible
    });
  }, [navigation,tabVisible]);
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Levels"
        component={Levels}
        options={{headerShown:false}}
      />
      <MainStack.Screen
        name="Lessons"
        component={Lessons}
        options={{headerShown:false}}
      />
      <MainStack.Screen
        name="Tasks"
        component={Tasks}
        options={{headerShown:false}}
      />
      <MainStack.Screen
        name="LearnWords"
        component={LearnWords}
        options={{headerShown:false}}
      />
      <MainStack.Screen
        name="MatchWordsEnAz"
        component={MatchWordsEnAz}
        options={{headerShown:false}}
      />
      <MainStack.Screen
        name="Theory"
        component={Theory}
        options={{headerShown:false}}
      />
      <MainStack.Screen
        name="TranslateFromAz"
        component={TranslateFromAz}
        options={{headerShown:false}}
      />
      <MainStack.Screen
        name="TranslateFromEn"
        component={TranslateFromEn}
        options={{headerShown:false}}
      />
      <MainStack.Screen
        name="ListenAndEnter"
        component={ListenAndEnter}
        options={{headerShown:false}}
      />
      <MainStack.Screen
        name="ListenAndTranslate"
        component={ListenAndTranslate}
        options={{headerShown:false}}
      />
    </MainStack.Navigator>)
}

// const LearnWordsStack = createStackNavigator()
// function LearnWordsStackScreen ({navigation}){
//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       tabBarVisible: false
//     })
//   }, [navigation])
//   return (
//     <LearnWordsStack.Navigator>
//     <LearnWordsStack.Screen
//     name="LearnWordsS"
//     component={LearnWords}
//     // options={{headerShown:false}}
//     />
//     </LearnWordsStack.Navigator>
//   )
// }
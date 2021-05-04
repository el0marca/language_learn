import React, { useState, useRef, useEffect } from 'react'
import { View, Animated, Image, Text, ImageBackground } from 'react-native';
import * as Progress from 'react-native-progress';
import { Exit } from './Exit';

export function ProgressBar({ count, numOfTasks, learnMode, mistakesBalance }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };
  useEffect(() => fadeIn(), [])
  return (
    <Animated.View style={{ opacity: fadeAnim, flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-around', alignItems: 'center', }}>
      <Exit style={{ width: '10%' }} />
      <View style={[{ justifyContent: 'center', width: '85%' }, !learnMode ? { width: '70%' } : null]} >
        <Progress.Bar progress={(count + 1) / (numOfTasks || 10)} width={null} height={14} color='#0881FF' unfilledColor='white' borderRadius={10} animationType='timing' useNativeDriver={true} borderWidth={0} />
      </View>
      {!learnMode ? <ImageBackground style={{ width: '10%', width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }} source={mistakesBalance>=0?require('../../img/heart.png'):require('../../img/heartBroken.png')} >
        {mistakesBalance>=0?<Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom:4 }}>{mistakesBalance}</Text>:null}
      </ImageBackground> : null}
    </Animated.View>
  )
}
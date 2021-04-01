import React, { useState, useRef, useEffect } from 'react'
import { View, Animated, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { Exit } from '../Common/Exit';

export function ProgressBar({ count }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();
    };
    useEffect(()=>fadeIn(),[])
    
    return (
      <Animated.View style={{opacity: fadeAnim, flexDirection:'row',paddingHorizontal:10,justifyContent: 'space-around', alignItems: 'center', }}>
        <Exit style={{width:'15%'}} />
        <View style={{width:'85%', justifyContent:'center'}} >
            <Progress.Bar progress={(count + 1) / 10} width={null} height={10} color='#73caff' unfilledColor='white' borderRadius={10} animationType='timing' useNativeDriver={true} borderWidth={0} />
        </View>
      </Animated.View>
    )
}
import React, { useEffect } from 'react'
import { View, Image, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setBottomTabVisible } from '../../redux/bottomTab';
import { Level } from './Level';

export const Levels = () => {
    const progress = useSelector(state => state.progress)
    return (
        <ImageBackground source={require('../../img/londonBlur.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
        <View style={{flex:1, justifyContent:'center', }}>
        <View style={{ alignItems: 'center', flex: 0.7 }}>
            <View style={{flex:2, width:'80%'}}></View>
            <Level level={'Beginner'} num={0} percent={(progress[0]-1) / 2.1} bColor={'#FF4031'}/>
            <Level level={'Elementary'} num={1} percent={(progress[1]-1) / 3.5} bColor={'#FFD709'}  />
            <Level level={'Pre-Intermediate'} num={2} percent={(progress[2]-1) / 3.5} bColor={'#82CF07'} />
            <Level level={'Intermediate'} num={3} percent={(progress[3]-1) / 3.5} bColor={'#38BDF9'} />
            <Level level={'Upper-Intermediate'} num={4} percent={(progress[4]-1) / 3.5} bColor={'#0881FF'} />
        </View>
        </View>
        </ImageBackground>
    )
}
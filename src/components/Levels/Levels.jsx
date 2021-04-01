import React from 'react'
import { View, Image, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { Level } from './Level';

export const Levels = () => {
    const progress = useSelector(state => state.progress)
    return (
        <View style={{flex:1, justifyContent:'center', backgroundColor:'#fff'}}>
        <View style={{ alignItems: 'center', flex:0.8 }}>
                <Image style={{flex:2, width:'80%'}} source={require('../../img/English.jpg')} />
            <Level level={'Beginner'} num={0} percent={(progress[0]-1) / 1.81} bColor={'#ED4431'}/>
            <Level level={'Elementary'} num={1} percent={(progress[1]-1) / 3.01} bColor={'#F7CC0F'}  />
            <Level level={'Pre-Intermediate'} num={2} percent={(progress[2]-1) / 3.01} bColor={'#7DC805'} />
            <Level level={'Intermediate'} num={3} percent={(progress[3]-1) / 4.21} bColor={'#00557F'} />
            <Level level={'Upper-Intermediate'} num={4} percent={(progress[4]-1) / 6.01} bColor={'#8B00FE'} />
        </View>
        </View>
    )
}
import ProgressCircle from 'react-native-progress-circle'
import { Image, Text, View, styleSheet } from 'react-native';
import React from 'react'

export const Circle = ({ num, percent, radius, progress }) => {
  const locked = <Image
    style={{ height: 48, width: 48 }}
    source={require('../../img/locked1.png')}
  />

  const okay = <Image style={{width:38,height:38}} source={require('../../img/ok-64.png')} />
  const start = <Image style={{width:52,height:52}} source={require('../../img/open128.png')} />
  return (
    <View>
      {!progress&&percent==0?start:progress?locked:
    <ProgressCircle
      percent={progress?0:Math.floor(percent)}
      radius={radius}
      borderWidth={6}
      color='#4ABC96'
      shadowColor="rgb(240, 240, 240)"
      bgColor='rgb(247, 249, 250)'
    >
      {!progress&&percent>=100?okay:!progress? <Text style={{ fontSize:20, fontWeight: 'bold', color: 'green'}}>{Math.floor(percent)}
        <Text style={{ fontSize: 12 }}>%</Text></Text> :null}
    </ProgressCircle>}
    </View>
  )
}



import ProgressCircle from 'react-native-progress-circle'
import { Image, Text, View } from 'react-native';
import React from 'react'

export const Circle = ({ percent, progress, type }) => {
  const locked = <Image style={{ height: 39, width: 39 }} source={require('../../img/locked1.png')} />
  const okay = <Image style={{ width: 37, height: 37 }} source={require('../../img/ok-64.png')} />
  const start = <Image style={{ width: 45, height: 45 }} source={type=='levels'?require('../../img/open2.png'):require('../../img/open.png')} />
  return (
    <View>
      {!progress && percent == 0 ? start : 
        <ProgressCircle
          percent={progress ? 0 : Math.floor(percent)}
          radius={25}
          borderWidth={5}
          color='#4ABC96'
          shadowColor="#d1fff0"
          bgColor='rgb(247, 249, 250)' >
          {!progress && percent >= 100 ? okay :progress ? locked : !progress ?
            <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'green' }}>{Math.floor(percent)}
            <Text style={{ fontSize: 12 }}>%</Text></Text> :
            null}
        </ProgressCircle>}
    </View>
  )
}



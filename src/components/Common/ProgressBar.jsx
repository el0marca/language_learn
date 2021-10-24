import React, { useState, useRef, useEffect } from 'react'
import { View, Animated, Text, ImageBackground, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress'
import { Exit } from './Exit'

export function ProgressBar({ count, type, learnMode, mistakesBalance, theory, changeModalVisibleMode }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };
  useEffect(() => fadeIn(), [])
  const [show, setShow] = useState(false)
  function showTask() {
    if (!show) {
      setShow(true), setTimeout(() => {
        setShow(false)
      }, 5000)
    }
    else { setShow(false) }
  }
  return (
    <Animated.View style={{ opacity: fadeAnim, flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-around', alignItems: 'center', }}>
      <Exit style={{ width: '10%' }} />
      <View style={[{ justifyContent: 'center', width: '85%' }, !learnMode ? { width: '70%' } : null]} >
        <Progress.Bar progress={(count + 1) / (type === 'enAz' && 5 || type === 'completeSentences' && 5 || 10)} width={null} height={14} color='#0881FF' unfilledColor='white' borderRadius={10} animationType='timing' useNativeDriver={true} borderWidth={0} />
        {show ? <Text style={{ color: '#fff', position: 'absolute', backgroundColor: '#0881FF', padding: 10, fontFamily: 'SFUIDisplay-Regular', borderRadius: 20, fontSize: 16 }}>Növbəti tapsırıqı açmaq üçün {type == 'enAz' && 1 || type == 'completeSentences' && 1 || 2} səhvdən artıq etməmək zəruridir</Text> : null}
      </View>
      {!learnMode ?
        <TouchableOpacity activeOpacity={0.5} onPress={theory ? changeModalVisibleMode : showTask}>
          <ImageBackground style={{ width: '10%', width: theory && 30 || 35, height: theory && 30 || 35, justifyContent: 'center', alignItems: 'center' }} source={theory ? require('../../img/table.png') : mistakesBalance >= 0 ? require('../../img/heart.png') : require('../../img/heartBroken.png')} >
            {mistakesBalance >= 0 ? <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>{mistakesBalance}</Text> : null}
          </ImageBackground>
        </TouchableOpacity>
        : null}
    </Animated.View>
  )
}
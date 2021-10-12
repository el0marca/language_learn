import React from 'react'
import { TouchableOpacity, Animated } from 'react-native'

export function Speaker({play}) {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={play} style={{ alignItems: 'center' }}>
            <Animated.Image style={{ width: 130, height: 130 }} source={require('../../img/microphone.png')} />
        </TouchableOpacity>)
}
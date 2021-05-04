import React from 'react'
import { TouchableOpacity, Animated } from 'react-native'

export function Speaker({play}) {
    return (
        <TouchableOpacity onPress={play} style={{ alignItems: 'center' }}>
            <Animated.Image style={{ width: 130, height: 130 }} source={require('../../img/microphone.png')} />
        </TouchableOpacity>)
}
import React from 'react'
import { TouchableOpacity, Animated } from 'react-native'

export function Speaker({opacity, play}) {
    return (
        <TouchableOpacity onPress={play} style={{ alignItems: 'center' }}>
            <Animated.Image style={{ width: 60, height: 60, opacity: opacity }} source={require('../../img/speaker.png')} />
        </TouchableOpacity>)
}
import React from 'react'
import { Image } from 'react-native'

export function Award (){
    return (
        <Image style={{ width: 40, height: 40}} source={require('../../img/award.png')} />
    )
}
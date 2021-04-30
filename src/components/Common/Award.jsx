import React from 'react'
import { Image } from 'react-native'

export function Award (){
    return (
        <Image style={{ width: 35, height: 35}} source={require('../../img/award.png')} />
    )
}
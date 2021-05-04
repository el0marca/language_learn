import React from 'react'
import { Image } from 'react-native'

export function Award (){
    return (
        <Image style={{ width: 45, height: 45 }} source={require('../../img/award.png')} />
    )
}
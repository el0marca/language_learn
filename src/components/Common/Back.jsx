import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export function Back(){
    const navigation=useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image style={{ width: 35, height: 35 }} source={require('../../img/back.png')} />
        </TouchableOpacity>
    )
}
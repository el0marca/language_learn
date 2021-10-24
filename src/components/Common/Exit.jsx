import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export function Exit() {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Image style={{ width: 35, height: 35 }} source={require('../../img/exit.png')} />
        </TouchableOpacity>
    )
}
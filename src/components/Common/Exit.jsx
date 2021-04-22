import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { setBottomTabVisible } from '../../redux/bottomTab';
import { useDispatch } from 'react-redux';

export function Exit(){
    const navigation=useNavigation()
    const dispatch = useDispatch()
    return (
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Image style={{ width: 35, height: 35 }} source={require('../../img/exit.png')} />
        </TouchableOpacity>
    )
}
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CommonButton = ({ result, isReady, next, num, play }) => {
    const navigation = useNavigation()
    return (
       <TouchableOpacity style={{position:'absolute'}} disabled={!result} onPress={!isReady ? next : isReady ? () => navigation.navigate('Tasks', { num: num }) : next}>
            <Text style={{ color: '#fff', fontSize: 25, backgroundColor: '#25AE88', padding: 10, textAlign: 'center', borderRadius: 10, fontFamily: 'SFUIDisplay-Bold', marginHorizontal: 20 }}>
                {!isReady ? 'növbəti' : isReady ? 'dərslər' : null}
            </Text>
            <TouchableOpacity onPress={play} style={{position:'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor:'red',}} >
                <Image style={{ width: 30, height: 30 }} source={require('../../img/speakerW.png')} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

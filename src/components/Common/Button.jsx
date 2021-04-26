import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, View, StyleSheet, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export const CommonButton = ({ result, isReady, next, num }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity disabled={!result} onPress={!isReady ? next : isReady ? () => navigation.navigate('Tasks', { num: num }) : next}>
            <Text style={{color:'#fff', fontSize: 27, backgroundColor: '#25AE88', padding:5, textAlign: 'center', borderRadius:10, fontFamily:'SFUIDisplay-Bold', marginHorizontal:20, }}>
                {!isReady ? 'növbəti' : isReady ? 'dərslər' : null}
            </Text>
        </TouchableOpacity>
    )
}

// disabled={!result}
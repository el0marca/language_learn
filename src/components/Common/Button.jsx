import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useRef } from 'react'
import { Text, View, StyleSheet, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export const CommonButton = ({ result, isReady, next, num }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity disabled={!result} onPress={!isReady ? next : isReady ? () => navigation.navigate('Tasks', { num: num }) : null}>
            <Text style={{color:'#fff', fontSize: 25, backgroundColor: '#4ABC96', padding:1, textAlign: 'center', fontWeight:'bold', borderRadius:5, }}>
                {!isReady ? 'növbəti' : isReady ? 'dərslər' : null}
            </Text>
        </TouchableOpacity>
    )
}
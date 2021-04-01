import React from 'react'
import { View, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function AStorage() {
    // const storeData = async () => {
    //     try {
    //         await AsyncStorage.setItem('@storage_Key', [1, 2, 3, 4, 5])
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // const getData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('@storage_Key')
    //         if (value !== null) {
    //             console.log(value)
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    return (
        <View>
            <Button title='send data'  />
            <Button title='get data' />
        </View>
    )
}

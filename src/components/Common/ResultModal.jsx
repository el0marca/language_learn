import React, { useState } from 'react'
import { Image, Text, View, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import database from '@react-native-firebase/database';

export function ResultModal({ result, transSentence, sentence, errorData }) {
    const [isSent,setIsSent]=useState(false)
    function report() {
        database()
            .ref(`/errors/${errorData}`)
            .update({
                mistake: true
            })
            .then(() => console.log('success'))
            setIsSent(true)
    }
    function alert() {
        Alert.alert("", "Səhv haqqında bildirmək istəyirsiniz?",
            [
                {
                    text: "XEYİR",
                    onPress: () => console.log("Cancel Pressed"),
                },
                { text: "BƏLİ", onPress: () => (report()) }
            ]
        )
    }
    return (
        <View style={[{ paddingBottom: 15, paddingLeft: 15, borderRadius: 20, width: '90%', zIndex: 5, position: 'absolute', top: 0 }, result ? { backgroundColor: '#4ba83e' } : { backgroundColor: '#DB504B' }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'SFUIDisplay-Regular', marginTop: 10 }}>{result ? 'Düzdür:' : 'Düzgün cavab:'}</Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5, marginRight: 7 }} disabled={isSent} onPress={alert}>
                    {<Text style={{ color: '#fff', fontFamily: 'SFUIDisplay-Regular', fontSize: 16 }}>{!isSent?'səhv var?':'göndərildi'}</Text>}
                    {<Image style={{ width: 18, height: 18, marginLeft: 1,marginTop:1 }} source={!isSent?require('../../img/warning.png'):require('../../img/ok-64.png')} />}
                </TouchableOpacity>
                </View>
            <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'SFUIDisplay-Regular', marginTop: 5, marginRight: 15 }}>{transSentence} — {sentence}</Text>
        </View>
    )
}
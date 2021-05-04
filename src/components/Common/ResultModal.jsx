import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export function ResultModal({result, transSentence,sentence}) {
    return (
        <View style={[{ padding: 15, borderRadius: 20, width: '90%', zIndex: 5, position: 'absolute', top: 0 }, result?{backgroundColor: '#4ba83e'}:{backgroundColor: '#DB504B'}]}>
            <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'SFUIDisplay-Regular' }}>{result?'Düzdür:':'Düzgün cavab:'}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'SFUIDisplay-Regular', marginTop: 5 }}>{transSentence} — {sentence}</Text>
        </View>
    )
}
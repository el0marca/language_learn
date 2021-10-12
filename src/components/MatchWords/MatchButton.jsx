import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export function MatchButton({ answerMode, ChangeAnswerMode, isReady, page, next, level }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => !answerMode ? ChangeAnswerMode() : isReady && page == 0 ? next() : isReady && page == 1 ? navigation.navigate('Tasks', { num: level }) : null}>
            {!answerMode ? <Text style={s.buttonText}>qarışdırmaq</Text> : isReady && page == 0 ? <Text style={s.buttonText}>növbəti</Text> : isReady && page == 1 ? <Text style={s.buttonText}>dərslər</Text> : null}
        </TouchableOpacity>
    )
}
const s = StyleSheet.create({
    buttonText: {
        color: '#fff',
        fontSize: 25,
        backgroundColor: '#0881FF',
        padding: 15,
        textAlign: 'center',
        borderRadius: 10,
        fontFamily: 'SFUIDisplay-Bold',
        marginHorizontal: 20
    }
})
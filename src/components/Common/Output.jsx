import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function Output({ value }) {
    return (
        <Text style={s.text }>
            {value}
        </Text>
    )
}

const s = StyleSheet.create({
    text: {
        fontFamily: 'SFUIDisplay-Regular',
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        minWidth: '100%'
    }
})
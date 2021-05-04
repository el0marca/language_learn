import React from 'react'
import { Animated, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const QwertyKeyboard = ({ line, choice, item }) => {
    return (
        <View style={s.container}>
            {line.map((w, i) => <TouchableOpacity activeOpacity={0.8} key={i} onPress={() => { choice(w) }}>
                <Animated.Text style={[s.text, item.some(i => i == w) ? s.ch : s.default, item.some((word, index) => word == w && index == 0) ? { backgroundColor: '#4ba83e' } : null]}>{w}
                </Animated.Text>
            </TouchableOpacity>)}
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    text: {
        borderRadius: 5,
        fontSize: 20,
        paddingHorizontal: 12,
        paddingVertical: 7,
        marginHorizontal: 1,
        marginVertical: 1,
        fontFamily: 'SFUIDisplay-Regular',
        backgroundColor: '#fff'
    },
    default: {
        backgroundColor: '#fff', color: '#000'
    },
    ch: {
        backgroundColor: '#0881FF', color: '#fff'
    }
})
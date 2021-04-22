import React, { useEffect, useRef } from 'react'
import { Animated, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const QwertyKeyboard = ({ line, choice, item})=> {
    console.log(item)
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 10 }}>
            {line.map((w, i) => <TouchableOpacity activeOpacity={0.8} key={i} onPress={() => { choice(w) }}>
                <Animated.Text style={[{borderRadius: 3, fontSize: 28, paddingHorizontal: 10, paddingVertical: 5, marginHorizontal: 1, marginVertical: 1, fontFamily:'SFUIDisplay-Regular', backgroundColor:'#fff'}, item.some(i=>i==w)?s.ch:s.default, item.some((word,index)=>word==w&&index==0)?{backgroundColor:'#69e0bf'}:null]}>{w}
                </Animated.Text>
                </TouchableOpacity>)}
        </View>
    )
}

const s = StyleSheet.create({

    default:{
        backgroundColor:'#fff', color:'#000'
    },
    ch:{
        backgroundColor:'#25AE88', color:'#fff'
    }

})
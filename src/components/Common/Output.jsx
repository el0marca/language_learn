import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function Output({value, success}){
    return (
        <Text style={[s.text, success?{backgroundColor:'#25AE88', color:'#fff'}:null]}>
            {value} 
        </Text> 
    )
}

const s = StyleSheet.create({
    text:{
        fontFamily:'SFUIDisplay-Regular', fontSize: 19, textAlign: 'center', color: '#000', paddingVertical: 15, paddingHorizontal:5, backgroundColor:'#fff', borderRadius:10, minWidth:'100%'
    }
})
import React from 'react';
import { Text } from 'react-native';

export function Output({value}){
    return (
        <Text style={{ fontSize: 18, textAlign: 'center', color: '#000', fontFamily: 'SFUIDisplay-Regular',paddingVertical: 10, paddingHorizontal:10, backgroundColor:'#fff', borderRadius:10}}>
            {value} 
        </Text> 
    )
}
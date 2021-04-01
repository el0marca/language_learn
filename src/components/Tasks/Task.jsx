import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'

const locked = <Image style={{ height: 50, width: 50 }} source={require('../../img/locked1.png')}/>
const ready = <Image style={{ height: 50, width: 50 }} source={require('../../img/checked.png')}/>
const studying = <Image style={{ height: 50, width: 50 }} source={require('../../img/studying.png')}/>


export const Task = ({ navigation, routeName, setDisable, lessonIndex, num, setSuccess}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} disabled={setDisable} style={s.wrapper} onPress={() => navigation.navigate(`${routeName}`, { lessonIndex: lessonIndex, num: num })}>
            <View style={{flex:1}}>{setDisable?locked:!setSuccess?ready:setSuccess?studying:null}</View>
                <Text style={s.text}>{routeName}</Text>
        </TouchableOpacity>
    )
}
const s = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    wrapper: {
        height: 80, 
        backgroundColor: 'white',
        flexDirection:'row',
        marginBottom:5,
        alignItems:'center',
        paddingHorizontal:10,
        elevation: 10,
        borderRadius: 10
    },
    textWrapper: {
        justifyContent: 'center',
        backgroundColor: '#F7F9FA',
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: 22,
        color: 'black',
        flex:4,
        // backgroundColor:'yellow'
        
    }
})
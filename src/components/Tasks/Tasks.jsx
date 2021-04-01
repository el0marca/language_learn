import React, { useState } from 'react'
import { Task } from './Task'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'
import { Back } from '../Common/Back'

export const Tasks = ({navigation, route}) => {
    const [num,setNum]=useState(route.params.num)
    const [index,setIndex]=useState(route.params.index)
    const [numForProgress, setNumForProgress]=useState((route.params.index)*6)
    const progress=useSelector(state=>state.progress[num])
    const l=index+1;
 
    return (
        <ImageBackground source={require('../../img/londonBlur.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingHorizontal:20,  }}>
                <View style={{position:'absolute', left:20}}><Back/></View>
                <Text style={{color:'#fff', fontSize:25, fontWeight:'bold', textAlign:'center' }}>{l===6||l===16||l===26||l===36||l===46||l===56||l===60||l===66||l===76||l===86||l===90||l===96?`${l}-cı`:l===9||l===19||l===29||l===39||l===49||l===59||l===69||l===79||l===89||l===99||l===10?`${l}-cu`:`${l}-ci`} dərs</Text>
            </View>
           <View style={s.container}>
       <ScrollView style={{}}>
            <Task navigation={navigation} routeName={'LearnWords'} setDisable={progress<numForProgress+1} setSuccess={progress<numForProgress+2} lessonIndex={index} num={num}/>
            <Task navigation={navigation} routeName={'MatchWordsEnAz'} setDisable={progress<numForProgress+2} setSuccess={progress<numForProgress+3} lessonIndex={index} num={num}/>
            <Task navigation={navigation} routeName={'Theory'} setDisable={progress<numForProgress+3} setSuccess={progress<numForProgress+4} lessonIndex={index} num={num}/>
            <Task navigation={navigation} routeName={'TranslateFromAz'} setDisable={progress<numForProgress+4} setSuccess={progress<numForProgress+5} lessonIndex={index} num={num}/>
            <Task navigation={navigation} routeName={'TranslateFromEn'} setDisable={progress<numForProgress+5} setSuccess={progress<numForProgress+6} lessonIndex={index} num={num}/> 
            <Task navigation={navigation} routeName={'ListenAndAnswer'} setDisable={progress<numForProgress+6} setSuccess={progress<numForProgress+7} lessonIndex={index} num={num}/>
       </ScrollView>
            </View>
       </ImageBackground>
    )
}

const s = StyleSheet.create({
    container: {
        flex:6,
        marginHorizontal:10,
    }
})


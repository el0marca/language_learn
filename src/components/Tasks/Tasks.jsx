import React, { useEffect, useRef, useState } from 'react'
import { Task } from './Task'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground, Animated } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Back } from '../Common/Back'

export const Tasks = ({ route }) => {
    const [num, setNum] = useState(route.params.num)
    const [index, setIndex] = useState(route.params.index)
    const [numForProgress, setNumForProgress] = useState((route.params.index) * 7)
    const progress = useSelector(state => state.progress[num])
    const l = index + 1;
    const fadeInOne = useRef(new Animated.Value(0)).current;
    const fadeInTwo = useRef(new Animated.Value(0)).current;
    const fadeInThree = useRef(new Animated.Value(0)).current;
    const fadeInFour = useRef(new Animated.Value(0)).current;
    const fadeInFive = useRef(new Animated.Value(0)).current;
    const fadeInSix = useRef(new Animated.Value(0)).current;
    const fadeInSeven = useRef(new Animated.Value(0)).current;
    const fadeInEight = useRef(new Animated.Value(0)).current;

    const fadeInKey = (element, value) => {
        Animated.timing(element, {
            toValue: 1,
            duration: value,
            useNativeDriver: true
        }).start();
    }
    useEffect(() => {
        setTimeout(() => {
            fadeInKey(fadeInOne, 300)
        }, 100),
            setTimeout(() => {
                fadeInKey(fadeInTwo, 300)
            }, 150),
            setTimeout(() => {
                fadeInKey(fadeInThree, 300)
            }, 200),
            setTimeout(() => {
                fadeInKey(fadeInFour, 300)
            }, 250),
            setTimeout(() => {
                fadeInKey(fadeInFive, 300)
            }, 300),
            setTimeout(() => {
                fadeInKey(fadeInSix, 300)
            }, 350),
            setTimeout(() => {
                fadeInKey(fadeInSeven, 350)
            }, 350),
            setTimeout(() => {
                fadeInKey(fadeInEight, 350)
            }, 350),
            []
    });

    return (
        <ImageBackground source={require('../../img/londonBlur.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
            <View style={s.header}>
                <View style={{ position: 'absolute', left: 20, bottom: 10 }}>
                    <Back />
                </View>
                <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center', fontFamily: 'SFUIDisplay-Bold' }}>Dərs {l}</Text>
            </View>
            <View style={s.container}>
                <ScrollView >
                <Text style={{textAlign:'center', marginVertical:20, fontSize:22, fontFamily:'SFUIDisplay-Bold',color:'#fff'}}>Təlim keç</Text>
                    {index<40?<Animated.View style={{ opacity: fadeInOne }}>
                        <Task routeName={'LearnWords'} header={'Sözləri çap et'} setDisable={progress < numForProgress + 1} setSuccess={progress < numForProgress + 2} lessonIndex={index} num={num} />
                    </Animated.View>:null}
                    <Animated.View style={{ opacity: fadeInTwo }}>
                        <Task routeName={'MatchWordsEnAz'} header={'Sözləri uyğunlaşdır'} setDisable={progress < numForProgress + 2} setSuccess={progress < numForProgress + 3} lessonIndex={index} num={num} />
                    </Animated.View>
                    {index < 40 ? <Animated.View style={{ opacity: fadeInThree }}>
                        <Task routeName={'Theory'} header={'Qrammatikanı öyrən'} setDisable={progress < numForProgress + 3} setSuccess={progress < numForProgress + 4} lessonIndex={index} num={num} />
                    </Animated.View> : null}
                    <Animated.View style={{ opacity: fadeInFour }}>
                        <Task routeName={'TranslateFromAz'} header={'Azərbaycan dilindən İngilis dilinə tərcümə'} setDisable={progress < numForProgress + 4} setSuccess={progress < numForProgress + 5} lessonIndex={index} num={num} />
                    </Animated.View>
                    <Animated.View style={{ opacity: fadeInFive }}>
                        <Task routeName={'TranslateFromEn'} header={'İngilis dilindən Azərbaycan dilinə tərcümə'} setDisable={progress < numForProgress + 5} setSuccess={progress < numForProgress + 6} lessonIndex={index} num={num} />
                    </Animated.View>
                    <Animated.View style={{ opacity: fadeInSeven }}>
                        <Task routeName={'ListenAndEnter'} header={'Dinlə və cümləni topla'} setDisable={true} setSuccess={false} lessonIndex={index} num={num} />
                    </Animated.View>
                    {/* <Animated.View style={{opacity:fadeInSix}}>
                    <Task routeName={'ListenAndEnter'} header={'Dinlə və cümləni topla'} setDisable={progress<numForProgress+6} setSuccess={progress<numForProgress+7} lessonIndex={index} num={num}/>
                </Animated.View> */}
                        
                        <Animated.Text style={{textAlign:'center', opacity: fadeInSix, marginVertical:20, fontSize:22, fontFamily:'SFUIDisplay-Bold',color:'#fff'}}>Özünü yoxla</Animated.Text>
                    {/* <Animated.View style={{opacity:fadeInSeven, marginBottom:60}}>
                    <Task routeName={'ListenAndTranslate'} header={'Dinlə və tərcümə et'} setDisable={progress<numForProgress+7} setSuccess={progress<numForProgress+8} lessonIndex={index} num={num}/>
                </Animated.View> */}
                    <Animated.View style={{ opacity: fadeInEight, marginBottom: 60 }}>
                        <Task routeName={'ListenAndTranslate'} header={'Dinlə və tərcümə et'} setDisable={true} setSuccess={false} lessonIndex={index} num={num} />
                    </Animated.View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const s = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        // alignItems: 'center',
        // paddingHorizontal: 20,
        paddingBottom: 10
    },
    container: {
        flex: 9, 
        // backgroundColor: '#fff'
    }
})


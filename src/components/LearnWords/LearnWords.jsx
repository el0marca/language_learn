import React, { useEffect, useState, useRef } from 'react'
import { Text, View, StyleSheet, Animated, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux';
import { setProgress } from '../../redux/levelsList';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { QwertyKeyboard } from './QwertyKeyboard';
import { CommonButton } from '../Common/Button'
import { updateBeginnerProgress, updateElementaryProgress, updateIntermediateProgress, updatePreIntermediateProgress, updateUpperIntermediateProgress } from '../../redux/progress';
import { Exit } from '../Common/Exit';

let a;

export function LearnWords({ route }) {
    const level = route.params.num
    const progress = useSelector(state => state.progress[level])
    const dispatch = useDispatch()
    const [numberOfWord, setNumberOfWord] = useState(0)
    const [count, setCount] = useState(0)
    const task = useSelector(state => state.learnWords.words[level][route.params.lessonIndex][numberOfWord])
    const keyboard = useSelector(state => state.learnWords.keyboard)
    const [result, setResult] = useState(false)
    const [isReady, setReady] = useState(false)
    const [originWord, setOriginWord] = useState(task.wd)
    const [translatedWord, settranslatedWord] = useState(task.tr)
    const [wordToChoose, setWordToChoose] = useState(translatedWord.split(''))
    const [output, setOutput] = useState('')
    const [item, setItem] = useState(wordToChoose)

    useEffect(() => {
        setOriginWord(task.wd);
        setCount(0);
        settranslatedWord(task.tr);
        setOutput('')
    }, [numberOfWord])

    useEffect(() => setWordToChoose(translatedWord.split('')), [translatedWord])
    useEffect(() => setItem(wordToChoose), [wordToChoose])
    useEffect(() => { setResult(output === translatedWord) }, [output])
    useEffect(() => { if (result && numberOfWord == 9) { setReady(true) } }, [result])

    const progressValue = route.params.lessonIndex * 6 + 2;
    useEffect(() => {
        if (isReady && progressValue > progress) {
            dispatch(level === 0 ? updateBeginnerProgress(progressValue) : level === 1 ? updateElementaryProgress(progressValue) : level === 2 ? updatePreIntermediateProgress(progressValue) : level === 3 ? updateIntermediateProgress(progressValue) : level === 4 ? updateUpperIntermediateProgress(progressValue) : null)
        }
    }, [isReady])

    function choice(w) {
        if (wordToChoose[count] == w) {
            setOutput(prev => prev + w)
            setCount(prev => prev + 1)
            setItem(prev => {
                a = [...prev]
                a.shift()
                return a
            })
        }
    }
    function res(w) {
        return item.filter((s, i) => s[i] === w)
    }
    function next() {
        if (numberOfWord < 9) { setNumberOfWord(prev => prev + 1) }
    }
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = (value) => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: value,
            useNativeDriver: true
        }).start();
    };
    const fadeOut = (value) => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: value,
            useNativeDriver: true
        }).start();
    };
    if (result) { fadeIn(500) } else { fadeOut(500) }

    const fadeKey = useRef(new Animated.Value(0)).current;
    const fadeTask = useRef(new Animated.Value(0)).current;
    const fadeInKey = (element,value) => {
        Animated.timing(element, {
            toValue: 1,
            duration: value,
            useNativeDriver: true
        }).start();
    }
    useEffect(()=>fadeInKey(fadeKey,500),
    fadeInKey(fadeTask,300),
    [])
    
    return (
        <View style={s.content}>
            <ImageBackground source={require('../../img/londonBlur.jpg')} style={{flex: 1, resizeMode: "center", justifyContent: "center"}}>
            <View style={{ flex: 1.1, justifyContent:'center'  }}>
                    <ProgressBar count={numberOfWord} />
            </View>
            <Animated.View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', opacity:fadeTask}}>
                <View style={s.task}>
                    <View style={s.originWord}>
                        <Text style={s.originWordText}>{originWord}</Text>
                    </View>
                    <View style={s.speaker}>
                        <TouchableOpacity >
                            <Animated.Image style={{ width: 30, height: 30, opacity: fadeAnim}} source={require('../../img/sound.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={s.translatedWord}>
                        <TouchableOpacity disabled={!result}>
                            <Animated.Text style={s.translatedWordText}>{output}</Animated.Text>
                        </TouchableOpacity></View>
                </View>
            </Animated.View>
            <Animated.View style={{flex: 2, justifyContent: 'center', opacity:fadeKey}}>
                <QwertyKeyboard line={keyboard[0]} res={res} choice={choice} />
                <QwertyKeyboard line={keyboard[1]} res={res} choice={choice} />
                <QwertyKeyboard line={keyboard[2]} res={res} choice={choice} />
            </Animated.View>
            <Animated.View style={{ paddingHorizontal: 20, justifyContent: 'center', flex: 1, opacity: fadeAnim }}>
                <CommonButton result={result} isReady={isReady} next={next} num={level} />
            </Animated.View>
            </ImageBackground>
        </View>
    )
}
const s = StyleSheet.create({
    content: {
        flex: 1,
    },
    taskWrapper: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    task: {
        flex: 0.8,
        width: '65%',
        height: 120,
        borderRadius: 10,
        elevation: 15,
        backgroundColor: '#fff',
        padding: 10,
    },
    originWord: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#00557F',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    originWordText: {
        fontSize: 22,
        fontFamily: 'SFUIDisplay-Regular',
        textAlign: 'center',
        color: '#fff',
    },
    translatedWord: {
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor: '#ED4431',
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',

    },
    translatedWordText: {
        fontSize: 22,
        justifyContent: 'flex-end',
        fontFamily: 'SFUIDisplay-Regular',
        color: '#fff',
        padding: 5,
        borderRadius: 5
    },
    keyboard: {
        flex: 2,
        justifyContent: 'center'
    },
    speaker: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
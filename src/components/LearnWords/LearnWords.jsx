import React, { useEffect, useState, useRef } from 'react'
import { Text, View, StyleSheet, Animated, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ProgressBar } from '../Common/ProgressBar'
import { QwertyKeyboard } from './QwertyKeyboard'
import { updateProgress } from '../../redux/progress'
import storage from '@react-native-firebase/storage'
import { setBottomTabVisible } from '../../redux/bottomTab'
import SoundPlayer from 'react-native-sound-player'
import { useNavigation } from '@react-navigation/core'

export function LearnWords({ route }) {
    const voice = useSelector(state=>state.voice.value)
    const navigation = useNavigation()
    const user = useSelector(state => state.auth.user)
    const progress = useSelector(state => state.progress[0])
    const dispatch = useDispatch()
    const [numberOfWord, setNumberOfWord] = useState(0)
    const [count, setCount] = useState(0)
    const task = useSelector(state => state.learnWords.words[route.params.lessonIndex][numberOfWord])
    const [result, setResult] = useState(false)
    const [isReady, setReady] = useState(false)
    const [originWord, setOriginWord] = useState(task.wd)
    const [translatedWord, settranslatedWord] = useState(task.tr)
    const [wordToChoose, setWordToChoose] = useState(translatedWord.split(''))
    const [output, setOutput] = useState('')
    const [item, setItem] = useState(wordToChoose)

    const keyboard = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
      ]

    async function loadAudio() {
        SoundPlayer.stop()
        try {
            let url = await storage()
                .ref(`${voice}/words/${translatedWord}.ogg`)
                .getDownloadURL()
            SoundPlayer.loadUrl(url)
        }
        catch (e) { console.log(e) }
    }
    function play() {
        try {
            SoundPlayer.play()
        }
        catch (e) { console.log(e) }
    }
    useEffect(() => {
        dispatch(setBottomTabVisible(false))
        setTimeout(() => {
            play()
        }, 1500);
        return () => {
            dispatch(setBottomTabVisible(true))
        }
    }, [])

    useEffect(() => {
        setOriginWord(task.wd);
        setCount(0);
        settranslatedWord(task.tr);
        setOutput('')
    }, [numberOfWord])

    useEffect(() => { setWordToChoose(translatedWord.split('')); loadAudio() }, [translatedWord])
    useEffect(() => setItem(wordToChoose), [wordToChoose])
    useEffect(() => {
        setResult(output === translatedWord)
    }, [output]
    )
    useEffect(() => { if (result && numberOfWord == 9) { setReady(true) } }, [result])
    const progressValue = route.params.lessonIndex * 8 + 2
    useEffect(() => {
        if (isReady && progressValue > progress) dispatch(updateProgress(progressValue, user))
    }, [isReady])

    function choice(w) {
        if (wordToChoose[count] == w) {
            setOutput(prev => prev + w)
            setCount(prev => prev + 1)
            let word
            setItem(prev => {
                word = [...prev]
                word.shift()
                return word
            })
        }
    }
    function next() {
        setTimeout(() => {
            play()
        }, 1500);
        if (numberOfWord < 9) { setNumberOfWord(prev => prev + 1) }
    }
    const buttonAnim = useRef(new Animated.Value(0)).current;
    const keyboardAnim = useRef(new Animated.Value(0)).current;
    const taskAnim = useRef(new Animated.Value(0)).current;

    const fade = (element, toValue, duration) => {
        Animated.timing(element, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start()
    }

    if (result) { fade(buttonAnim, 1, 500) } else { fade(buttonAnim, 0, 500) }

    useEffect(() => {
        fade(taskAnim, 1, 500)
        setTimeout(() => {
            fade(keyboardAnim, 1, 500)
        }, 700)
    }, [])

    return (
        <View style={s.content}>
            <ImageBackground source={require('../../img/bg/tasksBg.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
                <View style={{ flex: 1.1, justifyContent: 'center' }}>
                    <ProgressBar count={numberOfWord} learnMode={true} />
                </View>
                <Animated.View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', opacity: taskAnim }}>
                    <View style={s.task}>
                    <View style={{height:50,backgroundColor:'#fff', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                            <Text style={s.originWord}>{originWord}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.6} style={s.speaker} onPress={play}>
                            <Image style={{ width: 80, height: 80 }} source={require('../../img/microphone.png')} />
                        </TouchableOpacity>
                        <View style={{height:50,backgroundColor:result&&'#4ba83e'||'#fff', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                            <Text style={ [s.originWord, result&&{color:'#fff'}]}>{output}</Text>
                        </View>
                    </View>
                </Animated.View>
                <Animated.View style={{ flex: 2, justifyContent: 'center', opacity: keyboardAnim }}>
                    <QwertyKeyboard line={keyboard[0]} choice={choice} item={item} />
                    <QwertyKeyboard line={keyboard[1]} choice={choice} item={item} />
                    <QwertyKeyboard line={keyboard[2]} choice={choice} item={item} />
                </Animated.View>
                <Animated.View style={{ paddingHorizontal: 20, justifyContent: 'center', flex: 1, opacity: buttonAnim }}>
                    <TouchableOpacity disabled={!result} onPress={!isReady ? next : isReady ? () => navigation.goBack() : next}>
                        <Text style={{ color: '#fff', fontSize: 25, backgroundColor: '#0881FF', padding: 15, textAlign: 'center', borderRadius: 10, fontFamily: 'SFUIDisplay-Bold', marginHorizontal: 20, }}>
                            {!isReady ? 'növbəti' : isReady ? 'dərslər' : null}
                        </Text>
                    </TouchableOpacity>
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
        flex: 0.7,
        minWidth: '50%',
        justifyContent: 'space-around'
    },
    originWord: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'SFUIDisplay-Regular',
        marginHorizontal:20
    },
    keyboard: {
        flex: 2,
        justifyContent: 'center'
    },
    speaker: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})
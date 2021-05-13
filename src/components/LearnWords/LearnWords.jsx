import React, { useEffect, useState, useRef } from 'react'
import { Text, View, StyleSheet, Animated, ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux';
import { ProgressBar } from '../Common/ProgressBar';
import { QwertyKeyboard } from './QwertyKeyboard';
import { CommonButton } from '../Common/Button'
import { updateProgress } from '../../redux/progress';
import storage from '@react-native-firebase/storage';
import { setBottomTabVisible } from '../../redux/bottomTab';
import SoundPlayer from 'react-native-sound-player'
import { useNavigation } from '@react-navigation/core';

let word;

export function LearnWords({ route }) {
    const navigation = useNavigation()
    const user = useSelector(state => state.auth.user)
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

    async function loadAudio() {
        SoundPlayer.stop()
        let url = await storage()
            .ref(`words/${translatedWord}.ogg`)
            .getDownloadURL()
        SoundPlayer.loadUrl(url)
    }
    function play() {
        try {
            SoundPlayer.play()
        }
        catch (e) { console.log(e) }
    }
    useEffect(() => {
        dispatch(setBottomTabVisible(false))
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
        if (output === translatedWord) { play() };
        setResult(output === translatedWord)
    }, [output]
    )
    useEffect(() => { if (result && numberOfWord == 9) { setReady(true) } }, [result])
    const progressValue = route.params.lessonIndex * 7 + 2;
    useEffect(() => {
        if (isReady && progressValue > progress) dispatch(updateProgress(level, progressValue, user))
    }, [isReady])

    function choice(w) {
        if (wordToChoose[count] == w) {
            setOutput(prev => prev + w)
            setCount(prev => prev + 1)
            setItem(prev => {
                word = [...prev]
                word.shift()
                return word
            })
        }
    }

    function next() {
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
    },
        [])

    return (
        <View style={s.content}>
            <ImageBackground source={{uri:'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fbackground%2FtasksBg.jpg?alt=media&token=9f985407-a58e-4dbe-b5cb-d271af9a32c5'}} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
                <View style={{ flex: 1.1, justifyContent: 'center' }}>
                    <ProgressBar count={numberOfWord} learnMode={true} />
                </View>
                {/* <View style={[{ width: 250, height: 250, borderRadius: 999 },]}>
                    <ImageBackground source={require('../../img/circle/2.png')} style={{ flex: 1 }} >
                        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center', fontFamily: 'SFUIDisplay-Regular' }}>dərs #</Text>
                        </View>
                        <View style={{ flex: 0.5, paddingHorizontal: 30, alignItems: 'center', paddingTop: 15 }}>
                            <Text style={[s.text]}>'subject'</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.5 }}>
                        </View>
                        <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 20 }}>
                            <Text style={[{ color: '#999', fontSize: 19, padding: 10, backgroundColor: '#fff', paddingHorizontal: 25, borderRadius: 25, fontFamily: 'SFUIDisplay-Regular' }, progress ? { color: '#000' } : null]}></Text>
                        </View>
                    </ImageBackground>
                </View> */}
                <Animated.View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', opacity: taskAnim }}>
                    <View style={s.task}>
                        <Text style={s.originWordText}>{originWord}</Text>
                        <TouchableOpacity style={s.speaker} onPress={play}>
                            <Animated.Image style={{ width: 40, height: 40 }} source={require('../../img/speakerW.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity disabled={!result}>
                            <Animated.Text style={[s.originWordText, result ? { color: '#fff', backgroundColor: '#4ba83e' } : null]}>{output}</Animated.Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                <Animated.View style={{ flex: 2, justifyContent: 'center', opacity: keyboardAnim }}>
                    <QwertyKeyboard line={keyboard[0]} choice={choice} item={item} />
                    <QwertyKeyboard line={keyboard[1]} choice={choice} item={item} />
                    <QwertyKeyboard line={keyboard[2]} choice={choice} item={item} />
                </Animated.View>
                <Animated.View style={{ paddingHorizontal: 20, justifyContent: 'center', flex: 1, opacity: buttonAnim }}>
                    <TouchableOpacity disabled={!result} onPress={!isReady ? next : isReady ? () => navigation.navigate('Tasks', { num: level }) : next}>
                        <Text style={{ color: '#fff', fontSize: 25, backgroundColor: '#0881FF', padding: 10, textAlign: 'center', borderRadius: 10, fontFamily: 'SFUIDisplay-Bold', marginHorizontal: 20, }}>
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
        flex: 0.6,
        minWidth: '50%',
        justifyContent: 'space-around'
    },
    originWordText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 15,
        paddingHorizontal: 25,
        fontFamily: 'SFUIDisplay-Regular',
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
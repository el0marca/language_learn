import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground, Image, Button } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import storage from '@react-native-firebase/storage'
import { shuffle } from '../utils/shuffle'
import { useDispatch, useSelector } from 'react-redux'
import { ProgressBar } from './Common/ProgressBar'
import { CommonButton } from './Common/Button'
import { updateProgress } from '../redux/progress'
import { Output } from './Common/Output'
import { setBottomTabVisible } from '../redux/bottomTab'
import { Award } from './Common/Award'
let keyArray = []
let outputArr = []

export const TranslateFrom = ({ route, sentences, setNumCount,num }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const level = route.params.num
    const progress = useSelector(state => state.progress[route.params.num])
    const [wordNumber, setWordNumber] = useState(0)
    const [output, setOutput] = useState('')
    const [sentence, setSentence] = useState(sentences.sntc)
    const [transSentence, setTransSentence] = useState(sentences.tr)
    const [originSentence, setOriginSentence] = useState([...transSentence.split(' ')])
    const [choice, setChoice] = useState(shuffle([...transSentence.split(' ')]))
    const [result, setResult] = useState(false)
    const [isReady, setReady] = useState(false)

    async function loadAudio() {
        SoundPlayer.stop()
        let url = await storage()
            .ref(`azEn/${sentences.id}.mp3`)
            .getDownloadURL()
        SoundPlayer.loadUrl(url)
    }
    useEffect(() => {
        dispatch(setBottomTabVisible(false))
        return () => {
            dispatch(setBottomTabVisible(true))
            keyArray = []
        }
    }, [])

    function play() {
        SoundPlayer.play()
    }
    function next() {
        if (num < 9) { 
            setNumCount()

        }
    }
    function answer(word, id) {
        if (originSentence[wordNumber] == word) {
            setOutput((prev) => (prev + ' ' + word).trim());
            setWordNumber((prev) => prev + 1)
            keyArray.push(id),
                outputArr.push(word)
        }
    }
    const speakerAnim = useRef(new Animated.Value(0)).current
    const taskAnim = useRef(new Animated.Value(0)).current
    const outputAnim = useRef(new Animated.Value(0)).current

    const fade = (element, toValue, duration) => {
        Animated.timing(element, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start()
    }

    if (result) { fade(speakerAnim, 1, 500) } else { fade(speakerAnim, 0, 500) }

    useEffect(() => { setSentence(sentences.sntc), setTransSentence(sentences.tr), setOutput(''), loadAudio()}, [num])
    useEffect(() => setChoice(shuffle(transSentence.split(' '))), [sentence])
    useEffect(() => { setOriginSentence([...transSentence.split(' ')]), setWordNumber(0), keyArray = [], outputArr = [] }, [transSentence])
    useEffect(() => setResult(transSentence == output), [output])
    useEffect(() => { if (num === 9 && result) { setReady(true) } }, [result])

    const progressValue = route.params.lessonIndex * 7 + 5

    useEffect(() => {
        if (isReady && progressValue > progress) dispatch(updateProgress(level, progressValue, user))
    }, [isReady])

    useEffect(() => {
        setTimeout(() => {
            fade(taskAnim, 1, 500)
        }, 200),
            setTimeout(() => {
                fade(outputAnim, 1, 500)
            }, 700),
            []
    })

    return (
        <ImageBackground source={require('../img/londonBlur.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <ProgressBar count={num} />
            </View>
            <View style={s.wrapper}>
                <Animated.View style={{ flex: 2.5, justifyContent: 'center', opacity: taskAnim, alignItems: 'center' }}>
                    <Award />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, textAlign: 'center', color: '#fff', borderRadius: 10, marginBottom: 15, fontFamily: 'SFUIDisplay-Bold', width: '100%' }}>Cümləni topla</Text>
                    </View>
                    <Output value={sentence} />
                </Animated.View>
                <Animated.View style={{ flex: 2,paddingTop:20, opacity: taskAnim,  alignItems:'flex-start'}}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', flex: 1.8, }}>
                        {outputArr.map((w, i) => <Text key={i} style={s.choice}>{w}</Text>)}
                    </View>
                </Animated.View>
                <Animated.View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', flex: 2, opacity: outputAnim }}>
                    {result?<TouchableOpacity style={{ alignItems: 'center' }}>
                        <Animated.Image style={{ width: 50, height: 50, opacity: speakerAnim }} source={require('../img/speaker.png')} />
                    </TouchableOpacity>:choice.map((w, i) =>
                        <TouchableOpacity key={i} onPress={() => answer(w, i)} disabled={result || keyArray.some(id => id == i)
                        }>
                            <Text style={[s.choice, keyArray.some(id => id == i) ? { backgroundColor: 'rgba(255,255,255,0.5)', borderWidth: 1, borderColor: '#fff', borderStyle: 'dashed', paddingHorizontal: 9, paddingVertical: 4, color: 'rgba(0,0,0,0)' } : null]}>{w}
                            </Text>
                        </TouchableOpacity>)}
                </Animated.View>
                <Animated.View style={{ marginTop: 20, justifyContent: 'center', flex: 1, opacity: 1 }}>
                    <CommonButton result={result} isReady={isReady} next={next} num={level} />
                </Animated.View>
            </View>
        </ImageBackground>
    )
}

const s = StyleSheet.create({
    wrapper: {
        padding: 10,
        flex: 8,
    },
    choice: {
        fontSize: 20,
        borderRadius: 5,
        color: '#000',
        marginHorizontal: 5,
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        fontFamily: 'SFUIDisplay-Regular'
    },
    buttons: {
        // marginTop: 18,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex: 2,
    },
})

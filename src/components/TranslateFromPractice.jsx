import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native'
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
import { Speaker } from './Common/Speaker'
let keyArray = []
let outputArr = []

export const TranslateFrom = ({ route, sentences, setNumCount, num, type }) => {
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
        try{
        SoundPlayer.stop()
        let url = await storage()
            .ref(`${type}/${sentences.id}.ogg`)
            .getDownloadURL()
        SoundPlayer.loadUrl(url)}
        catch(e){console.log(e)}
    }
    useEffect(() => {
        dispatch(setBottomTabVisible(false))
        return () => {
            dispatch(setBottomTabVisible(true))
            keyArray = []
        }
    }, [])

    function play() { 
        try {
            SoundPlayer.play()
        }
        catch(e){
            console.log(e)
        }
         }

    function next() {
        if (num < 9) { setNumCount() }
    }
    function answer(word, id) {
        if (originSentence[wordNumber] == word) {
            setOutput((prev) => (prev + ' ' + word).trim())
            setWordNumber((prev) => prev + 1)
            keyArray.push(id)
            outputArr.push(word)
        }
    }
    const speakerAnim = useRef(new Animated.Value(0)).current
    const taskAnim = useRef(new Animated.Value(0)).current
    const outputAnim = useRef(new Animated.Value(0)).current
    const buttonAnim = useRef(new Animated.Value(0)).current
    
    const fade = (element, toValue, duration) => {
        Animated.timing(element, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start()
    }
    useEffect(() => { setSentence(sentences.sntc), setTransSentence(sentences.tr), setOutput(''), loadAudio() }, [num])
    useEffect(() => setChoice(shuffle(transSentence.split(' '))), [sentence])
    useEffect(() => { setOriginSentence([...transSentence.split(' ')]), setWordNumber(0), keyArray = [], outputArr = [] }, [transSentence])
    useEffect(() => setResult(transSentence == output), [output])
    useEffect(() => {
        if (num === 9 && result) { setReady(true) };
        if (result) {
            setTimeout(() => {
                fade(speakerAnim, 1, 500);
                play()
                setTimeout(() => {
                    fade(buttonAnim, 1, 500);
                }, 1000);
            }, 300);
        } else { fade(speakerAnim, 0, 500); fade(buttonAnim, 0, 500) }
    }, [result])

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
                <Animated.View style={[s.task, { opacity: taskAnim }]}>
                    <Award />
                    <View style={s.taskHeader}>
                        <Text style={s.taskHeaderText}>Cümləni topla</Text>
                    </View>
                    <Output value={sentence} />
                </Animated.View>
                <Animated.View style={[s.outputWrapper, { opacity: taskAnim }]}>
                    <View style={s.output}>
                        {outputArr.map((w, i) => <Text key={i} style={[s.choice, result ? { backgroundColor: '#4AB248', color: '#fff' } : null]}>{w}</Text>)}
                    </View>
                </Animated.View>
                <Animated.View style={[s.choiceWrapper, { opacity: outputAnim }]}>
                    {result ?
                        <View style={{width:'100%'}}>
                            <Speaker opacity={speakerAnim} play={play} />
                            <Animated.View style={{ marginTop: 20, justifyContent: 'center', flex: 1, opacity: buttonAnim }}>
                                <CommonButton result={result} isReady={isReady} next={next} num={level} />
                            </Animated.View>
                        </View>
                        :
                        choice.map((w, i) =>
                            <TouchableOpacity key={i} onPress={() => answer(w, i)} disabled={result || keyArray.some(id => id == i)}>
                                <Text style={[s.choice, keyArray.some(id => id == i) ? s.chosen : null]}>{w}
                                </Text>
                            </TouchableOpacity>)}
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
    task: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskHeader: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskHeaderText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 10,
        fontFamily: 'SFUIDisplay-Bold'
    },
    outputWrapper: {
        flex: 2,
        paddingTop: 20,
        alignItems: 'flex-start'
    },
    output: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    choiceWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 2,
    },
    choice: {
        fontSize: 19,
        borderRadius: 15,
        color: '#000',
        marginRight: 5,
        marginVertical: 5,
        paddingVertical: 7,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        fontFamily: 'SFUIDisplay-Regular'
    },
    chosen: {
        backgroundColor: '#667D9C',
        color: 'rgba(0,0,0,0)'
    },
})

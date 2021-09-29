import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground, Image } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import storage from '@react-native-firebase/storage'
import { useDispatch, useSelector } from 'react-redux'
import { ProgressBar } from '../Common/ProgressBar'
import { updateProgress } from '../../redux/progress'
import { setBottomTabVisible } from '../../redux/bottomTab'
import { Award } from '../Common/Award'
import { useNavigation } from '@react-navigation/core'
import { ResultModal } from '../Common/ResultModal'
import Highlighter from 'react-native-highlight-words'

export const completeSentence = ({ route }) => {
    const voice = useSelector(state => state.voice.value)
    const [num, setNum] = useState(0)
    const sentences = useSelector(state => state.completeSentence.sentences[route.params.lessonIndex][num])
    const progressValue = route.params.lessonIndex * 8 + 8
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const progress = useSelector(state => state.progress[0])
    const [sentence, setSentence] = useState(sentences.sntc)
    const [transSentence, setTransSentence] = useState(sentences.tr)
    const [fVariant, setFVariant] = useState(sentences.v1)
    const [sVariant, setSVariant] = useState(sentences.v2)
    const [tVariant, setTVariant] = useState(sentences.v3)
    const [result, setResult] = useState(false)
    const [isReady, setReady] = useState(false)
    const [mistakes, setMistakes] = useState(12)
    const [answered, setAnswered] = useState(false)
    const errorData = 'azEn' + sentences.id

    function setNumCount() {
        setNum(prev => prev + 1)
    }

    async function loadAudio() {
        try {
            SoundPlayer.stop()
            let url = await storage()
                .ref(`${voice}/completeSentence/${sentences.id}.ogg`)
                .getDownloadURL()
            SoundPlayer.loadUrl(url)
        }
        catch (e) { console.log(e) }
    }
    useEffect(() => {
        dispatch(setBottomTabVisible(false))
        return () => {
            dispatch(setBottomTabVisible(true))
        }
    }, [])

    function play() {
        try {
            SoundPlayer.play()
        }
        catch (e) {
            console.log(e)
        }
    }

    function next() {
        setResult(false)
        setValue('')
        if (num < 9) { setNumCount(), setAnswered(false) }
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
    useEffect(() => {
        setSentence(sentences.sntc),
            setTransSentence(sentences.tr),
            setFVariant(sentences.v1)
        setSVariant(sentences.v2)
        setTVariant(sentences.v3)
        loadAudio()
    }, [num])
    useEffect(() => {
        if (result) {
            setTimeout(() => {
                fade(speakerAnim, 1, 500);
                setTimeout(() => {
                    fade(buttonAnim, 1, 500);
                }, 1000);
            }, 300);
        } else { fade(speakerAnim, 0, 500); fade(buttonAnim, 0, 500) }
    }, [result])

    function check() {
        if (sentences.ra == value) { setResult(true), setAnswered(true) }
        else { setResult(false), setMistakes(prev => prev - 1), setAnswered(true) }
        if (num === 4) { setReady(true) }

    }
    useEffect(() => {
        if (isReady && mistakes >= 0 && progressValue > progress) dispatch(updateProgress(progressValue, user))
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
    const navigation = useNavigation()

    const [value, setValue] = useState('')
    const setAnswer = (value) => {
        setValue(value)
        setSentence(sentences.sntc.replace('___', `${value}`))
    }
    return (
        <ImageBackground source={require('../../img/bg/tasksBg.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <ProgressBar numOfTasks={5} count={num} mistakesBalance={mistakes} />
            </View>
            <View style={s.wrapper}>
                <Animated.View style={[s.task, { opacity: taskAnim }]}>
                    <Award />
                    <View style={s.taskHeader}>
                        <Text style={s.taskHeaderText}>Cümləni topla</Text>
                    </View>
                    <Highlighter
                        style={s.output}
                        highlightStyle={{ textDecorationLine: 'underline' }}
                        searchWords={[fVariant, sVariant, tVariant]}
                        textToHighlight={sentence} />
                </Animated.View>
                <Animated.View style={[s.outputWrapper, { opacity: taskAnim, alignItems: 'center', justifyContent: 'center' }]}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        <ChoiceButton type={fVariant} value={value} setAnswer={setAnswer} answered={answered} result={result} ra={sentences.ra} />
                        <ChoiceButton type={sVariant} value={value} setAnswer={setAnswer} answered={answered} result={result} ra={sentences.ra} />
                        <ChoiceButton type={tVariant} value={value} setAnswer={setAnswer} answered={answered} result={result} ra={sentences.ra} />
                    </View>
                </Animated.View>
                <Animated.View style={[s.choiceWrapper, { opacity: outputAnim }]}>
                    <View style={{ flex: 1 }}>
                        {answered && <ResultModal result={result} sentence={transSentence} transSentence={sentences.sntc.replace('___', `${sentences.ra}`)} errorData={errorData} />}
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', flex: 1, paddingHorizontal: 20 }}>
                        <TouchableOpacity disabled={!value} onPress={!answered ? () => { play(), check() } : answered && !isReady ? next : answered && isReady ? () => navigation.navigate('Tasks', { num: num }) : next}>
                            <Text style={[{ color: '#fff', fontSize: 25, backgroundColor: answered && !isReady && '#1AB248' || '#0881FF', padding: 12, textAlign: 'center', borderRadius: 10, fontFamily: 'SFUIDisplay-Bold' }, value.length == 0 ? { backgroundColor: '#7B97BC' } : null]}>
                                {!answered ? 'yoxlamaq' : answered && !isReady ? 'növbəti' : answered && isReady ? 'dərslər' : null}
                            </Text>
                            {answered ? <TouchableOpacity disabled={!answered} onPress={play} style={{ position: 'absolute', transform: [{ translateY: 6 }], right: 10 }} >
                                <Image style={{ width: 40, height: 40 }} source={require('../../img/speakerW.png')} />
                            </TouchableOpacity> : null}
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </ImageBackground>
    )
}

const ChoiceButton = ({ type, value, setAnswer, answered, result, ra }) => {
    return (
        <TouchableOpacity activeOpacity={0.9} disabled={answered} onPress={() => setAnswer(type)} style={{ minWidth: '60%' }} >
            <Text style={{ backgroundColor: !result && answered && type == value && '#DB504B' || !result && answered && type == ra && '#1AB248' || value == type && '#1AB248' || '#fff', color: !result && answered && type == ra && '#fff' || value == type && '#fff' || '#000', paddingVertical: 12, paddingHorizontal: 20, fontSize: 18, fontFamily: 'SFUIDisplay-Regular', borderRadius: 15, marginBottom: 10, textAlign: 'center' }}>
                {type}
            </Text>
        </TouchableOpacity>
    )
}
const s = StyleSheet.create({
    wrapper: {
        padding: 10,
        flex: 8,
    },
    task: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
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
        flex: 2.5,
        alignItems: 'flex-start'
    },
    output: {
        fontFamily: 'SFUIDisplay-Regular',
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        minWidth: '100%'
    },
    choiceWrapper: {
        flex: 2.5,
        alignItems: 'flex-start'
    },
    choice: {
        fontSize: 17,
        borderRadius: 15,
        color: '#000',
        marginRight: 5,
        marginBottom: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        fontFamily: 'SFUIDisplay-Regular'
    },
    chosen: {
        backgroundColor: '#667D9C',
        color: 'rgba(0,0,0,0)'
    },
})
import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground, Image } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import storage from '@react-native-firebase/storage'
import { shuffle } from '../../utils/shuffle'
import { useDispatch, useSelector } from 'react-redux'
import { ProgressBar } from '../Common/ProgressBar'
import { CommonButton } from '../Common/Button'
import { updateProgress } from '../../redux/progress'
import { Output } from '../Common/Output'
import { setBottomTabVisible } from '../../redux/bottomTab'
import { Award } from '../Common/Award'
import { useNavigation } from '@react-navigation/core'
let keyArray = []
let outputArr = []

export const TranslateFrom = ({ route, sentences, setNumCount, num, type }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const level = route.params.num
    const progress = useSelector(state => state.progress[route.params.num])
    // const [wordNumber, setWordNumber] = useState(0)
    const [output, setOutput] = useState('')
    const [sentence, setSentence] = useState(sentences.sntc)
    const [transSentence, setTransSentence] = useState(sentences.tr)
    // const [originSentence, setOriginSentence] = useState([...transSentence.split(' ')])
    const [choice, setChoice] = useState(shuffle([...transSentence.split(' ')]))
    const [result, setResult] = useState(false)
    const [isReady, setReady] = useState(false)

    async function loadAudio() {
        try {
            SoundPlayer.stop()
            let url = await storage()
                .ref(`${type}/${sentences.id}.ogg`)
                .getDownloadURL()
            SoundPlayer.loadUrl(url)
        }
        catch (e) { console.log(e) }
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
        catch (e) {
            console.log(e)
        }
    }

    function next() {
        if (num < 9) { setNumCount(), setAnswered(false) }
    }
    function answer(word, id) {
        setOutput((prev) => (prev + ' ' + word).trim())
        // setWordNumber((prev) => prev + 1)
        keyArray.push(id)
        outputArr.push(word)
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
    useEffect(() => { keyArray = [], outputArr = [] }, [transSentence])
    useEffect(() => setResult(transSentence == output), [output])
    useEffect(() => {
        if (result) {
            setTimeout(() => {
                fade(speakerAnim, 1, 500);
                // play()
                setTimeout(() => {
                    fade(buttonAnim, 1, 500);
                }, 1000);
            }, 300);
        } else { fade(speakerAnim, 0, 500); fade(buttonAnim, 0, 500) }
    }, [result])

    const progressValue = route.params.lessonIndex * 7 + 5
    const [answered, setAnswered] = useState(false)

    function check() {
        setAnswered(true)
        if (num === 9) { setReady(true) }
    }

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
    const navigation = useNavigation()
    function remove() {
        outputArr.pop()
        setOutput((prev) => (prev.substring(0, prev.lastIndexOf(" "))))
        keyArray.pop()
    }
    return (
        <ImageBackground source={require('../../img/londonBlur.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
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
                    <TouchableOpacity disabled={answered} activeOpacity={0.5} onPress={remove}>
                    <View style={s.output}>
                        {outputArr.map((w, i) =>
                            <Text key={i} style={[s.choice, answered && result ? { backgroundColor: '#65c658', color: '#fff' } : answered && transSentence.split(' ')[i] != w ? { backgroundColor: '#DB504B', color: '#fff' } : null]}>{w}</Text>
                        )}
                    </View></TouchableOpacity>
                    {!result && answered ? <View style={{ backgroundColor: '#DB504B', padding: 15, borderRadius: 20, width: '90%', marginTop: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'SFUIDisplay-Regular' }}>Düzgün cavab:</Text>
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'SFUIDisplay-Regular', marginTop: 5 }}>{transSentence}</Text>
                    </View> : null}
                </Animated.View>
                <Animated.View style={[s.choiceWrapper, { opacity: outputAnim }]}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%', flex: 1 }}>{choice.map((w, i) =>
                        <TouchableOpacity key={i} onPress={() => answer(w, i)} disabled={result || answered || keyArray.some(id => id == i)}>
                            <Text style={[s.choice, keyArray.some(id => id == i) ? s.chosen : null]}>{w}
                            </Text>
                        </TouchableOpacity>)}
                    </View>
                    {!answered ?
                        <View style={{ width: '100%', justifyContent: 'flex-end', flex: 0.5 }}>
                            <TouchableOpacity disabled={output.length == 0} onPress={() => { check(), play() }}>
                                <Text style={[{ color: '#fff', fontSize: 25, backgroundColor: '#25AE88', padding: 10, textAlign: 'center', borderRadius: 10, fontFamily: 'SFUIDisplay-Bold', marginHorizontal: 20, }, output.length == 0 ? { backgroundColor: '#7B97BC' } : null]}>
                                    yoxlamaq
                                    </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{ width: '100%', justifyContent: 'flex-end', flex: 0.5 }}>
                            <TouchableOpacity disabled={!answered} onPress={!isReady ? next : isReady ? () => navigation.navigate('Tasks', { num: num }) : next}>
                                <Text style={{ color: '#fff', fontSize: 25, backgroundColor: '#25AE88', padding: 10, textAlign: 'center', borderRadius: 10, fontFamily: 'SFUIDisplay-Bold', marginHorizontal: 20, }}>
                                    {!isReady ? 'növbəti' : isReady ? 'dərslər' : null}
                                </Text>
                                <TouchableOpacity disabled={!result} onPress={play} style={{ position: 'absolute', transform: [{ translateY: 10 }], right: 30 }} >
                                    <Image style={{ width: 30, height: 30 }} source={require('../../img/speakerW.png')} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    }
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
        paddingTop: 20,
        alignItems: 'flex-start'
    },
    output: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    choiceWrapper: {
        justifyContent: 'center',
        flex: 2,
        alignItems: 'center'
    },
    choice: {
        fontSize: 18,
        borderRadius: 15,
        color: '#000',
        marginRight: 5,
        marginVertical: 5,
        paddingVertical: 9,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        fontFamily: 'SFUIDisplay-Regular'
    },
    chosen: {
        backgroundColor: '#667D9C',
        color: 'rgba(0,0,0,0)'
    },
})
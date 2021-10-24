import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import storage from '@react-native-firebase/storage'
import { shuffle } from '../../utils/shuffle'
import { useDispatch, useSelector } from 'react-redux'
import { ProgressBar } from '../Common/ProgressBar'
import { updateProgress } from '../../redux/progress'
import { setBottomTabVisible } from '../../redux/bottomTab'
import { useNavigation } from '@react-navigation/core'
import { Speaker } from '../Common/Speaker'
import { ResultModal, ReportModal } from '../Common/ResultModal'

export const ListenFrom = ({ sentences, setNumCount, num, type, progressValue, route }) => {
    const voice = useSelector(state=>state.voice.value)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const progress = useSelector(state => state.progress[0])
    const [output, setOutput] = useState('')
    const [sentence, setSentence] = useState(sentences.sntc)
    const [transSentence, setTransSentence] = useState(sentences.tr)
    const [transSentenceTwo, setTransSentenceTwo] = useState(sentences.trt)
    const [choice, setChoice] = useState(shuffle([...sentences.ch.split(' ')]))
    const [result, setResult] = useState(false)
    const [isReady, setReady] = useState(false)
    const [keyArray, setKeyArray] = useState([])
    const [answered, setAnswered] = useState(false)
    const [mistakes, setMistakes] = useState(type=='enAz'&&1||2)
    const errorData = type + ' ' + sentences.id
    const [reportMode, setReportMode]=useState(false)

    async function loadAudio() {
        try {
            SoundPlayer.stop()
            let url = await storage()
                .ref(`${voice}/${type}/${sentences.id}.ogg`)
                .getDownloadURL()
            SoundPlayer.loadUrl(url)
        }
        catch (e) { console.log(e) }
    }
    useEffect(() => {
        loadAudio()
        dispatch(setBottomTabVisible(false))
        setTimeout(() => {
            play()
        }, 1500)
        setTimeout(() => {
            fade(taskAnim, 1, 500)
        }, 200),
            setTimeout(() => {
                fade(outputAnim, 1, 500)
            }, 700)
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
        setAnswered(false)
        setOutput(''), setKeyArray([]), setTimeout(() => {
            play()
        }, 1500)
        if (num < 9) { setNumCount() }
    }

    useEffect(() => {
        setSentence(sentences.sntc),
        setTransSentence(sentences.tr),
        setTransSentenceTwo(sentences.trt),
        loadAudio()
    }, [num])

    function answer(word, id) {
        setOutput((prev) => (prev + ' ' + word).trim())
        setKeyArray(prev => [...prev, id])
    }

    const taskAnim = useRef(new Animated.Value(0)).current
    const outputAnim = useRef(new Animated.Value(0)).current
    const fade = (element, toValue, duration) => {
        Animated.timing(element, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start()
    }
    useEffect(() => setChoice(shuffle(sentences.ch.split(' '))), [sentence])

    function check() {
        if (transSentence.indexOf('?') >=0 && output.indexOf('?') < 1) { setOutput(p => p + '?') }
        if (transSentence.replace('?', '') == output || transSentenceTwo&&transSentenceTwo.replace('?', '') == output ||transSentence ==output||transSentenceTwo&&transSentenceTwo==output) { setAnswered(true), setResult(true) }
        else { setResult(false), setMistakes(prev => prev - 1), setAnswered(true) }
        if (num === 9 || num === 4 && type == 'enAz') { setReady(true) }
    }

    useEffect(() => {
        if (isReady && mistakes >= 0 && progressValue > progress) {dispatch(updateProgress(progressValue, user))}
    }, [isReady])
    function remove() {
        setOutput((prev) => (prev.substring(0, prev.lastIndexOf(" "))))
        keyArray.pop()
    }
    return (
        <ImageBackground source={require('../../img/bg/tasksBg.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
            {reportMode&&<ReportModal closeWindow={()=>setReportMode(false)} lesson={errorData}/>}
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <ProgressBar type={type} count={num} mistakesBalance={mistakes} />
            </View>
            <View style={s.wrapper}>
                <Animated.View style={[s.task, { opacity: taskAnim }]}>
                    <View style={s.taskHeader}>
                        <Text style={s.taskHeaderText}>Dinlə və cümləni topla</Text>
                    </View>
                    <Speaker play={play} />
                </Animated.View>
                <Animated.View style={[s.outputWrapper, { opacity: taskAnim }]}>
                    <TouchableOpacity disabled={answered} activeOpacity={0.7} onPress={remove}>
                        <View style={s.output}>
                            {output.length > 0 ? output.split(' ').map((w, i) =>
                                <Text key={i} style={[s.choice, answered && result ? { backgroundColor: '#65c658', color: '#fff' } : answered && transSentence.split(' ')[i] != w ? { backgroundColor: '#DB504B', color: '#fff' } : null]}>{w}</Text>) : null}
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[s.choiceWrapper, { opacity: outputAnim }]}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>{choice.map((w, i) =>
                        <TouchableOpacity activeOpacity={0.7} key={i} onPress={() => answer(w, i)} disabled={result || answered || keyArray.some(id => id == i)}>
                            <Text style={[s.choice, keyArray.some(id => id == i) ? s.chosen : null]}>{w}
                            </Text>
                        </TouchableOpacity>)}
                    </View>
                    {answered ? <ResultModal result={result} sentence={sentence} transSentence={transSentence} errorData={errorData} openReportWindow={()=>setReportMode(true)}  /> : null}
                    <View style={{ width: '100%', justifyContent: 'flex-end', paddingHorizontal:20 }}>
                        <TouchableOpacity activeOpacity={0.5} disabled={!answered && output.length == 0} onPress={!answered ? check : answered && !isReady ? next : answered && isReady ? () => navigation.goBack() : next}>
                            <Text style={[{ color: '#fff', fontSize: 25, backgroundColor: '#0881FF', padding: 12, textAlign: 'center', borderRadius: 10, fontFamily: 'SFUIDisplay-Bold' }, output.length == 0 ? { backgroundColor: '#7B97BC' } : null]}>
                                {!answered ? 'yoxlamaq' : answered && !isReady ? 'növbəti' : answered && isReady ? 'dərslər' : null}
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    taskHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    taskHeaderText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 5,
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
        justifyContent: 'center',
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
import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground, Image, Modal, Dimensions, Alert } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import storage from '@react-native-firebase/storage'
import { shuffle } from '../../utils/shuffle'
import { useSelector, useDispatch } from 'react-redux'
import { ProgressBar } from '../Common/ProgressBar'
import { updateProgress } from '../../redux/progress'
import { Output } from '../Common/Output'
import { setBottomTabVisible } from '../../redux/bottomTab'
import { Award } from '../Common/Award'
import { useNavigation } from '@react-navigation/core'
import database from '@react-native-firebase/database'

const { width } = Dimensions.get('window')

export function Theory({ route }) {
    const user = useSelector(state => state.auth.user)
    const progress = useSelector(state => state.progress[0])
    const dispatch = useDispatch()
    const [num, setNum] = useState(0)
    const lessonIndex = route.params.lessonIndex
    const lesson = useSelector(state => state.theory.lessons[lessonIndex][num])
    const [wordNumber, setWordNumber] = useState(0)
    const [sentence, setSentence] = useState(lesson.sntc)
    const [transSentence, setTransSentence] = useState(lesson.tr)
    const [originSentence, setOriginSentence] = useState([...transSentence.split(' ')])
    const [choice, setChoice] = useState(shuffle([...originSentence]))
    const [isReady, setReady] = useState(false)
    const [result, setResult] = useState(false)
    const [keyArray, setKeyArray] = useState([])
    const [outputArr, setOutputArr] = useState([])

    function report() {
        database()
            .ref(`/theory/${lesson.id}`)
            .update({
                mistake: true
            })
            .then(() => console.log('success'))
    }
    function alert() {
        Alert.alert("", "Səhv haqqında bildirmək istəyirsiniz?",
            [
                {
                    text: "XEYİR",
                    onPress: () => console.log("Cancel Pressed"),
                },
                { text: "BƏLİ", onPress: () => (report()) }
            ]
        )
    }

    async function loadAudio() {
        try {
            SoundPlayer.stop()
            let url = await storage()
                .ref(`theory/${lesson.id}.ogg`)
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
    useEffect(() => setResult(transSentence == outputArr.join(' ')), [outputArr])

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
        setWordNumber(0)
        setKeyArray([])
        setOutputArr([])
        fade(buttonAnim, 0, 500)
        if (num < 9) { setNum((prev) => prev + 1) }
    }
    function answer(word, id) {
        if (originSentence[wordNumber] == word) {
            setWordNumber((prev) => prev + 1)
            setKeyArray(prev => [...prev, id])
            setOutputArr(prev => [...prev, word])
        }
    }
    useEffect(() => {
        setSentence(lesson.sntc),
            setTransSentence(lesson.tr),
            loadAudio()
    }, [num])

    useEffect(() => {
        setOriginSentence([...transSentence.split(' ')]),
        setChoice(shuffle(transSentence.split(' ')))
    }, [transSentence])

    const progressValue = route.params.lessonIndex * 7 + 4

    useEffect(() => {
        if (isReady && progressValue > progress) dispatch(updateProgress(progressValue, user))
    }, [isReady])

    const descrAnim = useRef(new Animated.Value(0)).current;
    const taskAnim = useRef(new Animated.Value(0)).current;
    const outputAnim = useRef(new Animated.Value(0)).current;
    const buttonAnim = useRef(new Animated.Value(0)).current;
    const fade = (element, toVAlue, duration) => {
        Animated.timing(element, {
            toValue: toVAlue,
            duration: duration,
            useNativeDriver: true
        }).start();
    };
    useEffect(() => {
        fade(descrAnim, 1, 300)
        setTimeout(() => {
            fade(taskAnim, 1, 500)
        }, 500),
            setTimeout(() => {
                fade(outputAnim, 1, 500)
            }, 700),
            []
    })
    useEffect(() => {
        if (num === 9 && result) { setReady(true) }
        if (result) {
            play()
            fade(buttonAnim, 1, 500)
        } else { fade(buttonAnim, 0, 500) }
    }, [result])

    const adverb = useSelector(s => s.words.adverb)
    const verbs = useSelector(s => s.words.verbs)
    const demPronouns = useSelector(s => s.words.demPronouns)
    const pPronouns = useSelector(s => s.words.pPronouns)
    const article = useSelector(s => s.words.article)
    const qWords = useSelector(s => s.words.qWords)
    const pronoun = useSelector(s => s.words.pronoun)
    const adjectives = useSelector(s => s.words.adjectives)
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)

    const changeModalVisibleMode = () => { setModalVisible(true) }

    const table = lessonIndex < 22 && require('../../img/tables/tenses.png') || require('../../img/tables/tenses.png')
    return (
        <ImageBackground source={require('../../img/bg/tasksBg.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                    <Image style={{ width: width * 0.97, resizeMode: 'contain', flex: 7 }} source={table} />
                    <TouchableOpacity style={{ marginTop: 30, flex: 1 }} onPress={() => setModalVisible(false)}>
                        <Text style={{ fontSize: 18, backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 15, }}>bağlamaq</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={s.progressBar}>
                <ProgressBar count={num} numOfTasks={10} learnMode={false} theory={true} changeModalVisibleMode={changeModalVisibleMode} />
            </View>
            <View style={s.wrapper}>
                <Animated.View style={[s.explainContainer, { opacity: descrAnim }]}>
                    <View style={{ alignItems: 'center' }} >
                        {lesson.descr && <Text style={s.explainDescr}>{lesson.descr}</Text>}
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {lesson.expl.split(' ').map((w, i) => <Text key={i} style={[s.explainExample, verbs.some(e => e == w) ? s.verb : adverb.some(e => e == w) ? s.adverb : pronoun.some(e => e == w) ? s.pronoun : demPronouns.some(e => e == w) ? s.demPronouns : pPronouns.some(e => e == w) ? s.pPronouns : article.some(e => e == w) ? s.article : qWords.some(e => e == w) ? s.qWords : adjectives.some(e => e == w) ? s.adjectives : null]}>{w}</Text>)}
                        </View>
                    </View>
                </Animated.View>
                <Animated.View style={[s.originContainer, { opacity: taskAnim }]}>
                    <TouchableOpacity onPress={alert}>
                        <Award />
                    </TouchableOpacity>
                    <Text style={s.originHeader}>Cümləni topla</Text>
                    <Output value={sentence} />
                </Animated.View>
                <Animated.View style={[s.answerContainer, { opacity: outputAnim }]}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {outputArr.map((w, i) =>
                            <Text key={i} style={[s.choice, pronoun.some(e => e == w.replace('?', '')) ? s.pronoun : null, adverb.some(e => e == w.replace('?', '')) ? s.adverb : null, verbs.some(e => e == w.replace('?', '')) ? s.verb : demPronouns.some(e => e == w.replace('?', '')) ? s.demPronouns : pPronouns.some(e => e == w.replace('?', '')) ? s.pPronouns : article.some(e => e == w.replace('?', '')) ? s.article : qWords.some(e => e == w.replace('?', '')) ? s.qWords : adjectives.some(e => e == w.replace('?', '')) ? s.adjectives : null]}>{w}
                            </Text>
                        )}
                    </View>
                </Animated.View>
                <Animated.View style={[s.choiceContainer, { opacity: outputAnim }]}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
                        {choice.map((w, i) =>
                            <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap' }} key={i} onPress={() => answer(w, i)} disabled={result || keyArray.some(id => id == i)}>
                                <Text style={[s.choice, pronoun.some(e => e == w.replace('?', '')) ? s.pronoun : null, adverb.some(e => e == w.replace('?', '')) ? s.adverb : null, verbs.some(e => e == w.replace('?', '')) ? s.verb : demPronouns.some(e => e == w.replace('?', '')) ? s.demPronouns : pPronouns.some(e => e == w.replace('?', '')) ? s.pPronouns : article.some(e => e == w.replace('?', '')) ? s.article : qWords.some(e => e == w.replace('?', '')) ? s.qWords : adjectives.some(e => e == w.replace('?', '')) ? s.adjectives : null, keyArray.some(id => id == i) ? s.chosen : null]}>{w}</Text>
                            </TouchableOpacity>)}
                    </View>
                    {!result && <Animated.View style={{ width: '100%', opacity: 1, position: 'absolute', bottom: 30 }}>
                        <TouchableOpacity disabled={result} onPress={!isReady ? next : isReady ? () => navigation.navigate('Tasks', { num: num }) : next}>
                            <Text style={{ color: '#fff', fontSize: 25, backgroundColor: '#1AB248', padding: 10, textAlign: 'center', borderRadius: 10, fontFamily: 'SFUIDisplay-Bold', marginHorizontal: 20 }}>
                                {!isReady ? 'növbəti' : isReady ? 'dərslər' : null}
                            </Text>
                            <TouchableOpacity disabled={!result} onPress={play} style={{ position: 'absolute', transform: [{ translateY: 10 }], right: 30 }} >
                                <Image style={{ width: 30, height: 30 }} source={require('../../img/speakerW.png')} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </Animated.View>}
                </Animated.View>
            </View>
        </ImageBackground>
    )
}

const s = StyleSheet.create({
    wrapper: {
        padding: 10,
        flex: 9,
    },
    progressBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    explainWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    explainContainer: {
        backgroundColor: '#fff',
        padding: 10,
        paddingBottom: 2,
        borderRadius: 15,
        paddingBottom: 10,
    },
    explainDescr: {
        fontSize: 16,
        color: '#07131F',
        fontFamily: 'SFUIDisplay-ZillaSlab-Light'
    },
    explainExample: {
        fontSize: 17,
        borderRadius: 15,
        color: '#000',
        marginRight: 5,
        marginTop: 5,
        paddingVertical: 7,
        paddingHorizontal: 13,
        backgroundColor: '#F7F9FA',
        fontFamily: 'SFUIDisplay-Regular'
    },
    originContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    originHeader: {
        fontSize: 23,
        textAlign: 'center',
        paddingBottom: 3,
        color: '#fff',
        fontFamily: 'SFUIDisplay-Bold'
    },
    answerContainer: {
        flex: 2,
        justifyContent: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10
    },
    choiceContainer: {
        alignItems: 'center',
        flex: 2
    },
    choice: {
        fontSize: 17,
        borderRadius: 15,
        color: '#000',
        marginRight: 5,
        marginBottom: 5,
        paddingVertical: 9,
        paddingHorizontal: 15,
        backgroundColor: '#F7F9FA',
        fontFamily: 'SFUIDisplay-Regular'
    },
    chosen: {
        backgroundColor: '#667D9C',
        color: 'rgba(0,0,0,0)'
    },
    pronoun: {
        backgroundColor: '#FFFF00',
        color: '#000'
    },
    adverb: {
        backgroundColor: '#044FDE',
        color: '#fff'
    },
    verb: {
        backgroundColor: '#1AB248',
        color: '#fff'
    },
    demPronouns: {
        backgroundColor: '#108B93',
        color: '#fff'
    },
    pPronouns: {
        backgroundColor: '#02B5C3',
        color: '#fff'
    },
    article: {
        backgroundColor: '#328FDE',
        color: '#fff'
    },
    qWords: {
        backgroundColor: '#FF8209',
        color: '#fff'
    },
    adjectives: {
        backgroundColor: '#E21152',
        color: '#fff'
    },
    symbols: {
        color: '#000'
    }
})

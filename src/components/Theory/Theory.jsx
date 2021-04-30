import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import storage from '@react-native-firebase/storage'
import { shuffle } from '../../utils/shuffle'
import { useSelector, useDispatch } from 'react-redux'
import { ProgressBar } from '../Common/ProgressBar'
import { CommonButton } from '../Common/Button'
import { updateProgress } from '../../redux/progress'
import { Output } from '../Common/Output'
import { setBottomTabVisible } from '../../redux/bottomTab'
import { Award } from '../Common/Award'
import { Speaker } from '../Common/Speaker'
let keyArray = []
let outputArr = []

export function Theory({ route }) {
    const user = useSelector(state => state.auth.user)
    const level = route.params.num;
    const progress = useSelector(state => state.progress[level])
    const dispatch = useDispatch()
    const [num, setNum] = useState(0)
    const lesson = useSelector(state => state.theory.lessons[level][route.params.lessonIndex][num])
    const [wordNumber, setWordNumber] = useState(0)
    const [sentence, setSentence] = useState(lesson.sntc)
    const [transSentence, setTransSentence] = useState(lesson.tr)
    const [originSentence, setOriginSentence] = useState([...transSentence.split(' ')])
    const [choice, setChoice] = useState(shuffle([...originSentence]))
    const [isReady, setReady] = useState(false)
    const [result, setResult] = useState(false)
    const [numOfTasks, setNumOfTasks] = useSelector(state => state.theory.lessons[level])

    async function loadAudio() {
        try{
        SoundPlayer.stop()
        let url = await storage()
            .ref(`theory/${lesson.id}.ogg`)
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
        catch (e) {
            console.log(e)
        }
    }
    function next() {
        if (num < numOfTasks.length - 1) { setNum((prev) => prev + 1) }
    }

    function answer(word, id) {
        if (originSentence[wordNumber] == word) {
            setWordNumber((prev) => prev + 1)
            keyArray.push(id)
            outputArr.push(word)
            setResult(transSentence == outputArr.join(' '))
        }
    }
    useEffect(() => {
        setSentence(lesson.sntc),
            setTransSentence(lesson.tr),
            loadAudio()
        setResult(false)
        setWordNumber(0)
        keyArray = []
        outputArr = []
    }, [num])

    useEffect(() => setChoice(shuffle(transSentence.split(' '))), [sentence])
    useEffect(() => { setOriginSentence([...transSentence.split(' ')]) }, [transSentence])

    useEffect(() => {
        if (num === numOfTasks.length - 1 && result) { setReady(true) }
        if (result) {
            setTimeout(() => {
                fade(speakerAnim, 1, 500);
                play()
                setTimeout(() => {
                    fade(buttonAnim, 1, 500);
                }, 1000);
            }, 300);
        } else { fade(speakerAnim, 0, 500); fade(buttonAnim, 0, 500); }
    }, [result])

    const progressValue = route.params.lessonIndex * 7 + 4;
    useEffect(() => {
        if (isReady && progressValue > progress) dispatch(updateProgress(level, progressValue, user))
    }, [isReady])

    const speakerAnim = useRef(new Animated.Value(0)).current;
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
    });

    const symbols = useSelector(s => s.words.symbols)
    const adverb = useSelector(s => s.words.adverb)
    const verbs = useSelector(s => s.words.verbs)
    const demPronouns = useSelector(s => s.words.demPronouns)
    const pPronouns = useSelector(s => s.words.pPronouns)
    const article = useSelector(s => s.words.article)
    const qWords = useSelector(s => s.words.qWords)
    const pronoun = useSelector(s => s.words.pronoun)
    const adjectives = useSelector(s => s.words.adjectives)

    return (
        <ImageBackground source={require('../../img/londonBlur.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
            <View style={s.progressBar}>
                <ProgressBar count={num} numOfTasks={numOfTasks.length} />
            </View>
            <View style={s.wrapper}>
                <Animated.View style={[s.explainContainer, { opacity: descrAnim }]}>
                    <View style={{ alignItems: 'center' }} >
                        {lesson.descr ? <Text style={s.explainDescr}>{lesson.descr}</Text> : null}
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{lesson.expl.split(' ').map((w, i) => <Text key={i} style={[s.explainExample, verbs.some(e => e == w.replace('?', '')) ? s.verb : adverb.some(e => e == w.replace('?', '')) ? s.adverb : pronoun.some(e => e == w.replace('?', '')) ? s.pronoun : symbols.some(e => e == w.replace('?', '')) ? s.symbols : demPronouns.some(e => e == w.replace('?', '')) ? s.demPronouns : pPronouns.some(e => e == w.replace('?', '')) ? s.pPronouns : article.some(e => e == w.replace('?', '')) ? s.article : qWords.some(e => e == w.replace('?', '')) ? s.qWords : adjectives.some(e => e == w.replace('?', '')) ? s.adjectives : null]}>{w}</Text>)}</View>
                    </View>
                </Animated.View>
                <Animated.View style={[s.originContainer, { opacity: taskAnim }]}>
                    <Award />
                    <Text style={s.originHeader}>Cümləni topla</Text>
                    <Output value={sentence} />
                </Animated.View>
                <Animated.View style={[s.answerContainer, { opacity: outputAnim }]}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {outputArr.map((w, i) =>
                            <Text key={i} style={[s.choice, pronoun.some(e => e == w.replace('?', '')) ? s.pronoun : null, adverb.some(e => e == w.replace('?', '')) ? s.adverb : null, verbs.some(e => e == w.replace('?', '')) ? s.verb : demPronouns.some(e => e == w.replace('?', '')) ? s.demPronouns : pPronouns.some(e => e == w.replace('?', '')) ? s.pPronouns : article.some(e => e == w.replace('?', '')) ? s.article : qWords.some(e => e == w.replace('?', '')) ? s.qWords : adjectives.some(e => e == w.replace('?', '')) ? s.adjectives : symbols.some(e => e == w.replace('?', '')) ? s.symbols : null]}>{w}
                            </Text>)}
                    </View>
                </Animated.View>
                <Animated.View style={[s.choiceContainer, { opacity: outputAnim }]}>
                    {result ? <View style={{ justifyContent: 'space-around', width: '100%' }}>
                        <TouchableOpacity style={{ alignItems: 'center', paddingBottom: 5 }} disabled={!result} onPress={play}>
                            <Speaker opacity={speakerAnim} play={play} />
                        </TouchableOpacity>
                        <Animated.View style={{ opacity: buttonAnim }}>
                            <CommonButton result={result} isReady={isReady} next={next} num={level} />
                        </Animated.View>
                    </View>
                        : choice.map((w, i) =>
                            <TouchableOpacity key={i} onPress={() => answer(w, i)} disabled={result || keyArray.some(id => id == i)}>
                                <Text style={[s.choice, pronoun.some(e => e == w.replace('?', '')) ? s.pronoun : null, adverb.some(e => e == w.replace('?', '')) ? s.adverb : null, verbs.some(e => e == w.replace('?', '')) ? s.verb : demPronouns.some(e => e == w.replace('?', '')) ? s.demPronouns : pPronouns.some(e => e == w.replace('?', '')) ? s.pPronouns : article.some(e => e == w.replace('?', '')) ? s.article : qWords.some(e => e == w.replace('?', '')) ? s.qWords : adjectives.some(e => e == w.replace('?', '')) ? s.adjectives : symbols.some(e => e == w.replace('?', '')) ? s.symbols : null, keyArray.some(id => id == i) ? s.chosen : null]}>{w}</Text>
                            </TouchableOpacity>)}
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
        paddingBottom:10,
    },
    explainDescr: {
        fontSize: 17,
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
        paddingTop:10
    },
    choiceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 2
    },
    choice: {
        fontSize: 18,
        borderRadius: 15,
        color: '#000',
        marginRight: 5,
        marginBottom: 10,
        paddingVertical: 9,
        paddingHorizontal: 15,
        backgroundColor: '#F7F9FA',
        fontFamily: 'SFUIDisplay-Regular'
    },
    chosen: {
        backgroundColor: '#667D9C', 
        color: 'rgba(0,0,0,0)'
    },
    symbols: {
        backgroundColor: '#E2BD01', 
        color: '#fff',
    },
    pronoun: {
        backgroundColor: '#F54000', 
        color: '#fff'
    },
    adverb: {
        backgroundColor: '#328FDE', 
        color: '#fff'
    },
    verb: {
        backgroundColor: '#1AB248', 
        color: '#fff'
    },
    demPronouns: {
        backgroundColor: '#FF43f5', 
        color: '#fff'
    },
    pPronouns: {
        backgroundColor: '#02B5C3', 
        color: '#fff'
    },
    article: {
        backgroundColor: '#9AED5E', 
        color: '#fff'
    },
    qWords: {
        backgroundColor: '#108B93', 
        color: '#fff'
    },
    adjectives: {
        backgroundColor: '#E21152', 
        color: '#fff'
    },
    negative: {
        backgroundColor: '#ED0000', 
        color: '#fff'
    },
})

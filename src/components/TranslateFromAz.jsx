import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ImageBackground, Image } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import storage from '@react-native-firebase/storage';
import { shuffle } from '../utils/shuffle';
import { useDispatch, useSelector } from 'react-redux';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { CommonButton } from './Common/Button';
import { updateBeginnerProgress, updateElementaryProgress, updateIntermediateProgress, updatePreIntermediateProgress, updateUpperIntermediateProgress } from '../redux/progress';
import { Output } from './Common/Output';

export const TranslateFromAz = ({ route }) => {
    const level = route.params.num
    const progress = useSelector(state => state.progress[level])
    const dispatch = useDispatch()
    const [num, setNum] = useState(0)
    const sentences = useSelector(state => state.azEnSentences.sentences[level][route.params.lessonIndex][num])
    const [wordNumber, setWordNumber] = useState(0)
    const [output, setOutput] = useState('')
    const [sentence, setSentence] = useState(sentences.sntc)
    const [transSentence, setTransSentence] = useState(sentences.tr)
    const [originSentence, setOriginSentence] = useState([...transSentence.split(' ')])
    const [choice, setChoice] = useState(shuffle([...transSentence.split(' ')]))
    const [result, setResult] = useState(false)
    const [isReady, setReady] = useState(false)

    // async function loadAudio(){
    //     let url = await storage()
    //     .ref(lesson.u)
    //     .getDownloadURL()
    //     SoundPlayer.stop()
    //     SoundPlayer.loadUrl(url)
    //   }
    //   loadAudio()
    function play() {
        SoundPlayer.play()
    }
    function next() {
        if (num < 9) { setNum((prev) => prev + 1) }
    }
    function answer(word) {
        if (originSentence[wordNumber] == word) {
            setOutput((prev) => (prev + ' ' + word).trim());
            setWordNumber((prev) => prev + 1)
        }
    }
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };
    if (result) { fadeIn() }
    else { fadeOut() }

    useEffect(() => { setSentence(sentences.sntc), setTransSentence(sentences.tr), setOutput('') }, [num])
    useEffect(() => setChoice(shuffle(transSentence.split(' '))), [sentence])
    useEffect(() => { setOriginSentence([...transSentence.split(' ')]), setWordNumber(0) }, [transSentence])
    useEffect(() => setResult(transSentence == output), [output])
    useEffect(() => { if (num === 9 && result) { setReady(true) } }, [result])

    const progressValue = route.params.lessonIndex * 6 + 5;

    useEffect(() => {
        if (isReady && progressValue > progress) {
            dispatch(level === 0 ? updateBeginnerProgress(progressValue) : level === 1 ? updateElementaryProgress(progressValue) : level === 2 ? updatePreIntermediateProgress(progressValue) : level === 3 ? updateIntermediateProgress(progressValue) : level === 4 ? updateUpperIntermediateProgress(progressValue) : null)
        }
    }, [isReady])

    const fadeTask = useRef(new Animated.Value(0)).current;
    const fadeOutput = useRef(new Animated.Value(0)).current;

    const fadeInKey = (element,value) => {
        Animated.timing(element, {
            toValue: 1,
            duration: value,
            useNativeDriver: true
        }).start();
    }
    useEffect(()=>{
    setTimeout(() => {
        fadeInKey(fadeTask,500)  
    }, 200),
    setTimeout(() => {
        fadeInKey(fadeOutput,500)
    }, 700),
    []});

    return (
        <ImageBackground source={require('../img/londonBlur.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <ProgressBar count={num} />
                </View>
            <View style={style.wrapper}>
                <Animated.View style={{ flex: 2, justifyContent:'center', opacity:fadeTask}}>
                    <Text style={{ fontSize: 22, textAlign: 'center',  color:'#fff', borderRadius:10, marginBottom:15, fontWeight:'bold'}}>Cümləni topla</Text>
                    <Output value={sentence}/>
                </Animated.View>
                <Animated.View style={{ flex: 2, padding: 10, fontSize: 21, justifyContent:'center', opacity:fadeTask}}>
                    <TouchableOpacity style={{alignItems:'center', paddingBottom:10}}>
                        <Animated.Image style={{ width: 30, height: 30, opacity:fadeAnim }} source={require('../img/speakerW.png')} />
                    </TouchableOpacity>
                    <Output value={output}/>
                </Animated.View>
                <Animated.View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', flex: 1.5, opacity:fadeOutput}}>
                    {choice.map((w, i) =>
                        <TouchableOpacity key={i} onPress={() => answer(w)} disabled={result}>
                            <Text style={style.choice}>{w}</Text>
                        </TouchableOpacity>)}
                </Animated.View>
                <Animated.View style={{ marginTop: 20, justifyContent: 'center', flex: 2, opacity: fadeAnim }}>
                    <CommonButton result={result} isReady={isReady} next={next} num={level} />
                </Animated.View>
            </View>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    wrapper: {
        padding: 20,
        flex: 8,
    },
    sentence: {
        fontSize: 22, textAlign: 'center'
    },
    choiceWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 1.5
    },
    choice: {
        fontSize: 19,
        borderRadius: 5,
        paddingHorizontal: 5,
        color: '#000',
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal:10,
        backgroundColor: '#fff',
    },
    buttons: {
        marginTop: 18,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
})

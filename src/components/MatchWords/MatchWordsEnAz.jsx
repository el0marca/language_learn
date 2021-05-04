import React, { useEffect, useState, useRef } from 'react';
import { Text, TouchableOpacity, View, ImageBackground, Animated, Image } from 'react-native';
import { shuffle } from '../../utils/shuffle';
import { useDispatch, useSelector } from 'react-redux';
import { ProgressBar } from './../Common/ProgressBar';
import { updateProgress } from '../../redux/progress';
import { MatchButton } from './MatchButton';
import storage from '@react-native-firebase/storage';
import { Audio } from 'expo-av';
import { setBottomTabVisible } from '../../redux/bottomTab';
let keyArray = []

export const MatchWordsEnAz = ({ route }) => {
    const user = useSelector(state => state.auth.user)
    const level = route.params.num;
    const progress = useSelector(state => state.progress[level])
    const dispatch = useDispatch()
    const words = useSelector(state => state.wordsForMatch.words[level][route.params.lessonIndex])
    const [page, setPage] = useState(0)
    const [answerMode, setAnswerMode] = useState(false)
    const [wordList, setWordList] = useState([...words[0]])
    const [wordsToChoose, setWordsToChoose] = useState([...wordList])
    const [output, setOutput] = useState([])
    const [isReady, setIsReady] = useState(false)
    const [chosenWord, setChosenWord] = useState('')
    
    useEffect(() => {
        dispatch(setBottomTabVisible(false))
        return () => {
            dispatch(setBottomTabVisible(true))
            keyArray = []
        }
    }, [])

    async function playSound(word) {
        let url = await storage()
            .ref(`words/${word}.ogg`)
            .getDownloadURL()
        const { sound } = await Audio.Sound.createAsync({ uri: url })
        await sound.playAsync();
    }

    useEffect(() => { if (output.length === wordList.length) { setIsReady(true) } }, [output])
    const index = route.params.lessonIndex
    const progressValue = index < 40 ? index * 7 + 3 : index * 7 + 2
    console.log(index)
    useEffect(() => {
        keyArray = [];
        if (isReady && page === 1 && progressValue > progress) dispatch(updateProgress(level, progressValue, user),)
    }, [isReady])

    function ChangeAnswerMode() {
        fadeOutIn()
        setAnswerMode(true)
        setWordList(prev => shuffle(prev))
        setWordsToChoose(prev => shuffle(prev))
        fadeOut()
    }
    function choiseAWord(word, i) {
        if (chosenWord == word.tr) {
            setOutput((prev) => [...prev, [word.tr, word.id]])
            playSound(word.wd)
            keyArray.push(i)
        }
    }
    const fadeAn = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(fadeAn, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(fadeAn, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const fadeOutIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start()
        })
    };

    function next() {
        setAnswerMode(false)
        setPage(1)
        setWordList([...words[1]])
        setWordsToChoose([...words[1]])
        setOutput([])
        setIsReady(false)
    }
    if (!answerMode || isReady) { fadeIn() }

    function nums(w) { setChosenWord(w) }

    return (
        <View style={{ flex: 1, backgroundColor: '#181A1B' }}>
            <ImageBackground source={require('../../img/londonBlur.jpg')} style={s.imageBackground}>
                <View style={{ flex: 0.8, justifyContent: 'flex-end' }}>
                    <ProgressBar count={page + (page ? 4 * 2 : 4 * 1)} learnMode={true} />
                </View>
                <View style={s.header}>
                    <Text style={{ fontSize: 25, color: '#fff', textAlign: 'center', paddingHorizontal: 10, fontFamily: 'SFUIDisplay-Bold' }}>{!answerMode ? 'Tərcüməni yadda saxla' : 'Düzgün tərcüməni seç'}</Text>
                </View>
                <Animated.View style={[s.content, { opacity: fadeAnim }]}>
                    <View style={[s.answeredWords]}>{wordList.map((word) =>
                        <TouchableOpacity key={word.id} onPress={() => playSound(word.wd)} activeOpacity={0.6} style={s.originWordsContainer}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 25, height: 25 }} source={require('../../img/sound.png')} />
                            </View>
                            <Text style={s.originWordsText}>{word.wd}</Text>
                        </TouchableOpacity>)}
                    </View>
                    <View style={s.answeredWords}>
                        {wordList.map((word) =>
                            <TouchableOpacity key={word.id} onPress={() => nums(word.tr)} disabled={!answerMode}>
                                <Text key={word.id} style={[s.textAns, answerMode ? { backgroundColor: 'rgba(255,255,255,0.3)', color: 'rgba(0,0,0,0)', borderStyle: 'dashed', borderWidth: 0.6, borderColor: '#fff', paddingVertical: 9.7, marginVertical: 3.7, } : null, output.some(w => word.tr == w[0]) ? { backgroundColor: '#fff', color: '#000', borderWidth: 0, paddingVertical: 10, marginVertical: 4 } : chosenWord == word.tr ? { backgroundColor: '#4ba83e' } : null]}>{word.tr}</Text>
                            </TouchableOpacity>)}
                    </View>
                </Animated.View>
                <Animated.View style={{ flex: 2, opacity: fadeAnim }}>{answerMode ? <View style={s.chooseLine}>
                    {wordsToChoose.map((word, i) =>
                        <TouchableOpacity key={word.id} disabled={output.some(w => word.tr == w[0]) ? true : false} onPress={() => choiseAWord(word, i)}><Text style={[s.wordsForTap, keyArray.some(index => index == i) ? { backgroundColor: '#667D9C', color: 'rgba(0,0,0,0)' } : null]}>{word.tr}</Text>
                        </TouchableOpacity>)}
                </View> : false}
                </Animated.View>
                <Animated.View style={{ flex: 1, paddingHorizontal: 20, opacity: fadeAn }}>
                    <MatchButton answerMode={answerMode} ChangeAnswerMode={ChangeAnswerMode} isReady={isReady} page={page} next={next} level={level} />
                </Animated.View>
            </ImageBackground>
        </View>
    )
}
const s = ({
    imageBackground: {
        flex: 1,
        resizeMode: "center",
        justifyContent: "center"
    },
    header: {
        flex: 0.7,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 5,
        flex: 3,
    },
    answeredWords: {
        flex: 1,
    },
    originWordsContainer: {
        marginVertical: 4,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 5,
        paddingHorizontal: 5
    },
    originWordsText: {
        flex: 7,
        fontSize: 18,
        paddingVertical: 10,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'SFUIDisplay-Regular'
    },
    textAns: {
        fontSize: 18,
        marginVertical: 4,
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: '#fff',
        color: '#000',
        paddingVertical: 10,
        fontFamily: 'SFUIDisplay-Regular',
    },
    chooseLine: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 5,
    },
    wordsForTap: {
        fontSize: 18,
        marginRight: 10,
        marginVertical: 8,
        color: '#000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        fontFamily: 'SFUIDisplay-Regular',
    },
})
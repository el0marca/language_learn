import React, { useEffect, useState, useRef } from 'react';
import { Text, TouchableOpacity, View, ImageBackground, Animated, Image } from 'react-native';
import { shuffle } from '../utils/shuffle';
import { useDispatch, useSelector } from 'react-redux';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { updateBeginnerProgress, updateElementaryProgress, updateIntermediateProgress, updatePreIntermediateProgress, updateUpperIntermediateProgress } from '../redux/progress';
import { MatchButton } from './MatchButton';
// import SoundPlayer from 'react-native-sound-player';

const MatchWordsEnAz = ({ navigation, route }) => {
    const level = route.params.num;
    const progress = useSelector(state => state.progress[level])
    const dispatch = useDispatch()
    const words = useSelector(state => state.wordsForMatch.words[level][route.params.lessonIndex])
    const [page, setPage] = useState(0)
    const [numberOfWord, setNumberOfWord] = useState(0)
    const [answerMode, setAnswerMode] = useState(false)
    const [wordList, setWordList] = useState([...words[0]]) //список для перевода
    const [wordsToChoose, setWordsToChoose] = useState([...wordList])
    const [output, setOutput] = useState([]) // слова которые были введены
    const [isReady, setIsReady] = useState(false)

    async function play(word) {
        SoundPlayer.playSoundFile(word, 'mp3')
        // SoundPlayer.stop()
    }

    useEffect(() => { if (output.length === wordList.length) { setIsReady(true) } }, [output])

    const progressValue = route.params.lessonIndex * 6 + 3;
    useEffect(() => {
        if (isReady && page === 1 && progressValue > progress) {
            dispatch(level === 0 ? updateBeginnerProgress(progressValue) : level === 1 ? updateElementaryProgress(progressValue) : level === 2 ? updatePreIntermediateProgress(progressValue) : level === 3 ? updateIntermediateProgress(progressValue) : level === 4 ? updateUpperIntermediateProgress(progressValue) : null)
        }
    }, [isReady])

    function ChangeAnswerMode() { 
        fadeOutIn()
        setAnswerMode(true)
        setWordList(prev => shuffle(prev))
        setWordsToChoose(prev => shuffle(prev))
        fadeOut()
    }
    function choiseAWord(word) {
        if (wordList[numberOfWord].tr === word.tr) {
            setNumberOfWord((p) => p + 1);
            setOutput((prev) => [...prev, [word.tr, word.id],])
            // setTimeout(() => {
            //     play(word.wd)
            // }, 500);
        }
    }

    let listOfAnswers = (wordList.map((word) =>
        <Text key={word.id} style={s.textAns}>{word.tr}</Text>)
    )
    let listOfAnsweredWords = (
        output.map((word) =>
            <Text key={word[1]} style={s.textAns}>{word[0]}</Text>)
    )

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
            }).start()})
    };

    function next() {
        setAnswerMode(false)
        setPage(1)
        setWordList([...words[1]])
        setWordsToChoose([...words[1]])
        setOutput([])
        setIsReady(false)
        setNumberOfWord(0)
    }
    if (!answerMode || isReady) { fadeIn() }

    return (
            <View style={{ flex: 1, backgroundColor: '#181A1B'}}>
                <ImageBackground source={require('../img/londonBlur.jpg')} style={s.imageBackground}>
                    <View style={{ flex: 0.9, justifyContent: 'flex-end' }}>
                            <ProgressBar count={page + (page ? 4 * 2 : 4 * 1)} />
                    </View>
                    <View style={s.header}>
                        <Text style={{ fontSize: 23, fontFamily: 'SFUIDisplay-Bold', color: '#fff', textAlign:'center', paddingHorizontal:10}}>{!answerMode?'Tərcüməni yadda saxla':'Düzgün tərcüməni seç'}</Text>
                    </View>
                    <Animated.View style={{flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 10, flex: 3,opacity:fadeAnim}}>
                        <View style={s.originWords}>{wordList.map((word) =>
                            <TouchableOpacity activeOpacity={.7} onPress={() => play(word.wd)} key={word.id} style={s.originWord}>
                                <Image style={{ width: 25, height: 25 }} source={require('../img/sound.png')} />
                                <Text style={s.text}>{word.wd}</Text>
                            </TouchableOpacity>)}
                        </View>
                        <View style={s.answeredWords}>{!answerMode ? listOfAnswers : listOfAnsweredWords}</View>
                    </Animated.View>
                    <Animated.View style={{flex:2,opacity:fadeAnim}}>{answerMode ? <View style={s.chooseLine}>
                        {wordsToChoose.map((word) =>
                            <TouchableOpacity key={word.id} disabled={isReady} onPress={() => choiseAWord(word)}><Text style={s.wordsForTap}>{word.tr}</Text>
                            </TouchableOpacity>)}
                    </View> : false}
                    </Animated.View>
                    <Animated.View style={{ flex: 2, paddingHorizontal: 20, opacity: fadeAn }}>
                        <MatchButton answerMode={answerMode} ChangeAnswerMode={ChangeAnswerMode} isReady={isReady} page={page} next={next} level={level} />
                    </Animated.View>
                </ImageBackground>
            </View>
    )
}
const s = ({
    imageBackground:{
        flex: 1, resizeMode: "center", justifyContent: "center"
    },
    header: {
        flex: 1, justifyContent: 'flex-end', alignItems: 'center',
    },
    content: {
        flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 10, flex: 3,
    },
    wordsToChoose: {
        flex: 2
    },
    originWords: {
        flex: 1,
    },
    originWord: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginVertical: 4, borderRadius: 5, paddingLeft: 4, paddingRight:2, minWidth: 120, 
    },
    answeredWords: {
        flex: 1.1, marginLeft: 10
    },
    text: {
        fontSize: 18, minWidth: 120, textAlign: 'center', color: 'black', paddingVertical: 5, fontFamily: 'SFUIDisplay-Regular',
    },
    textAns: {
        fontSize: 18, marginVertical: 4, borderRadius: 5, textAlign: 'center', backgroundColor: '#fff',
        color: '#000', paddingVertical: 5, fontFamily: 'SFUIDisplay-Regular',
    },
    chooseLine: {
        flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: 5
    },
    wordsForTap: {
        fontSize: 18, marginRight: 10, marginVertical: 5, color: '#000', paddingVertical: 5, paddingHorizontal:10, backgroundColor: '#fff', borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center', borderRadius: 10, backgroundColor: 'white', fontSize: 20, borderRadius: 5, padding: 5
    }
})
export default MatchWordsEnAz
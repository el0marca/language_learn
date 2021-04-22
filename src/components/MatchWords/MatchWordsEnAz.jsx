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
let keyArray = [];

export const MatchWordsEnAz = ({ navigation, route }) => {
    const user=useSelector(state=>state.auth.user)
    const level = route.params.num;
    const progress = useSelector(state => state.progress[level])
    const dispatch = useDispatch()
    const words = useSelector(state => state.wordsForMatch.words[level][route.params.lessonIndex])
    const [page, setPage] = useState(0)
    const [numberOfWord, setNumberOfWord] = useState(0)
    const [answerMode, setAnswerMode] = useState(false)
    const [wordList, setWordList] = useState([...words[0]]) 
    const [wordsToChoose, setWordsToChoose] = useState([...wordList])
    const [output, setOutput] = useState([]) 
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {   
        dispatch(setBottomTabVisible(false))
        return () => {
            dispatch(setBottomTabVisible(true))
            keyArray = []
        }
      }, []) 

    async function playSound(word) {
        let url = await storage()
        .ref(`words/${word}.mp3`)
        .getDownloadURL()
        const { sound } = await Audio.Sound.createAsync({uri:url});
        await sound.playAsync(); }

    useEffect(() => { if (output.length === wordList.length) { setIsReady(true) } }, [output])

    const progressValue = route.params.lessonIndex * 7 + 3;
    useEffect(() => {keyArray = [];
        if (isReady && page === 1 && progressValue > progress) dispatch(updateProgress(level, progressValue, user),)
    }, [isReady])

    function ChangeAnswerMode() { 
        fadeOutIn()
        setAnswerMode(true)
        setWordList(prev => shuffle(prev))
        setWordsToChoose(prev => shuffle(prev))
        fadeOut()
    }
    function choiseAWord(word,i) {
        if (wordList[numberOfWord].tr === word.tr) {
            setNumberOfWord((p) => p + 1);
            setOutput((prev) => [...prev, [word.tr, word.id],])
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

    let listOfAnswers = (wordList.map((word) =>
    <Text key={word.id} style={s.textAns}>{word.tr}</Text>)
)
    let listOfAnsweredWords = ( output.map((word) =>
        <Text key={word[1]} style={[s.textAns, {backgroundColor:'#25AE88', color:'#fff'}]}>{word[0]}</Text>)
)
    return (
            <View style={{ flex: 1, backgroundColor: '#181A1B'}}>
                <ImageBackground source={require('../../img/londonBlur.jpg')} style={s.imageBackground}>
                    <View style={{ flex: 0.9, justifyContent: 'flex-end' }}>
                        <ProgressBar count={page + (page ? 4 * 2 : 4 * 1)} />
                    </View>
                    <View style={s.header}>
                        <Text style={{ fontSize: 25, color: '#fff', textAlign:'center', paddingHorizontal:10, fontFamily:'SFUIDisplay-Bold'}}>{!answerMode?'Tərcüməni yadda saxla':'Düzgün tərcüməni seç'}</Text>
                    </View>
                    <Animated.View style={{flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 5, flex: 3,opacity:fadeAnim }}>
                        <View style={[s.answeredWords]}>{wordList.map((word)=>
                            <TouchableOpacity onPress={()=>playSound(word.wd)} activeOpacity={0.6} style={s.originWordsContainer} key={word.id}>
                                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Image style={{ width: 20, height: 20}} source={require('../../img/sound.png')} />
                                </View>
                                <Text style={s.originWordsText}>{word.wd}</Text>
                            </TouchableOpacity>)}
                        </View>                        
                        <View style={s.answeredWords}>{!answerMode ? listOfAnswers : listOfAnsweredWords}</View>
                    </Animated.View>
                    <Animated.View style={{flex:1.5,opacity:fadeAnim}}>{answerMode ? <View style={s.chooseLine}>
                        {wordsToChoose.map((word,i) =>
                            <TouchableOpacity key={word.id} disabled={isReady} onPress={() => choiseAWord(word,i)}><Text style={[s.wordsForTap, keyArray.some(index=>index==i)?{backgroundColor:'rgba(255,255,255,0.5)',borderWidth:1, borderColor:'#fff', borderStyle:'dashed', paddingHorizontal:9, paddingVertical:6, color:'rgba(0,0,0,0)'}:null]}>{word.tr}</Text>
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
    imageBackground:{
        flex: 1, resizeMode: "center", justifyContent: "center"
    },
    header: {
        flex: 1, justifyContent: 'flex-end', alignItems: 'center'
    },
    content: {
        flex: 3, flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 10, 
    },
    wordsToChoose: {
        flex: 2,
    },
    answeredWords: {
        flex: 1, 
    },
    originWordsContainer:{
        marginVertical: 4, borderRadius: 10, backgroundColor: '#fff', flexDirection:'row', justifyContent:'center', marginRight:6, paddingHorizontal:5
    },
    originWordsText:{
        flex:7, fontSize: 20, paddingVertical: 7, color:'#000', textAlign:'center',fontFamily:'SFUIDisplay-Regular'
    },
    textAns: {
        fontSize: 20, marginVertical: 4, borderRadius: 10, textAlign: 'center', backgroundColor: '#fff',
        color: '#000', paddingVertical: 7, fontFamily:'SFUIDisplay-Regular'
    },
    chooseLine: {
        flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: 5
    },
    wordsForTap: {
        fontSize: 17, marginRight: 10, marginVertical: 5, color: '#000', paddingVertical: 7, paddingHorizontal:10, backgroundColor: '#fff', borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center', borderRadius: 10, backgroundColor: 'white', fontSize: 20, borderRadius: 5, padding: 5
    }
})
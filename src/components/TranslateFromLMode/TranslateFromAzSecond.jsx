import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TranslateFrom } from './TranslateFrom'

export const TranslateFromAzSecond = ({ route }) => {
    const [num, setNum] = useState(0)
    const sentences = useSelector(state => state.theory.lessons[route.params.lessonIndex][num])
    function setNumCount() {
        setNum(prev => prev + 1)
    }
    const progressValue = route.params.lessonIndex * 7 + 6
    return (
        <TranslateFrom route={route} sentences={sentences} num={num} setNumCount={setNumCount} type={'theory'} progressValue={progressValue} />
    )
}

























// export const TranslateFromAz = ({ route }) => {
//     const user=useSelector(state=>state.auth.user)
//     const level = route.params.num
//     const progress = useSelector(state => state.progress[level])
//     const dispatch = useDispatch()
//     const [num, setNum] = useState(0)
//     const sentences = useSelector(state => state.azEnSentences.sentences[level][route.params.lessonIndex][num])
//     const [wordNumber, setWordNumber] = useState(0)
//     const [output, setOutput] = useState('')
//     const [sentence, setSentence] = useState(sentences.sntc)
//     const [transSentence, setTransSentence] = useState(sentences.tr)
//     const [originSentence, setOriginSentence] = useState([...transSentence.split(' ')])
//     const [choice, setChoice] = useState(shuffle([...transSentence.split(' ')]))
//     const [result, setResult] = useState(false)
//     const [isReady, setReady] = useState(false)

//     async function loadAudio(){
//         SoundPlayer.stop()
//         let url = await storage()
//         .ref(`azEn/${sentences.id}.mp3`)
//         .getDownloadURL()
//         SoundPlayer.loadUrl(url)
//       }
//     //   async function play(word) {
//     //     let url = await storage()
//     //       .ref('sounds/abandon.mp3')
//     //       .getDownloadURL()
//     //     SoundPlayer.playUrl(url)
//     //     // SoundPlayer.stop()
//     //   }
//     //   play()

//     useEffect(() => {   
//         dispatch(setBottomTabVisible(false))
//         return () => {
//         dispatch(setBottomTabVisible(true))
//         keyArray=[]
//         }
//       }, []) 

//     function play() {
//         SoundPlayer.play()
//     }
//     function next() {
//         if (num < 9) { setNum((prev) => prev + 1) }
//     }
//     function answer(word, id) {
//         if (originSentence[wordNumber] == word) {
//             setOutput((prev) => (prev + ' ' + word).trim());
//             setWordNumber((prev) => prev + 1)
//             keyArray.push(id),
//             outputArr.push(word)
//         }
//     }
//     const speakerAnim = useRef(new Animated.Value(0)).current
//     const taskAnim = useRef(new Animated.Value(0)).current
//     const outputAnim = useRef(new Animated.Value(0)).current

//     const fade = (element,toValue,duration) => {
//         Animated.timing(element, {
//             toValue: toValue,
//             duration: duration,
//             useNativeDriver: true
//         }).start()
//     }

//     if (result) { fade(speakerAnim,1,500) }
//     else { fade(speakerAnim,0,500) }

//     useEffect(() => { setSentence(sentences.sntc), setTransSentence(sentences.tr), setOutput(''), loadAudio()
// }, [num])
//     useEffect(() => setChoice(shuffle(transSentence.split(' '))), [sentence])
//     useEffect(() => { setOriginSentence([...transSentence.split(' ')]), setWordNumber(0),keyArray=[],outputArr=[]}, [transSentence])
//     useEffect(() => setResult(transSentence == output), [output])
//     useEffect(() => { if (num === 9 && result) { setReady(true) } }, [result])

//     const progressValue = route.params.lessonIndex * 7 + 5;

//     useEffect(() => {
//         if (isReady && progressValue > progress) dispatch(updateProgress(level, progressValue, user))
//     }, [isReady])

//     useEffect(()=>{
//     setTimeout(() => {
//         fade(taskAnim,1,500)  
//     }, 200),
//     setTimeout(() => {
//         fade(outputAnim,1,500)
//     }, 700),
//     []});

//     return (
//         <ImageBackground source={require('../img/londonBlur.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
//                 <View style={{ flex: 1, justifyContent: 'flex-end' }}>
//                     <ProgressBar count={num} />
//                 </View>
//             <View style={s.wrapper}>
//                 <Animated.View style={{ flex: 2, justifyContent:'center', opacity:taskAnim, alignItems:'center'}}>
//                     <Award/>
//                     <View style={{justifyContent:'center', alignItems:'center'}}>
//                         <Text style={{ fontSize: 25, textAlign: 'center',  color:'#fff', borderRadius:10, marginBottom:15, fontFamily:'SFUIDisplay-Bold', width:'100%'}}>Cümləni topla</Text>
//                     </View>
//                     <Output value={sentence}/>
//                 </Animated.View>
//                 <Animated.View style={{ flex: 2, padding: 10, fontSize: 21, justifyContent:'center', opacity:taskAnim}}>
//                     <TouchableOpacity style={{alignItems:'center', paddingBottom:10}}>
//                         <Animated.Image style={{ width: 30, height: 30, opacity:speakerAnim }} source={require('../img/speaker.png')} />
//                     </TouchableOpacity>
//                     <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', flex: 1.8,}}>
//                     {outputArr.map((w, i) => <Text key={i} style={s.choice}>{w}</Text>)}
//                     </View>
//                 </Animated.View>
//                 <Animated.View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', flex: 2, opacity:outputAnim}}>
//                     {choice.map((w, i) =>
//                         <TouchableOpacity key={i} onPress={() => answer(w,i)} disabled={result||keyArray.some(id=>id==i)
//                         }>
//                             <Text style={[s.choice, keyArray.some(id=>id==i)?{backgroundColor:'rgba(255,255,255,0.5)',borderWidth:1, borderColor:'#fff', borderStyle:'dashed', paddingHorizontal:9, paddingVertical:4, color:'rgba(0,0,0,0)'}:null]}>{w}
//                             </Text>
//                         </TouchableOpacity>)}
//                 </Animated.View>
//                 <Animated.View style={{ marginTop: 20, justifyContent: 'center', flex: 1, opacity: 1 }}>
//                     <CommonButton result={result} isReady={isReady} next={next} num={level} />
//                 </Animated.View>
//             </View>
//         </ImageBackground>
//     )
// }

// const s = StyleSheet.create({
//     wrapper: {
//         padding: 20,
//         flex: 8,
//     },
//     choice: {
//         fontSize: 20,
//         borderRadius: 5,
//         color: '#000',
//         marginHorizontal: 5,
//         marginVertical: 5,
//         paddingVertical: 5,
//         paddingHorizontal:10,
//         backgroundColor:'#fff',
//         fontFamily:'SFUIDisplay-Regular'
//     },
//     buttons: {
//         marginTop: 18,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 2,
//     },
// })

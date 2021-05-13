// import React, { useEffect, useRef, useState } from 'react'
// import { View, ImageBackground, ScrollView, Animated, StyleSheet, Dimensions, Text } from 'react-native'
// import { useSelector } from 'react-redux';
// // import { Level } from './Level';
// import { Circle } from '../Common/Circle';
// import { BoxShadow } from 'react-native-shadow'

// export const Levels = () => {
//     const progress = useSelector(state => state.progress)
//     const { width, height } = Dimensions.get('screen')
//     const beginner = useRef(new Animated.Value(width * .64)).current
//     const elementary = useRef(new Animated.Value(width * .64)).current
//     const preIntermediate = useRef(new Animated.Value(width * .64)).current
//     const intermediate = useRef(new Animated.Value(width * .50)).current
//     const upperIntermediate = useRef(new Animated.Value(width * .64)).current
//     const [offset, setOffset] = useState(0)
//     const [currentPage, setCurrentPage] = useState(0)

//     let bigWidth = width * .65
//     let smallWidth = width * .55
//     let interval = width * 0.7

//     const fade = (element, toValue) => {
//         Animated.timing(element, {
//             toValue: toValue,
//             duration: 500,
//             useNativeDriver: false,
//         }).start()
//     }
//     useEffect(() => {
//         if (offset >= interval) { fade(elementary, bigWidth), fade(beginner, smallWidth), setCurrentPage(1) }
//         else { fade(elementary, smallWidth), fade(beginner, bigWidth), setCurrentPage(0) }
//         if (offset >= interval * 1.1) { fade(preIntermediate, bigWidth), fade(elementary, smallWidth), setCurrentPage(2) }
//         else { fade(preIntermediate, smallWidth) }
//         if (offset >= interval * 2.2) { fade(intermediate, bigWidth), fade(preIntermediate, smallWidth), setCurrentPage(3) }
//         else { fade(intermediate, smallWidth) }
//         if (offset >= interval * 3.2) { fade(upperIntermediate, bigWidth), fade(intermediate, smallWidth), setCurrentPage(4) }
//         else { fade(upperIntermediate, smallWidth) }
//     }, [offset])

//     const cProgress = progress[currentPage] - 1
//     let learnedWords = 0
//     let theory = 0
//     let passedSentences = 0

//     if (cProgress < 280) { learnedWords += (Math.floor(cProgress / 7) * 14) }
//     if (cProgress <= 280 && cProgress % 7 >= 2) { learnedWords += 7 }
//     if (cProgress > 280) { learnedWords += (Math.floor((cProgress - 280) / 7) * 7) + 560 }
//     if (cProgress < 280 && cProgress % 7 >= 1) { learnedWords += 7 }
//     if (cProgress < 280) { theory += (Math.floor(cProgress / 7)) * 10 }
//     else { theory = 400 }
//     if (cProgress < 280 && cProgress % 7 >= 3) { theory += 10 }
//     if (cProgress < 280) { passedSentences += (Math.floor(cProgress / 7) * 20) }
//     if (cProgress <= 280 && cProgress % 7 >= 4) { passedSentences += 10 }
//     if (cProgress <= 280 && cProgress % 7 >= 5) { passedSentences += 10 }
//     if (cProgress > 280) { passedSentences += (Math.floor((cProgress - 280) / 7) * 30) + 800 }
//     if (cProgress > 280 && cProgress % 7 >= 2) { passedSentences += 10 }
//     if (cProgress > 280 && cProgress % 7 >= 3) { passedSentences += 10 }
//     if (cProgress > 280 && cProgress % 7 >= 5) { passedSentences += 10 }

//     return (
//         <ImageBackground source={{uri:'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fbackground%2FtasksBg.jpg?alt=media&token=9f985407-a58e-4dbe-b5cb-d271af9a32c5'}} style={s.imageBackground}>
//             <View style={s.progressContainer}>
//                 <View style={s.progress} >
//                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                         <Circle percent={(cProgress) / 3.5} progress={false} />
//                     </View>
//                     <View style={{ flex: 4, justifyContent: 'space-around', paddingLeft: 10 }}>
//                         {(!learnedWords) ? <Text style={{ fontSize: 18, fontFamily: 'SFUIDisplay-Regular' }}>Progress mövcud deyil</Text> :
//                             <View><Text style={{ fontSize: 18, fontFamily: 'SFUIDisplay-Regular' }}>{learnedWords} unikal söz</Text>
//                                 <Text style={{ fontSize: 18, fontFamily: 'SFUIDisplay-Regular' }}>{theory} qrammatik tapşırıq</Text>
//                                 <Text style={{ fontSize: 18, fontFamily: 'SFUIDisplay-Regular' }}>{passedSentences} unikal cümlə</Text>
//                             </View>}
//                     </View>
//                 </View>
//             </View>
//             <View style={{ flex: 1.3, }}>
//                 <ScrollView snapToInterval={interval} bounces={false} horizontal={true} decelerationRate={0.7} onScroll={(e) => setOffset(e.nativeEvent.contentOffset.x)}>
//                     <BoxShadow setting={{ width: interval, height: interval, color: "#000", border: 30, radius: 120, opacity: 0.1, x: 0, y: 0, style: { justifyContent: 'center', alignItems: 'center', marginLeft: width * .147, borderRadius: 100, marginTop: interval * 0.1 } }}>
//                         <Animated.View style={[s.levelContaier, { width: beginner, height: beginner }]}>
//                             {/* <Level level={'Beginner'} num={0} /> */}
//                         </Animated.View>
//                     </BoxShadow>
//                     <BoxShadow setting={{ width: interval, height: interval, color: "#000", border: 30, radius: 120, opacity: 0.1, x: 0, y: 0, style: { justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginTop: interval * 0.5 } }}>
//                         <Animated.View style={[s.levelContaier, { width: elementary, height: elementary, backgroundColor: '#F44336' }]}>
//                             {/* <Level level={'Elementary'} num={1} /> */}
//                         </Animated.View>
//                     </BoxShadow>
//                     <BoxShadow setting={{ width: interval, height: interval, color: "#000", border: 30, radius: 120, opacity: 0.1, x: 0, y: 0, style: { justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginTop: interval * 0.1 } }}>
//                             <Animated.View style={[s.levelContaier, { width: preIntermediate, height: preIntermediate, backgroundColor: '#25AE88' }]}>
//                                 {/* <Level level={'Pre-Intermediate'} num={2} /> */}
//                             </Animated.View>
//                     </BoxShadow>
//                     <BoxShadow setting={{ width: interval, height: interval, color: "#000", border: 30, radius: 120, opacity: 0.1, x: 0, y: 0, style: { justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginTop: interval * 0.5 } }}>
//                             <Animated.View style={[s.levelContaier, { width: intermediate, height: intermediate, backgroundColor: '#DB2B42' }]}>
//                                 {/* <Level level={'Intermediate'} num={3} /> */}
//                             </Animated.View>
//                     </BoxShadow>
//                     <BoxShadow setting={{ width: interval, height: interval, color: "#000", border: 30, radius: 120, opacity: 0.1, x: 0, y: 0, style: { justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginTop: interval * 0.1, marginRight: width * .143, } }}>
//                         <Animated.View style={[s.levelContaier, { width: upperIntermediate, height: upperIntermediate, backgroundColor: '#0881FF' }]}>
//                             {/* <Level level={'Upper-Intermediate'} num={4} /> */}
//                         </Animated.View>
//                     </BoxShadow>
//                 </ScrollView>
//             </View>
//         </ImageBackground>
//     )
// }

// const s = StyleSheet.create({
//     imageBackground: {
//         resizeMode: "center",
//         justifyContent: "center",
//         alignItems: 'center',
//         flex: 1
//     },
//     progressContainer: {
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     progress: {
//         width: '90%',
//         backgroundColor: '#fff',
//         borderRadius: 25,
//         padding: 10,
//         paddingVertical:15,
//         justifyContent: 'center',
//         flexDirection: 'row',
//         marginTop: 50
//     },
//     levelContaier: {
//         justifyContent: 'space-around',
//         borderRadius: 999,
//         backgroundColor: '#0881FF',
//     }
// })
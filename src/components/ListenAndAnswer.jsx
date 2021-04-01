import React, {useRef} from 'react'
import { Image, Text, View, Animated, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import storage from '@react-native-firebase/storage';
import { firebase } from '@react-native-firebase/storage';
import SoundPlayer from 'react-native-sound-player';
import { useSelector } from 'react-redux';
import { ProgressBar } from './ProgressBar/ProgressBar';

export const ListenAndAnswer = ({ navigation, route }) => {
    const [numOfSentence, setNumOfSentence] = useState(0)
    const sentence = useSelector(state => state.listenAndAnswer.sentences[route.params.num - 1][numOfSentence])
    async function loadAudio() {
        let url = await storage()
            .ref(sentence.u)
            .getDownloadURL()
        SoundPlayer.stop()
        SoundPlayer.loadUrl(url)
    }
    loadAudio()
    function play() {
        SoundPlayer.play()
    }
    function next() {
        if (numOfSentence < 9) { setNumOfSentence((prev) => prev + 1) }
    }
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    };
    fadeIn()
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };
    let result=null;
    return (
        <>
            <ProgressBar count={numOfSentence} />
            <View style={{ alignItems: 'center', backgroundColor: 'green' }}>
                <Text>Прослущайте и переведите</Text>
                <TouchableOpacity style={{ width: 140, height: 140, backgroundColor: '#fff', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }} onPress={play}>
                    <Image style={{ width: 120, height: 120 }} source={require('../img/microphone128.png')} />
                </TouchableOpacity>
            </View>
            {/* <Animated.View style={{flexDirection:'row', width:'100%'}}>
                <TouchableOpacity onPress={prev}><Text style={{backgroundColor:'red',fontSize:25}}>prev</Text></TouchableOpacity>
                <TouchableOpacity onPress={next}><Text style={{backgroundColor:'red',fontSize:25}}>next</Text></TouchableOpacity>
            </Animated.View> */}
            <View style={s.buttons}>
                {/* <TouchableOpacity style={s.button} onPress={prev}>
                    <Text style={{ fontSize: 25 }}>Prev</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.button}>
                    <Text style={{ fontSize: 25 }}>Home</Text>
                </TouchableOpacity> */}
                <TouchableOpacity disabled={result} onPress={next}>
                    {<Animated.Text style={{ width: 70, backgroundColor: '#ffff', alignItems: 'center', fontSize: 25, opacity: fadeAnim }}>Next</Animated.Text>}
                </TouchableOpacity>
            </View>
        </>
    )
}

const s = StyleSheet.create({
   buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: 70,
        backgroundColor: '#ffff',
        alignItems: 'center'
    },
    speaker: {
        width: 40,
        height: 25,
        alignItems: 'center',
    }
})
import React, { useState } from 'react'
import { Task } from './Task'
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'
import { Back } from '../Common/Back'

export const Tasks = ({ route }) => {
    const [num, setNum] = useState(route.params.num)
    const [index, setIndex] = useState(route.params.index)
    const [numForProgress, setNumForProgress] = useState((route.params.index) * 7)
    const progress = useSelector(state => state.progress[num])
    const lesson = index + 1;

    return (
        <ImageBackground source={{uri:'https://firebasestorage.googleapis.com/v0/b/asan-english.appspot.com/o/img%2Fbackground%2FtasksBg.jpg?alt=media&token=9f985407-a58e-4dbe-b5cb-d271af9a32c5'}} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
            <View style={s.header}>
                <View style={{ position: 'absolute', left: 20, bottom: 10, zIndex: 1 }}>
                    <Back />
                </View>
                <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center', fontFamily: 'SFUIDisplay-Bold' }}>Dərs {lesson}</Text>
            </View>
            <View style={s.container}>
                <ScrollView >
                    <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 22, fontFamily: 'SFUIDisplay-Bold', color: '#fff' }}>{index < 40 ? 'Təlim keç' : 'Ümumi praktika'}</Text>

                    {index < 40 ? <View>
                        <Task routeName={'LearnWords'} header={'Sözləri çap et'} setDisable={progress < numForProgress + 1} setSuccess={progress < numForProgress + 2} lessonIndex={index} num={num} />
                    </View> : null}
                    <View>
                        <Task routeName={'MatchWordsEnAz'} header={'Sözləri uyğunlaşdır'} setDisable={index < 40 ? progress < numForProgress + 2 : progress < numForProgress + 1} setSuccess={index < 40 ? progress < numForProgress + 3 : progress < numForProgress + 2} lessonIndex={index} num={num} />
                    </View>
                    {index < 40 ? <View>
                        <Task routeName={'Theory'} header={'Qrammatikanı öyrən'} setDisable={progress < numForProgress + 3} setSuccess={progress < numForProgress + 4} lessonIndex={index} num={num} />
                    </View> : null}

                    {index < 40 ? <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 22, fontFamily: 'SFUIDisplay-Bold', color: '#fff' }}>Özünü yoxla</Text> : null}

                    <View>
                        <Task routeName={'TranslateFromEn'} header={'İngilis dilindən Azərbaycan dilinə tərcümə'}
                            setDisable={index < 40 ? progress < numForProgress + 4 : progress < numForProgress + 2} setSuccess={index < 40 ? progress < numForProgress + 5 : progress < numForProgress + 3}
                            lessonIndex={index} num={num} />
                    </View>
                    <View >
                        <Task routeName={'TranslateFromAz'} header={index < 40 ? 'Azərbaycan dilindən İngilis dilinə tərcümə' : 'Azərbaycan dilindən İngilis dilinə tərcümə 1/2'} setDisable={index < 40 ? progress < numForProgress + 5 : progress < numForProgress + 3} setSuccess={index < 40 ? progress < numForProgress + 6 : progress < numForProgress + 4}
                            lessonIndex={index} num={num} />
                    </View>
                    <View >
                        <Task routeName={'ListenAndEnter'} header={index < 40 ? 'Dinlə və cümləni topla' : 'Dinlə və cümləni topla 1/2'} setDisable={index<40?progress < numForProgress + 6:progress < numForProgress + 4} setSuccess={index<40?progress < numForProgress + 7:progress < numForProgress + 5} lessonIndex={index} num={num} />
                    </View>
                    {index >= 40 ? <View>
                        <Task routeName={'TranslateFromAzSecond'} header={'Azərbaycan dilindən İngilis dilinə tərcümə 2/2'} setDisable={progress < numForProgress + 5} setSuccess={index<40?progress < numForProgress + 5:progress < numForProgress + 6} lessonIndex={index} num={num} />
                    </View> : null}
                    {index >= 40 ? <View>
                        <Task routeName={'ListenAndEnterSecond'} header={'Dinlə və cümləni topla 2/2'} setDisable={progress < numForProgress + 6} setSuccess={progress < numForProgress + 7} lessonIndex={index} num={num} />
                    </View> : null}
                    <View style={{ marginBottom: 60 }}>
                        <Task routeName={'ListenAndTranslate'} header={'Dinlə və tərcümə et'} setDisable={progress < numForProgress + 7} setSuccess={progress < numForProgress + 8} lessonIndex={index} num={num} />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const s = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    container: {
        flex: 9,
    }
})


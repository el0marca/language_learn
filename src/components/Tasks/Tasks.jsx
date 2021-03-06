import React, { useEffect, useState } from 'react'
import { Task } from './Task'
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Back } from '../Common/Back'
import { setBottomTabTransparent } from '../../redux/bottomTab'

export const Tasks = ({ route }) => {
    const [index, setIndex] = useState(route.params.index)
    const [numForProgress, setNumForProgress] = useState(index * 8)
    const progress = useSelector(state => state.progress[0])
    const lessonNum = index + 1;
    const dispatch = useDispatch()
    const practice = route.params.practice

    useEffect(() => {
        dispatch(setBottomTabTransparent(false));
        return () => {dispatch(setBottomTabTransparent(true))}
    },
        [])
    return (
        <ImageBackground source={require('../../img/bg/tasksBg.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
            <View style={s.header}>
                <View style={{ position: 'absolute', left: 20, bottom: 15, zIndex: 1 }}>
                    <Back />
                </View>
                <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center', fontFamily: 'SFUIDisplay-Bold' }}>Dərs {lessonNum}</Text>
            </View>
            <View style={s.container}>
                <ScrollView>
                    <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 20, fontFamily: 'SFUIDisplay-Bold', color: '#0f3073' }}>{!practice ? 'Təlim keç' : 'Ümumi praktika'}</Text>
                    {!practice ? <View>
                        <Task routeName={'LearnWords'} header={'Writing'} descr={'Yeni sözləri dinlə və çap et'} setDisable={progress < numForProgress + 1} setSuccess={progress < numForProgress + 2} lessonIndex={index} />
                    </View> : null}
                    <View>
                        <Task routeName={'MatchWordsEnAz'} header={'Matching'}
                            descr={'Sözlərin düzgün tərcüməsini seç'} setDisable={!practice ? progress < numForProgress + 2 : progress < numForProgress + 1} setSuccess={!practice ? progress < numForProgress + 3 : progress < numForProgress + 2} lessonIndex={index} />
                    </View>
                    {!practice ? <View>
                        <Task routeName={'Theory'} header={'Qrammatika'} descr={'Vacib qrammatik qaydalarla tanış ol'} setDisable={progress < numForProgress + 3} setSuccess={progress < numForProgress + 4} lessonIndex={index} />
                    </View> : null}
                    {!practice ? <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 20, fontFamily: 'SFUIDisplay-Bold', color: '#0f3073' }}>Özünü yoxla</Text> : null}
                    <View>
                        <Task routeName={'TranslateFromEn'} header={'Azərbaycan dilində cümlələr qur'} descr={'Xarici dildən ana dilinə tərcümə'}
                            setDisable={!practice ? progress < numForProgress + 4 : progress < numForProgress + 2} setSuccess={!practice ? progress < numForProgress + 5 : progress < numForProgress + 3}
                            lessonIndex={index} />
                    </View>
                    <View >
                        <Task routeName={'TranslateFromAz'} header={'İngilis dilində cümlələr qur'} descr={'Ana dilindən xarici dilə tərcümə'} setDisable={!practice ? progress < numForProgress + 5 : progress < numForProgress + 3} setSuccess={!practice ? progress < numForProgress + 6 : progress < numForProgress + 4}
                            lessonIndex={index} />
                    </View>
                    <View >
                        <Task routeName={'ListenAndEnter'} header={'Listening'} descr={'Dinlə və cümləni topla'} setDisable={!practice ? progress < numForProgress + 6 : progress < numForProgress + 4} setSuccess={!practice ? progress < numForProgress + 7 : progress < numForProgress + 5} lessonIndex={index} />
                    </View>
                    {practice ? <View>
                        <Task routeName={'TranslateFromAzSecond'} header={'İngilis dilində cümlələr qur'} descr={'Ana dilindən xarici dilə tərcümə'} setDisable={progress < numForProgress + 5} setSuccess={!practice ? progress < numForProgress + 5 : progress < numForProgress + 6} lessonIndex={index} />
                    </View> : null}
                    {practice ? <View>
                        <Task routeName={'ListenAndEnterSecond'} header={'Listening'} descr={'Dinlə və cümləni topla'} setDisable={progress < numForProgress + 6} setSuccess={progress < numForProgress + 7} lessonIndex={index} />
                    </View> : null}
                    <View>
                        <Task routeName={'completeSentence'} header={'Cümləni tamamla'} descr={'Buraxılmış sözləri daxil et'} setDisable={progress < numForProgress + 7} setSuccess={progress < numForProgress + 8} lessonIndex={index} />
                    </View>
                    <View style={{ marginBottom: 60 }}>
                        <Task routeName={'ListenAndTranslate'} header={'Listening'} descr={'Dinlə və cümləni tərcümə et'} setDisable={progress < numForProgress + 8} setSuccess={progress < numForProgress + 9} lessonIndex={index} />
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const s = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 15
    },
    container: {
        flex: 8,
        backgroundColor: '#fff',
        borderRadius: 40
    }
})


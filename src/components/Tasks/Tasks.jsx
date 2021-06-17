import React, { useEffect, useState } from 'react'
import { Task } from './Task'
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Back } from '../Common/Back'
import { setBottomTabTransparent } from '../../redux/bottomTab'

export const Tasks = ({ route }) => {
    const [index, setIndex] = useState(route.params.index)
    const [numForProgress, setNumForProgress] = useState((route.params.index) * 7)
    const progress = useSelector(state => state.progress[0])
    const lesson = index + 1;
    const dispatch = useDispatch()
    const practice = route.params.practice
    useEffect(() => {
        dispatch(setBottomTabTransparent(false));
        return () => dispatch(setBottomTabTransparent(true))
    },
        [])
    return (
        <ImageBackground source={require('../../img/bg/tasksBg.jpg')} style={{ flex: 1, resizeMode: "center", justifyContent: "center" }}>
            <View style={s.header}>
                <View style={{ position: 'absolute', left: 20, bottom: 10, zIndex: 1 }}>
                    <Back />
                </View>
                <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center', fontFamily: 'SFUIDisplay-Bold' }}>Dərs {lesson}</Text>
            </View>
            <View style={s.container}>
                <ScrollView >
                    <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 22, fontFamily: 'SFUIDisplay-Bold', color: '#fff' }}>{!practice? 'Təlim keç' : 'Ümumi praktika'}</Text>
                    {!practice ? <View>
                        <Task practice={practice} routeName={'LearnWords'} header={'Sözləri çap et'} setDisable={progress < numForProgress + 1} setSuccess={progress < numForProgress + 2} lessonIndex={index} />
                    </View> : null}
                    <View>
                        <Task practice={practice} routeName={'MatchWordsEnAz'} header={'Sözləri uyğunlaşdır'} setDisable={!practice ? progress < numForProgress + 2 : progress < numForProgress + 1} setSuccess={!practice ? progress < numForProgress + 3 : progress < numForProgress + 2} lessonIndex={index} />
                    </View>
                    {!practice ? <View>
                        <Task practice={practice} routeName={'Theory'} header={'Qrammatikanı öyrən'} setDisable={progress < numForProgress + 3} setSuccess={progress < numForProgress + 4} lessonIndex={index} />
                    </View> : null}
                    {!practice ? <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 22, fontFamily: 'SFUIDisplay-Bold', color: '#fff' }}>Özünü yoxla</Text> : null}
                    <View>
                        <Task practice={practice} routeName={'TranslateFromEn'} header={'İngilis dilindən azərbaycan dilinə tərcümə'}
                            setDisable={!practice ? progress < numForProgress + 4 : progress < numForProgress + 2} setSuccess={!practice ? progress < numForProgress + 5 : progress < numForProgress + 3}
                            lessonIndex={index} />
                    </View>
                    <View >
                        <Task practice={practice} routeName={'TranslateFromAz'} header={!practice ? 'Azərbaycan dilindən ingilis dilinə tərcümə' : 'Azərbaycan dilindən İngilis dilinə tərcümə 1/2'} setDisable={!practice ? progress < numForProgress + 5 : progress < numForProgress + 3} setSuccess={!practice? progress < numForProgress + 6 : progress < numForProgress + 4}
                            lessonIndex={index} />
                    </View>
                    <View >
                        <Task practice={practice} routeName={'ListenAndEnter'} header={!practice ? 'Dinlə və cümləni topla' : 'Dinlə və cümləni topla 1/2'} setDisable={!practice ? progress < numForProgress + 6 : progress < numForProgress + 4} setSuccess={!practice ? progress < numForProgress + 7 : progress < numForProgress + 5} lessonIndex={index} />
                    </View>
                    {practice ? <View>
                        <Task practice={practice} routeName={'TranslateFromAzSecond'} header={'Azərbaycan dilindən ingilis dilinə tərcümə 2/2'} setDisable={progress < numForProgress + 5} setSuccess={!practice ? progress < numForProgress + 5 : progress < numForProgress + 6} lessonIndex={index} />
                    </View> : null}
                    {practice ? <View>
                        <Task practice={practice} routeName={'ListenAndEnterSecond'} header={'Dinlə və cümləni topla 2/2'} setDisable={progress < numForProgress + 6} setSuccess={progress < numForProgress + 7} lessonIndex={index} />
                    </View> : null}
                    <View style={{ marginBottom: 60 }}>
                        <Task practice={practice} routeName={'ListenAndTranslate'} header={'Dinlə və tərcümə et'} setDisable={progress < numForProgress + 7} setSuccess={progress < numForProgress + 8} lessonIndex={index} />
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


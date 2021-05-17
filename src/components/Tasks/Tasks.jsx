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
    useEffect(() => {
        dispatch(setBottomTabTransparent(false));
        return () => dispatch(setBottomTabTransparent(true))
    },
        [])
    const config=index <= 139 && index >= 100 || index <= 89 && index >= 50 || index <= 39 && index >= 0
    const config2=index >= 140&&index<=149 || index >= 90&&index<=99 || index >= 40&&index<=49
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
                    <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 22, fontFamily: 'SFUIDisplay-Bold', color: '#fff' }}>{config? 'Təlim keç' : 'Ümumi praktika'}</Text>
                    {config ? <View>
                        <Task routeName={'LearnWords'} header={'Sözləri çap et'} setDisable={progress < numForProgress + 1} setSuccess={progress < numForProgress + 2} lessonIndex={index} />
                    </View> : null}
                    <View>
                        <Task routeName={'MatchWordsEnAz'} header={'Sözləri uyğunlaşdır'} setDisable={config ? progress < numForProgress + 2 : progress < numForProgress + 1} setSuccess={config ? progress < numForProgress + 3 : progress < numForProgress + 2} lessonIndex={index} />
                    </View>
                    {config ? <View>
                        <Task routeName={'Theory'} header={'Qrammatikanı öyrən'} setDisable={progress < numForProgress + 3} setSuccess={progress < numForProgress + 4} lessonIndex={index} />
                    </View> : null}
                    {config ? <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 22, fontFamily: 'SFUIDisplay-Bold', color: '#fff' }}>Özünü yoxla</Text> : null}
                    <View>
                        <Task routeName={'TranslateFromEn'} header={'İngilis dilindən Azərbaycan dilinə tərcümə'}
                            setDisable={config ? progress < numForProgress + 4 : progress < numForProgress + 2} setSuccess={config ? progress < numForProgress + 5 : progress < numForProgress + 3}
                            lessonIndex={index} />
                    </View>
                    <View >
                        <Task routeName={'TranslateFromAz'} header={config ? 'Azərbaycan dilindən İngilis dilinə tərcümə' : 'Azərbaycan dilindən İngilis dilinə tərcümə 1/2'} setDisable={config ? progress < numForProgress + 5 : progress < numForProgress + 3} setSuccess={config ? progress < numForProgress + 6 : progress < numForProgress + 4}
                            lessonIndex={index} />
                    </View>
                    <View >
                        <Task routeName={'ListenAndEnter'} header={config ? 'Dinlə və cümləni topla' : 'Dinlə və cümləni topla 1/2'} setDisable={config ? progress < numForProgress + 6 : progress < numForProgress + 4} setSuccess={config ? progress < numForProgress + 7 : progress < numForProgress + 5} lessonIndex={index} />
                    </View>
                    {config2 ? <View>
                        <Task routeName={'TranslateFromAzSecond'} header={'Azərbaycan dilindən İngilis dilinə tərcümə 2/2'} setDisable={progress < numForProgress + 5} setSuccess={config ? progress < numForProgress + 5 : progress < numForProgress + 6} lessonIndex={index} />
                    </View> : null}
                    {config2 ? <View>
                        <Task routeName={'ListenAndEnterSecond'} header={'Dinlə və cümləni topla 2/2'} setDisable={progress < numForProgress + 6} setSuccess={progress < numForProgress + 7} lessonIndex={index} num={num} />
                    </View> : null}
                    <View style={{ marginBottom: 60 }}>
                        <Task routeName={'ListenAndTranslate'} header={'Dinlə və tərcümə et'} setDisable={progress < numForProgress + 7} setSuccess={progress < numForProgress + 8} lessonIndex={index} />
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


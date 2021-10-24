import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TranslateFrom } from './TranslateFrom'
export const TranslateFromEn = ({ route }) => {
    const [num, setNum] = useState(0)
    const sentences = useSelector(state => state.enAzSentences.sentences[route.params.lessonIndex][num])
    const index = route.params.lessonIndex * 8
    const practice = useSelector(state => state.levelsList.levels[route.params.lessonIndex][2])
    const progressValue = practice && index + 3 || index + 5
    function setNumCount() {
        if (num < 4)
            setNum(prev => prev + 1)
    }
    return (
        <TranslateFrom route={route} sentences={sentences} num={num} setNumCount={setNumCount} type={'enAz'} progressValue={progressValue} />
    )
}
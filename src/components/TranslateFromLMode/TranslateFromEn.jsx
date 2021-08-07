import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TranslateFrom } from './TranslateFrom'

export const TranslateFromEn = ({ route, practice }) => {
    const [num, setNum] = useState(0)
    const sentences = useSelector(state => state.enAzSentences.sentences[route.params.lessonIndex][num])

    const index = route.params.lessonIndex * 7
    const progressValue = practice && index + 3 || index + 5
    function setNumCount() {
        setNum(prev => prev + 1)
    }
    return (
        <TranslateFrom route={route} sentences={sentences} num={num} setNumCount={setNumCount} type={'enAz'} progressValue={progressValue} />
    )
}
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TranslateFrom } from './TranslateFrom'

export const TranslateFromEn = ({ route }) => {
    const [num, setNum] = useState(0)
    const sentences = useSelector(state => state.enAzSentences.sentences[route.params.lessonIndex][num])

    const index = route.params.lessonIndex
    const progressValue = index < 40 ? index * 7 + 5 : index * 7 + 3
    function setNumCount() {
        setNum(prev => prev + 1)
    }
    return (
        <TranslateFrom route={route} sentences={sentences} num={num} setNumCount={setNumCount} type={'enAz'} progressValue={progressValue} />
    )
}
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TranslateFrom } from './TranslateFrom'

export const TranslateFromEn = ({ route }) => {
    const [num, setNum] = useState(0)
    const sentences = useSelector(state => state.enAzSentences.sentences[route.params.num][route.params.lessonIndex][num])

    function setNumCount() {
        setNum(prev => prev + 1)
    }
    return (
        <TranslateFrom route={route} sentences={sentences} num={num} setNumCount={setNumCount} type={'enAz'}/>
    )
}
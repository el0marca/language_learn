import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ListenFrom } from './ListenFrom'

export const ListenAndTranslate = ({ route }) => {
    let shuflle=[3,1,0,4,2]
    const [num, setNum] = useState(0)
    const sentences=useSelector(state=>state.enAzSentences.sentences[route.params.lessonIndex][shuflle[num]])

    function setNumCount() {
        setNum(prev => prev + 1)
    }
    const progressValue = route.params.lessonIndex * 8 + 9

    return (
        <ListenFrom route={route} sentences={sentences} num={num} setNumCount={setNumCount} type={'enAz'} progressValue={progressValue} />
    )
}
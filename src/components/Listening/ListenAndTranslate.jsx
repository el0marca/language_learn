import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ListenFrom } from './ListenFrom'

export const ListenAndTranslate = ({ route }) => {
    let shuflle=[6,4,7,2,0,8,5,1,9,3]
    const [num, setNum] = useState(0)
    const sentences=useSelector(state=>state.enAzSentences.sentences[route.params.lessonIndex][shuflle[num]])

    function setNumCount() {
        setNum(prev => prev + 1)
    }
    const progressValue = route.params.lessonIndex * 7 + 8

    return (
        <ListenFrom route={route} sentences={sentences} num={num} setNumCount={setNumCount} type={'enAz'} progressValue={progressValue}/>
    )
}
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ListenFrom } from './ListenFrom'

export const ListenAndEnter = ({ route, practice }) => {
    let shuflle=[6,4,7,2,0,8,5,1,9,3]
    const [num, setNum] = useState(0)
    const sentences=useSelector(state=>state.azEnSentences.sentences[route.params.lessonIndex][shuflle[num]])

    function setNumCount() {
        setNum(prev => prev + 1)
    }
    const index = route.params.lessonIndex
    const progressValue = practice && index * 7 + 7 || index * 7 + 5

    return (
        <ListenFrom route={route} sentences={sentences} num={num} setNumCount={setNumCount} type={'azEn'} progressValue={progressValue} erro/>
    )
}
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ListenFrom } from './ListenFrom'

export const ListenAndEnterSecond = ({ route }) => {
    let shuflle=[6,4,7,2,0,8,5,1,9,3]
    const [num, setNum] = useState(0)
    const sentences=useSelector(state=>state.theory.lessons[route.params.lessonIndex][shuflle[num]])

    function setNumCount() {
        setNum(prev => prev + 1)
    }
    const progressValue = route.params.lessonIndex * 7 + 7
    return (
        <ListenFrom route={route} sentences={sentences} num={num} setNumCount={setNumCount} type={'theory'} progressValue={progressValue} lessonIndex={route.params.lessonIndex} />
    )
}
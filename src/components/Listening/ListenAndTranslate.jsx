import React from 'react'
import { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { shuffle } from '../../utils/shuffle'
import { ListenFrom } from './ListenFrom'

export const ListenAndTranslate = ({ route }) => {
    let shuflle=[6,4,7,2,0,8,5,1,9,3]
    const [num, setNum] = useState(0)
    const [sentence,setSentence]=useState(useSelector(state=>state.enAzSentences.sentences[route.params.num][route.params.lessonIndex]))
    const [sentences,setSentences]=useState(sentence[shuflle[num]])
    useEffect(()=>setSentences(sentence[shuflle[num]]), [num])

    function setNumCount() {
        setNum(prev => prev + 1)
    }
    const progressValue = route.params.lessonIndex * 7 + 8
    return (
        <ListenFrom route={route} sentences={sentences} num={num} setNumCount={setNumCount} type={'enAz'} progressValue={progressValue}/>
    )
}
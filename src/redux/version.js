const initialState = {
    value: 2,
}

const SET_VERSION = 'SET_VERSION'
const setVersion = (value) => ({
    type: SET_VERSION,
    value
})
import database from '@react-native-firebase/database'
import {
    setEnAz
} from "./enAzSentences"
import {
    setAzEn
} from "./azEnSentences"
import {
    setTheory
} from "./theory"
import {
    setCompleteSentences
} from "./completeSentence"
import {
    setLearnWords
} from "./learnWords"
import {
    setWordsForMatch
} from "./wordsForMatch"
import {
    setLevelsList
} from "./levelsList"
import { setWords } from './words'

export const updateLessons = (version) => {
    return async (dispatch) => {
        try {
            await database()
                .ref(`/version`)
                .once('value')
                .then(dbVerdion => {
                    if (dbVerdion.val() > version) {
                        database()
                            .ref(`/lessons`)
                            .once('value')
                            .then(snapshot => {
                                dispatch(setEnAz(snapshot.val().enAz))
                                dispatch(setAzEn(snapshot.val().azEn))
                                dispatch(setTheory(snapshot.val().theory))
                                dispatch(setCompleteSentences(snapshot.val().completeSentences))
                                dispatch(setLearnWords(snapshot.val().learnWords))
                                dispatch(setLevelsList((snapshot.val().levelsList)))
                                dispatch(setWordsForMatch(snapshot.val().wordsForMatch))
                                dispatch(setWords(snapshot.val().words))
                                dispatch(setVersion(dbVerdion))
                                console.log('versionSet')
                            })
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }
}

export const version = (state = initialState, action) => {
    switch (action.type) {
        case SET_VERSION:
            return {
                ...state, value: action.value
            }
            default:
                return state
    }
}
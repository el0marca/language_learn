import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';

let initialState = [
    1,
    false,
]

const SET_BEGINNER_PROGRESS = 'SET_BEGINNER_PROGRESS';
const setBeginnerProgress = value => ({
    type: SET_BEGINNER_PROGRESS,
    value
})

const SET_COMMON_PROGRESS = 'SET_COMMON_PROGRESS';
export const setCommonProgress = value => ({
    type: SET_COMMON_PROGRESS,
    value
})

const SET_CHANGED_PROGRESS = 'SET_CHANGED_PROGRESS'
const setIfProgressChanged = value => ({
    type: SET_CHANGED_PROGRESS,
    value
})

export const downloadProgress = () => {
    return async (dispatch) => {
        try {
            const beginner = await AsyncStorage.getItem('beginner')
            if (beginner !== null) {
                dispatch(setBeginnerProgress(beginner))
            } else {
                try {
                    await AsyncStorage.setItem('beginner', JSON.stringify(1))
                    console.log('success')
                } catch (e) {
                    console.log(e)
                }
            }
        } catch {
            console.log('something went wrong')
        }
    }
}

export const updateProgress = (progressValue, user) => {
    return async dispatch => {
        dispatch(updateBeginnerProgress(progressValue, user))
    }
}

export const updateBeginnerProgress = (value, user) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('beginner', JSON.stringify(value))
            dispatch(setBeginnerProgress(value))
            dispatch(setIfProgressChanged(true))
            if (user) {
                database()
                    .ref(`/users/${user.uid}`)
                    .update({
                        0: value,
                    })
                    .then(() => console.log('Data updated.'))
            }
        } catch (e) {
            console.log(e)
        }
        finally {
            dispatch(setIfProgressChanged(false))
        }
    }
}

const progress = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMON_PROGRESS:
            return {
                ...state, ...action.value
            }
            case SET_BEGINNER_PROGRESS:
                return {
                    ...state, 0: action.value
                }
            case SET_CHANGED_PROGRESS:
                return {
                    ...state, 1: action.value
                }
                default:
                    return state
    }

}

export default progress
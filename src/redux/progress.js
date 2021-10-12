import AsyncStorage from '@react-native-async-storage/async-storage'
import database from '@react-native-firebase/database'

let initialState = [
    1,
    false,
]

const SET_PROGRESS = 'SET_PROGRESS';
const setProgress = value => ({
    type: SET_PROGRESS,
    value
})

const SET_CHANGED_PROGRESS = 'SET_CHANGED_PROGRESS'
const setIfProgressChanged = value => ({
    type: SET_CHANGED_PROGRESS,
    value
})

// export const downloadProgress = () => {
//     return async (dispatch) => {
//         try {
//             // const progress = await AsyncStorage.getItem('progress')
//             if (progress !== null) {
//                 dispatch(setProgress(JSON.parse(progress)))
//             } 
//             // else {
//             //     try {
//             //         // await AsyncStorage.setItem('progress', JSON.stringify(1))
//             //     } catch (e) {
//             //         console.log(e)
//             //     }
//             // }
//         } catch {
//             console.log('something went wrong')
//         }
//     }
// }

export const updateProgress = (value, user) => {
    return async (dispatch) => {
        try {
            // await AsyncStorage.setItem('progress', JSON.stringify(value))
            dispatch(setProgress(value))
            dispatch(setIfProgressChanged(true))
            if (user) {
                database()
                    .ref(`/users/${user.uid}`)
                    .update({
                        progress: value,
                    })
                    .then(() => console.log('Data updated.'))
            }
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setIfProgressChanged(false))
        }
    }
}

const progress = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROGRESS:
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
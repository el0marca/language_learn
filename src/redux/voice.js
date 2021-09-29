import AsyncStorage from '@react-native-async-storage/async-storage';

let initialState = {
    value: 'us/male'
}
const SET_VOICE = 'SET_VOICE'
const setVoice = value => ({
    type: SET_VOICE,
    value
})

export const getVoice = () => {
    return async (dispatch) => {
        const voiceValue = await AsyncStorage.getItem('voiceValue')
        if (voiceValue !== null) {
            dispatch(setVoice(voiceValue))
        }
    }
}

export const changeVoice = (value) => {
    return async (dispatch) => {
        await AsyncStorage.setItem('voiceValue', value)
        dispatch(setVoice(value))
    }
}




const voice = (state = initialState, action) => {
    switch (action.type) {
        case SET_VOICE:
            return {
                ...state, value: action.value
            }
            default:
                return state
    }
}

export default voice
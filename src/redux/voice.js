let initialState = {
    value: 'uk/male'
}
const SET_VOICE = 'SET_VOICE'
export const changeVoice = value => ({
    type: SET_VOICE,
    value
})

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
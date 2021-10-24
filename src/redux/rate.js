const initialState = {
    value: false
}

const SET_RATED_TRUE = 'SET_RATED_TRUE'
export const setRatedTrue = () => ({
    type: SET_RATED_TRUE
})

export const rate = (state = initialState, action) => {
    switch (action.type) {
        case SET_RATED_TRUE:
            return {
                ...state, value: true
            }
            default:
                return state
    }

}
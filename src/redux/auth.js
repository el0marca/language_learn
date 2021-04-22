let initialState = {
    // isAuth,
    user:null
}

const SET_USER = 'SET_USER';
export const setUserInfo = value => ({
    type: SET_USER,
    value
})

const auth = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, user:action.value
            }
        default:
            return state
    }
}


export default auth
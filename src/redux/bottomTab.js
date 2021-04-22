let initialState = {
    show:true, 
}

const CHANGE_BOTTOM_VISIBLE = 'CHANGE_BOTTOM_VISIBLE';
export const setBottomTabVisible = value => ({
    type: CHANGE_BOTTOM_VISIBLE,
    value
})

export const bottomTab = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BOTTOM_VISIBLE:
            return {
                ...state, show:action.value
            }
        default:
            return state
    }
}
let initialState = {
    show:'true', 
    transparent:true
}

const CHANGE_BOTTOM_VISIBLE = 'CHANGE_BOTTOM_VISIBLE';
export const setBottomTabVisible = value => ({
    type: CHANGE_BOTTOM_VISIBLE,
    value
})
const CHANGE_BOTTOM_TRANSPARENT = 'CHANGE_BOTTOM_TRANSPARENT';
export const setBottomTabTransparent = value => ({
    type: CHANGE_BOTTOM_TRANSPARENT,
    value
})
export const bottomTab = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BOTTOM_VISIBLE:
            return {
                ...state, show:action.value
            }
        case CHANGE_BOTTOM_TRANSPARENT:
            return {
                ...state, transparent:action.value
            }
        default:
            return state
    }
}
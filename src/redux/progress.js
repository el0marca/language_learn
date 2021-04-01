import AsyncStorage from '@react-native-async-storage/async-storage';

let initialState = [
    1,
    1,
    1,
    1,
    1,
]

const SET_BEGINNER_PROGRESS = 'SET_BEGINNER_PROGRESS';
const setBeginnerProgress = value => ({
    type: SET_BEGINNER_PROGRESS,
    value
})

const SET_ELEMENTARY_PROGRESS = 'SET_ELEMENTARY_PROGRESS';
const setElementaryProgress = value => ({
    type: SET_ELEMENTARY_PROGRESS,
    value
})

const SET_PREINTERMEDIATE_PROGRESS = 'SET_PREINTERMEDIATE_PROGRESS';
const setPreIntermediateProgress = value => ({
    type: SET_PREINTERMEDIATE_PROGRESS,
    value
})
const SET_INTERMEDIATE_PROGRESS = 'SET_INTERMEDIATE_PROGRESS';
const setIntermediateProgress = value => ({
    type: SET_INTERMEDIATE_PROGRESS,
    value
})
const SET_UPPERINTERMEDIATE_PROGRESS = 'SET_UPPERPREINTERMEDIATE_PROGRESS';
const setUpperIntermediateProgress = value => ({
    type: SET_UPPERINTERMEDIATE_PROGRESS,
    value
})
const SET_COMMON_PROGRESS = 'SET_COMMON_PROGRESS';
const setCommonProgress = value => ({
    type: SET_COMMON_PROGRESS,
    value
})

export const downloadProgress = () => {
    return async (dispatch) => {
        try {
            const [beginner,elementary,preIntermediate,intermediate,upperIntermediate]  = await AsyncStorage.multiGet(['beginner', 'elementary', 'preIntermediate', 'intermediate', 'upperIntermediate'])

            if (beginner[1] && elementary[1] && preIntermediate[1] && intermediate[1] && upperIntermediate[1] !== null) {
                dispatch(setCommonProgress([beginner[1],elementary[1],preIntermediate[1],intermediate[1],upperIntermediate[1]]))
            }
            else{
                try {
                    const beginner=['beginner', JSON.stringify(1)]
                    const elementary=['elementary', JSON.stringify(1)]
                    const preIntermediate=['preIntermediate', JSON.stringify(1)]
                    const intermediate=['intermediate', JSON.stringify(1)]
                    const upperIntermediate=['upperIntermediate', JSON.stringify(1)]
                   
                    await AsyncStorage.multiSet([beginner,elementary,preIntermediate,intermediate,upperIntermediate])
                  } catch (e) {
                    console.log(e)
                  }
            }
        } catch {console.log('something went wrong')}
    }
}

export const fdownloadProgress = () => {
    return async (dispatch) => {
        try {
            const beginner = await AsyncStorage.getItem('beginner')
            const elementary = await AsyncStorage.getItem('elementary')
            const preIntermediate = await AsyncStorage.getItem('preIntermediate')
            const intermediate = await AsyncStorage.getItem('intermediate')
            const upperIntermediate = await AsyncStorage.getItem('upperIntermediate')

            if (beginner && elementary && preIntermediate && intermediate && upperIntermediate !== null) {
                dispatch(setBeginnerProgress(JSON.parse(beginner))),
                dispatch(setElementaryProgress(JSON.parse(elementary))),
                dispatch(setPreIntermediateProgress(JSON.parse(preIntermediate))),
                dispatch(setIntermediateProgress(JSON.parse(intermediate))),
                dispatch(setUpperIntermediateProgress(JSON.parse(upperIntermediate)))
            }
            else{
                try {
                    await AsyncStorage.setItem('beginner', JSON.stringify(1))
                    await AsyncStorage.setItem('elementary', JSON.stringify(1))
                    await AsyncStorage.setItem('preIntermediate', JSON.stringify(1))
                    await AsyncStorage.setItem('intermediate', JSON.stringify(1))
                    await AsyncStorage.setItem('upperIntermediate', JSON.stringify(1))
                  } catch (e) {
                    console.log(e)
                  }
            }
        } catch {}
    }
}

export const updateBeginnerProgress = (value) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('beginner', JSON.stringify(value))
            dispatch(setBeginnerProgress(value))
        }
        catch(e){
            console.log(e)
        }
    }
}
export const updateElementaryProgress = (value) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('elementary', JSON.stringify(value))
            dispatch(setElementaryProgress(value))
        }
        catch(e){
            console.log(e)
        }
    }
}
export const updatePreIntermediateProgress = (value) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('preIntermediate', JSON.stringify(value))
            dispatch(setPreIntermediateProgress(value))
        }
        catch(e){
            console.log(e)
        }
    }
}
export const updateIntermediateProgress = (value) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('intermediate', JSON.stringify(value))
            dispatch(setIntermediateProgress(value))
        }
        catch(e){
            console.log(e)
        }
    }
}
export const updateUpperIntermediateProgress = (value) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem('upperIntermediate', JSON.stringify(value))
            dispatch(setUpperIntermediateProgress(value))
        }
        catch(e){
            console.log(e)
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
                case SET_ELEMENTARY_PROGRESS:
                    return {
                        ...state, 1: action.value
                    }
                    case SET_PREINTERMEDIATE_PROGRESS:
                        return {
                            ...state, 2: action.value
                        }
                        case SET_INTERMEDIATE_PROGRESS:
                            return {
                                ...state, 3: action.value
                            }
                            case SET_UPPERINTERMEDIATE_PROGRESS:
                                return {
                                    ...state, 4: action.value
                                }
                                default:
                                    return state
    }

}

export default progress
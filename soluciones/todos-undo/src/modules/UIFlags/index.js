import { SET_FLAG } from './actionTypes'

function UIFlags(state = "all", action){
    switch(action.type) {
        case SET_FLAG:
            const flags = {...state}
            flags[action.flag] = action.payload
            return flags
        default:
            return state
    }
}

export default UIFlags

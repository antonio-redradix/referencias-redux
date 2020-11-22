import { SET_KEYS } from './actionTypes'

function keys(state = {}, action){
    switch(action.type) {
        case SET_KEYS:
            return action.payload
        default:
            return state
    }
}

export default keys

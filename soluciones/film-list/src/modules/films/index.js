import { SET_FILMS } from './actionTypes'

function films(state = [], action){
    switch(action.type) {
        case SET_FILMS:
            return action.payload
        default:
            return state
    }
}

export default films

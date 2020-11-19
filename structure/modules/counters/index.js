import { INCREMENT, DECREMENT, RESET, ADD, REMOVE } from "./actionTypes"

export default function counters(state = [], action) {
    switch(action.type) {
        case INCREMENT:
            return state.map((x, i) => action.id === i ? x + action.payload : x)
        case DECREMENT:
            return state.map((x, i) => action.id === i ? x - action.payload : x)
        case RESET:
            return state.map((x, i) => action.id === i ? 0 : x)
        case ADD:
            return [...state, 0]
        case REMOVE:
            return state.filter((x, i) => action.id !== i)
        default:
            return state
    }
}

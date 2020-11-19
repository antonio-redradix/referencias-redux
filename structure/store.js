import { createStore, combineReducers } from 'redux'
import counters from './modules/counters'

const initialState = {
    counters: [0, 0, 0]
}

export default createStore(combineReducers({
  counters: counters,
}), initialState)

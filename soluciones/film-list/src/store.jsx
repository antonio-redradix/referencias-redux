import films from './modules/films'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducers = combineReducers({ films })
const initialState = {
    films: []
}

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store

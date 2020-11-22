import keys from './modules/keys'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createID } from './utils'

const reducers = combineReducers({ keys })
const initialState = {
    keys: {
        access: "none",
        secret: "none",
        loading: false,
    }
}

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store

import tasks from './modules/tasks'
import UIFlags from './modules/UIFlags'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createID } from './utils'


const prev = localStorage.getItem("state")
const reducers = combineReducers({ tasks, UIFlags })
const initialState = prev ? JSON.parse(prev) : {
    UIFlags: {
        taskFilter: "all"
    },
    tasks: [
        {
            id: createID(),
            text: "Implement TodoWidget",
            done: false
        },
        {
            id: createID(),
            text: "Implement NewTodo",
            done: false
        },
        {
            id: createID(),
            text: "Implement ClearDone",
            done: false
        }

    ]
}

const store = createStore(reducers, initialState, composeWithDevTools())
store.subscribe(() => {
    localStorage.setItem("state", JSON.stringify(store.getState()))
})



export default store

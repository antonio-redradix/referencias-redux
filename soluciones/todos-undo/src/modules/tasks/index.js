import { CHECK, ADD, CLEAR_DONE } from './actionTypes'
import { createID } from '../../utils'
import undoable from 'redux-undo'

function tasks(state = [], action){
  switch(action.type){
    case CHECK:
          return state.map(t => t.id === action.id ? {...t, done: action.payload} : t)
    case ADD:
          return [...state, {
              id: createID(),
              text: action.payload,
              done: action.done
          }]
    case CLEAR_DONE:
          return state.filter(t => t.done === false)
    default:
      return state
  }
}

export default undoable(tasks)

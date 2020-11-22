import { useSelector, useDispatch } from 'react-redux'
import { NewTodo } from "./newTodo"
import { FilterTodos } from "./filterTodos"
import { Todo } from './todo'
import { clearDone } from '../modules/tasks/actionCreators'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { useEffect } from 'react'

export function TodoWidget(){
  const tasks = useSelector(state => state.tasks.present)
  const taskFilter = useSelector(state => state.UIFlags.taskFilter)
  const dispatch = useDispatch()
  const filtered = taskFilter === "done" ? tasks.filter(t => t.done === true) :
        taskFilter === "pending" ? tasks.filter(t => t.done === false) :
        tasks

  useEffect(() => {
    document.onkeydown = event => {
      if (event.ctrlKey && event.key === 'z') {
        dispatch(UndoActionCreators.undo())
      }
    }
    return () => document.onkeydown = null
  }, [])

  let todos = filtered.map((t, i) => <Todo text={t.text}
                                           key={`todo-${i}`}
                                           id={t.id}
                                           done={t.done}/>)
  return(
    <div>
      <h2>TODO List</h2>
      <FilterTodos/>
      <br/>
      { todos }
      <NewTodo/>
      <div onClick={() => dispatch(clearDone())} className="underline"> clear completed </div>
    </div>
  )

}

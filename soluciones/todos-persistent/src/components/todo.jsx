import { useSelector, useDispatch } from 'react-redux'
import { check } from '../modules/tasks/actionCreators'

export function Todo(props){
  const task = useSelector(state => state.tasks.find(t => props.id === t.id))
  const dispatch = useDispatch()

  return(
    <div>
      <input  onChange={ev => dispatch(check(task.id, ev.target.checked))}
              type="checkbox"
              checked={task.done} />
      <span> {props.text}</span>
    </div>
  )
}

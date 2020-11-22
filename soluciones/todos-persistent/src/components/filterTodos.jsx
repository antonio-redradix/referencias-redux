import { useDispatch, useSelector } from 'react-redux'
import { setFlag } from '../modules/UIFlags/actionCreators'

export function FilterTodos(){
    const dispatch = useDispatch()
    const taskFilter = useSelector(state => state.UIFlags.taskFilter)

    return (
        <div>
          <span> Filter </span>
          <select selected="all" onChange={ev => dispatch(setFlag("taskFilter", ev.target.value))}
                                   value={taskFilter}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="pending">Pending</option>
          </select>
        </div>
    )
}

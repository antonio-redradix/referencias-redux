import { useDispatch } from 'react-redux'
import { setFlag } from '../modules/UIFlags/actionCreators'

export function FilterTodos(){
    const dispatch = useDispatch()

    return (
        <div>
          <span> Filter </span>
          <select selected="all" onChange={ev => dispatch(setFlag("taskFilter", ev.target.value))}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="pending">Pending</option>
          </select>
        </div>
    )
}

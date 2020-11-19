import { useSelector, useDispatch } from 'react-redux'
import { add } from '../modules/counters/actionCreators'
import Counter from './counter'

export default function Counters(){
    const counters = useSelector(state => state.counters)
    const dispatch = useDispatch()
    const todos = counters.map((x, i) => <Counter index={i}
                                         key={`todo-${i}`}/>)
    return (
        <div>
          <button onClick={() => dispatch(add())}> ADD </button>
          <h2> Counters </h2>
          {todos}
        </div>
    )
}


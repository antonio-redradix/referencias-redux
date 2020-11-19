import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, remove } from '../modules/counters/actionCreators'

export default function Counter(props){
    const counter = useSelector(state => state.counters[props.index])
    const dispatch = useDispatch()

    return(
        <div>
          <div> Has pulsado el contador { counter } veces</div>
          <button onClick={() => dispatch(increment(props.index))}> + </button>
          <button onClick={() => dispatch(decrement(props.index))}> - </button>
          <button onClick={() => dispatch(reset(props.index))}> reset </button>
          <button onClick={() => dispatch(remove(props.index))}> REMOVE </button>
        </div>
    )
}

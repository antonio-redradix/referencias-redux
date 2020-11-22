import { useState } from "react"
import { add } from "../modules/tasks/actionCreators"
import { useSelector, useDispatch } from 'react-redux'

export function NewTodo(props){
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    return(
        <div>
          <input onChange= {ev => setInput(ev.target.value)} type="text"/>
          <button onClick={() => dispatch(add(input))}> add </button>
        </div>
    )
}

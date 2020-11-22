import { useState, useEffect } from 'react'

export function Cronometer(){
    const [time, setTime] = useState(0)
    const [target, setTarget] = useState(0)
    const [input, setInput] = useState(0)
    const inputHandler = ev => setInput(ev.target.value)
    const startHandler = ev => {
        setTime(0)
        setTarget(input)
    }

    useEffect(() => {
        let timeout = setTimeout(() => {
            setTime(time >= target ? target : time + 1)
        }, 1000)
        return () => clearTimeout(timeout)
    })

    let seconds = time % 60
    let minutes = Math.floor(time / 60)
    let hours = Math.floor(time / (60 * 60))

    return(
        <div className="cronometer">
          <Segment value={hours}/>:
          <Segment value={minutes}/>:
          <Segment value={seconds}/>
          <div>
            <input onChange={inputHandler} type="number"/>
            <button onClick={startHandler} >start</button>
          </div>
        </div>
    )
}

function Segment(props){
    let formated = props.value < 10 ? "0" + props.value : props.value
    return <span>{formated}</span>
}

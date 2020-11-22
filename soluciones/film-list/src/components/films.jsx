import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchFilms } from "../modules/films/thunks"
import { Film } from "./film"

export function Films(){
    const data = useSelector(state => state.films)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilms)
    }, [])

    const films = data.map(x => <Film key={x.Title} data={x}/>)

    return films
}


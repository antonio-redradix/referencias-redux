export function fetchFilms(dispatch, getState){
    fetch("https:raw.githubusercontent.com/d-antesque/resources/master/films.json")
       .then(response => response.json())
       .then(data => dispatch({type: "SET_FILMS", payload: data}))
}

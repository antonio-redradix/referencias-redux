export function Film(props){
    return(
        <div>
          <div>{props.data.Rank}. {props.data.Title}</div>
          <div>{props.data.Year}</div>
          <div>{props.data.Rating}</div>
          <br/>
        </div>
    )
}

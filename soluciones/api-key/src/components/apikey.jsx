import { useSelector, useDispatch } from 'react-redux'
import { regenKeys } from '../modules/keys/thunks'

export function ApiKey(){
  const keys = useSelector(state => state.keys)
  const dispatch = useDispatch()

  return (
    <div>
      {keys.loading && <div> loading... </div>}
      {!keys.loading &&
       <>
         <div>Access key: <b>{keys.access}</b></div>
         <div>Secret key: <b>{keys.secret}</b></div>
      </>}
      <br/>
      <button onClick={() => dispatch(regenKeys)}> Regenerate </button>
    </div>
  )
}

import { fakeRegen } from '../../utils'

export function regenKeys(dispatch, getState){
  const old = getState().keys
  dispatch({type: "SET_KEYS", payload: {...old, loading: true}})
  fakeRegen()
    .then(keys => dispatch({type: "SET_KEYS", payload: {...keys, loading: false}}))
}

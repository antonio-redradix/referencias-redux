import { SET_FLAG } from './actionTypes'

export const setFlag = (flag, value) => ({
    type: SET_FLAG,
    flag: flag,
    payload: value
})

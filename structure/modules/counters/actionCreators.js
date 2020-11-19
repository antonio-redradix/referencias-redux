import { INCREMENT, DECREMENT, RESET, ADD, REMOVE } from "./actionTypes"

export const increment = (id, n = 1) => ({
    type: INCREMENT,
    payload: n,
    id: id
})

export const decrement = (id, n = 1) => ({
    type: DECREMENT,
    payload: n,
    id: id
})

export const reset = (id) => ({
    type: RESET,
    id: id
})

export const add = () => ({
    type: ADD
})

export const remove = (id) => ({
    type: REMOVE,
    id: id
})

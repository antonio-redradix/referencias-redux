import { CHECK, ADD, CLEAR_DONE } from "./actionTypes"

export const add = (text, done = false) => ({
    type: ADD,
    payload: text,
    done: done
})

export const clearDone = () => ({
    type: CLEAR_DONE
})

export const check = (id, done) => ({
    type: CHECK,
    payload: done,
    id: id
})

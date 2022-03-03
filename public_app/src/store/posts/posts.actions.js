import { v4 } from "uuid";
import { ADD_TODOS, DELETE_TODOS } from "./posts.actionTypes";

export const addTodo = (value) => ({
    type: ADD_TODOS,
    payload: {
        id: v4(),
        value,
    }
})

export const deleteTodos = (value) => ({
    type: DELETE_TODOS,
    payload: value
})

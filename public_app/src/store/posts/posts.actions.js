import { v4 } from "uuid";
import { DELETE_TODOS, GET_POSTS } from "./posts.actionTypes";

export const getPosts = (payload) => ({
    type: GET_POSTS,
    payload
})

export const deleteTodos = (value) => ({
    type: DELETE_TODOS,
    payload: value
})

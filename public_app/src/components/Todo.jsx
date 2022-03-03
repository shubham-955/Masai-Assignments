import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodos } from '../store/todos/todos.actions'

export const Todo = ({ todo }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <p>{todo.value}</p>
            <button onClick={() => dispatch(deleteTodos(todo.id))}>Delete</button>
        </div>
    )
}

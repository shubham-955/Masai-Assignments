import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/posts/posts.actions'

export const TodoInput = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
            <button onClick={() => dispatch(addTodo(value))}>Add</button>
        </div>
    )
}

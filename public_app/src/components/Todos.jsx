import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from './Todo';
import { TodoInput } from './TodoInput'


export const Todos = () => {
    const todos = useSelector((state) => state.todos.data);
    return (
        <div>
            <h1>ADD TODOS</h1>
            <TodoInput />
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} />
            })
            }
        </div>
    )
}

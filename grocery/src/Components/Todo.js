import React, { useState } from 'react';
import { TodoList } from './TodoList';

export const Todo = () => {

    const [data, setData] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setData(value);
    }

    const handleAdd = () => {
        const payload = {
            title: data,
            id: tasks.length
        };
        let todoItem = [...tasks, payload];
        setTasks(todoItem);
        console.log(todoItem)
    }

    const handleDelete = (item) => {
        const newList = tasks.filter((task) => task.id !== item.id);
        setTasks(newList);
    }

    return (
        <div className='container'>
            <h1>Grocery</h1>
            <div>
                <input type="text" className='input' placeholder='Write Something..' value={data} onChange={handleChange} />
                <button onClick={() => handleAdd()} className='btn'>+</button>
            </div>
            <div>
                {tasks.map((item) => {
                    return (
                        <TodoList item={item} handleDelete={handleDelete} />
                    )
                })}
            </div>
        </div>
    );
};

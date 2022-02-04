import React, { useState } from 'react';
import { TodoList } from './TodoList';

export const Todo = () => {

    const [data, setData] = useState("");
    const [statusVal, setStatusVal] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setData(value);
    }

    const handleAdd = () => {
        const payload = {
            title: data,
            status: statusVal
        };
        let todoItem = [...tasks, payload];
        setTasks(todoItem);
    }

    const handleCheck = () => {
        let value = document.getElementById('checkValue').checked;
        setStatusVal(value)
    }

    return (
        <div className='container'>
            <h1>Todo</h1>
            <div>
                <input type="text" className='input' placeholder='Write Something..' value={data} onChange={handleChange} />
                <input type="checkbox" className='check' id='checkValue' onClick={() => handleCheck()} />
                <button onClick={() => handleAdd()} className='btn'>+</button>
            </div>
            <div>
                {tasks.map((item) => {
                    return (
                        <TodoList item={item} />
                    )
                })}
            </div>
        </div>
    );
};

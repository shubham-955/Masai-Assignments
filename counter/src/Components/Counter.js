import React, { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const double = () => {
        setCount(count * 2);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => increment()} className="btn">Increment</button>
            <button onClick={() => decrement()} className="btn">Decrement</button>
            <div>
                <button onClick={() => double()} className="btn">Double</button>
                <button onClick={() => reset()} className="btn">Reset</button>
            </div>
        </div>
    );
};

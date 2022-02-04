import React, { useState } from 'react';

export const TodoList = ({
    item
} = this.props
) => {

    const [check, setCheck] = useState(item.status)
    const handleCheck = () => {
        setCheck(!check)
    }
    return (
        <div className='todoItem'>
            <p>{item.title}</p>
            <div className='checkBox' style={{ border: check && '3px solid green' }} onClick={() => handleCheck()}></div>
        </div>
    );
};

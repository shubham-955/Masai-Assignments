import React, { useState } from 'react';

export const TodoList = ({
    item,
    handleDelete
} = this.props
) => {

    return (
        <div className='todoItem'>
            <p>{item.title}</p>
            <div className='checkBox' onClick={() => handleDelete(item)}>
                <img src="https://img.icons8.com/ios-glyphs/2x/filled-trash.png" />
            </div>
        </div>
    );
};

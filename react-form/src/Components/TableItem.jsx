import React from 'react';
import '../App.css'

export const TableItem = ({ item, handleDelete }) => {

    return (
        <>
            <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                <td>{item.department}</td>
                <td>{item.salary}</td>
                <td>{item.maritalState}</td>
                <td>{item.profilePhoto}</td>
                <td onClick={() => handleDelete(item)} className='delete'>
                    <img src="https://img.icons8.com/ios-glyphs/2x/filled-trash.png" alt='' />
                </td>
            </tr>
        </>
    )
};


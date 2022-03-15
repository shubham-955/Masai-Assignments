import React, { useState } from 'react';
import { TableInput } from './TableInput';
import { TableItem } from './TableItem';

export const Table = () => {
  const [list, setList] = useState([]);
  // const [data, setData] = useState({
  //   name: '',
  //   age: '',
  //   address: '',
  //   department: '',
  //   salary: '',
  //   maritalState: false,
  //   profilePhoto: ''
  // });

  const handleDelete = (item) => {
    const newTodoList = list.filter(el => el.id !== item.id);
    setList(newTodoList);
  }

  return (
    <div className='mainBox'>
      <div className='firstBox'>
        <TableInput list={list} setList={setList} />
      </div>
      <div className='secondBox'>
        <table>
          {list.map((item) => {
            return (
              <TableItem key={item.id} item={item} list={list} handleDelete={handleDelete} />
            )
          })}
        </table>
      </div>
    </div>
  );
};

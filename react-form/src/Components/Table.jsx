import React, { useState, useEffect } from 'react';
import { TableInput } from './TableInput';
import { TableItem } from './TableItem';

export const Table = () => {

  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    fetchData();
  }, [pageNumber])

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/Arr?_page=${pageNumber}&_limit=5`);
      const json = await response.json();
      setList(json);
      setFilterList(json);
    } catch (err) {
      console.log('Request Failed', err)
    }
  }

  const handleDelete = async (item) => {
    const newTodoList = list.filter(el => el.id !== item.id);
    setList(newTodoList);
    try {
      const newList3 = await fetch(`http://localhost:3001/Arr/${item.id}`, {
        method: 'Delete',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = await newList3.json();
      console.log(response);
      fetchData()
    } catch (error) {
      console.log("Error fetching data....", error)
    }
  }

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (value === 'All Department') {
      fetchData();
    } else {
      let filteredList = filterList.filter(el => {
        if (el.department === value) {
          return el;
        }
      });
      console.log(filteredList)
      setList(filteredList)
    }
  }

  const handleOnChangeSort = (e) => {
    const { value } = e.target;
    if (value === 'Ascending') {
      const newList1 = [...list].sort((a, b) => Number(a.salary) - Number(b.salary))
      setList(newList1);
      console.log(list)
    } else if (value === 'Descending') {
      const newList1 = [...list].sort((a, b) => Number(b.salary) - Number(a.salary))
      setList(newList1);
      console.log(list)
    } else {
      fetchData();
    }
  }

  const pageCount = Math.ceil(list.length / 5) * 2;
  console.log(pageCount)
  return (
    <div className='mainBox'>
      <div className='firstBox'>
        <TableInput list={list} setList={setList} />
      </div>
      <div className='secondBox'>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>
              <select onChange={handleOnChange}>
                <option value='All Department'>All Department</option>
                <option value='Mechanical'>Mechanical</option>
                <option value='Civil'>Civil</option>
                <option value='Electrical'>Electrical</option>
                <option value='IT'>IT</option>
                <option value='Instrumentation'>Instrumentation</option>
              </select>
            </th>
            <th>Salary</th>
            <th>Marital State</th>
            <th>Profile Photo</th>
            <th className='sort'>
              <img src="https://cdn-icons-png.flaticon.com/512/130/130898.png" alt="" />
              <select onChange={handleOnChangeSort}>
                <option value=''></option>
                <option value='Ascending'>Asc</option>
                <option value='Descending'>Des</option>
              </select>
            </th>
          </tr>
          {list.map((item) => {
            return (
              <TableItem item={item} list={list} handleDelete={handleDelete} setList={setList} />
            )
          })}
        </table>
        <div className='directionBtn'>
          <button onClick={() => {
            if (pageNumber > 0) {
              setPageNumber(pageNumber - 1);
            }
          }} className='prevBtn'>Prev</button>
          <button onClick={() => {
            if (pageNumber <= pageCount) {
              setPageNumber(pageNumber + 1)
            }
          }} className='nextBtn'>Next</button>
        </div>
      </div>
    </div>
  );
};

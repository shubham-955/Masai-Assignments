import React, { useState } from 'react';
import { v4 } from 'uuid';
export const TableInput = ({ list, setList }) => {

    const [formData, setFormData] = useState({});

    const onChangeInput = (e) => {
        let { name, value } = e.currentTarget;
        console.log(name, value)
        setFormData({
            ...formData,
            [name]: value,
            id: v4(),
        })
    }

    const handleSubmit = () => {
        fetch("http://localhost:3001/Arr", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((r) => r.json()
        ).then((d) => {
            console.log(d)
            setList([...list, d]);
            window.location.reload();
            console.log(list)
        })
    }

    return (
        <div>
            <form className='inputSection' id='create-course-form'>
                <label htmlFor="name" className='label'>Name:</label>
                <input type="text" id='name' value={formData.name} name='name' onChange={onChangeInput} className='input' required />
                <label htmlFor="age" className='label'>Age:</label>
                <input type="number" id='age' value={formData.age} name='age' onChange={onChangeInput} className='input' required='required' />
                <label htmlFor="add" className='label'>Address:</label>
                <input type="text" id='add' value={formData.address} name='address' onChange={onChangeInput} className='input' required />
                <p style={{ marginTop: 5, fontWeight: 600 }}>Department:</p>
                <select name="department" value={formData.department} id="depart" onChange={onChangeInput}>
                    <option value=''></option>
                    <option value='Mechanical'>Mechanical</option>
                    <option value='Civil'>Civil</option>
                    <option value='Electrical'>Electrical</option>
                    <option value='IT'>IT</option>
                    <option value='Instrumentation'>Instrumentation</option>
                </select>
                <label htmlFor="salary" className='label'>Salary:</label>
                <input type="number" id='salary' value={formData.salary} name='salary' onChange={onChangeInput} className='input' required />
                <div>
                    <p style={{ marginTop: 10, fontWeight: 600 }}>Marital State:</p>
                    <input type="radio" id='single' name='maritalState' value='Single' onChange={onChangeInput} required />
                    <label htmlFor="single" className='label'>Single</label>
                    <input type="radio" id='married' name='maritalState' value='Married' onChange={onChangeInput} required />
                    <label htmlFor="married" className='label'>Married</label>
                </div>
                <label htmlFor="profile" className='profileLabel'>Profile Photo:</label>
                <input type="file" name='profilePhoto' id='profile' value={formData.profilePhoto} onChange={onChangeInput} />
            </form>
            <input
                type='button'
                className='btn'
                value='Submit'
                onClick={() => handleSubmit()} />
        </div>
    );
};

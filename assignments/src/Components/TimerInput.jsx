import React, { useState } from 'react'
import '../App.css'

export const TimerInput = ({ setInputFir, setInputSec }) => {
    const [firInput, setFirInput] = useState('')
    const [secInput, setSecInput] = useState('')

    const onFirInputChange = (e) => {
        setFirInput(e.currentTarget.value);
    }

    const onSecInputChange = (e) => {
        setSecInput(e.currentTarget.value);
    }

    const handleAdd = () => {
        if (Number(secInput) < Number(firInput)) {
            setSecInput('');
            alert('End time should not be less than initial time')
            return;
        }
        setInputFir(firInput);
        setInputSec(secInput);
    }

    const handleReset = () => {
        setInputFir(0);
        setInputSec(0);
        setFirInput('');
        setSecInput('');
    }

    return (
        <div>
            <div className='inputSection'>
                <label htmlFor="first" className='label'>Initial Time</label>
                <input
                    type="number"
                    id='first'
                    className='input'
                    value={firInput}
                    placeholder='Enter initial time..'
                    onChange={onFirInputChange} />
            </div>
            <div className='inputSection'>
                <label htmlFor="end" className='label'>End Time</label>
                <input type="number"
                    id='end'
                    className='input'
                    value={secInput}
                    placeholder='Enter end time..'
                    onChange={onSecInputChange}
                />
            </div>
            <div className='buttons'>
                <button onClick={() => handleAdd()} className='btn'>Start</button>
                <button onClick={() => handleReset()} className='btn'>Reset</button>
            </div>
        </div>
    )
}

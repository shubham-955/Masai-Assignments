import React, { useState } from 'react'
import '../App.css'

export const TimerInput = ({ setSeconds, setMinutes }) => {

    const [value, setValue] = useState('')

    const handleInput = (e) => {
        setValue(e.currentTarget.value)
    }

    const handleClick = () => {
        if (value) {
            setMinutes(value)
            setSeconds(value * 60)
            setValue('')
        } else {
            console.log(value)
        }
    }


    return (
        <div>
            <input
                type="number"
                value={value}
                onChange={handleInput}
                className='input'
                placeholder='Enter minutes' />
            <button className='btn' onClick={() => handleClick()}>Add</button>
        </div>
    )
}

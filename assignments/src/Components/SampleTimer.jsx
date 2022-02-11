import React, { useState, useEffect } from 'react'
import { TimerInput } from './TimerInput'
import '../App.css'

export const SampleTimer = () => {

    const [inputFir, setInputFir] = useState(0)
    const [inputSec, setInputSec] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setInputFir(function (next) {
                if (next < inputSec) {
                    return Number(next) + 1;
                }
                else {
                    clearInterval(interval)
                    return next
                }
            })
        }, 1000);
        return () => clearInterval(interval)
    }, [inputFir])


    return (
        <div>
            <p className='mainTitle'>Sample Timer</p>
            <TimerInput setInputFir={setInputFir} setInputSec={setInputSec} />
            <div className='output'><p>{inputFir}</p></div>
        </div>
    )
}

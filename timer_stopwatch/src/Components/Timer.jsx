import React, { useState, useEffect } from 'react'
import '../App.css'
import { TimerInput } from './TimerInput';

export const Timer = () => {

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(minutes * 60)

    useEffect(() => {
        let interval = null;
        if (isActive && !isPaused) {
            if (minutes !== 0 && seconds !== 0) {
                interval = setInterval(() => {
                    setSeconds((seconds) => seconds - 1)
                }, 1000);
            } else {
                setMinutes(2);
                setSeconds(0)
            }
        }
        return () => {
            clearInterval(interval)
        }
    });

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false)
    }

    const handleStop = () => {
        setIsPaused(!isPaused)
    }

    const handleReset = () => {
        setMinutes(2)
        setSeconds(minutes * 60)
        setIsActive(false)
    }

    return (
        <div className='task'>
            <p className='mainTitle'>Timer</p>
            <TimerInput setSeconds={setSeconds} setMinutes={setMinutes} />
            <div className='time'>
                <p className='min'>{("0" + Math.floor(seconds / 60)).slice(-2)}:</p>
                <p className='sec'>{seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60}</p>
            </div>
            <div className='btnSection'>
                <button onClick={() => handleStart()} className='btn'>Start</button>
                <button onClick={() => handleStop()} className='btn'>Stop</button>
                <button onClick={() => handleReset()} className='btn'>Reset</button>
            </div>
        </div>
    )
}

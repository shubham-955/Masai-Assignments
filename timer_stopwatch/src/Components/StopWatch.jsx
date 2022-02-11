import React, { useState, useEffect } from 'react'
import '../App.css'

export const StopWatch = () => {

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((time) => time + 10)
            }, 10);
        }

        return () => {
            clearInterval(interval)
        }
    }, [isActive, isPaused])

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false)
    }

    const handleStop = () => {
        setIsPaused(!isPaused)
    }

    const handleReset = () => {
        setTime(0)
        setIsActive(false)
    }

    return (
        <div className='task'>
            <p className='mainTitle'>Stopwatch</p>
            <div className='time'>
                <p className='hr'>{("0" + Math.floor(time / 3600000) % 60).slice(-2)}:</p>
                <p className='min'>{("0" + Math.floor(time / 60000) % 60).slice(-2)}:</p>
                <p className='sec'>{("0" + Math.floor(time / 1000) % 60).slice(-2)}:</p>
                <p className='mili'>{("0" + Math.floor(time / 10) % 100).slice(-2)}</p>
            </div>
            <div className='btnSection'>
                <button onClick={() => handleStart()} className='btn'>Start</button>
                <button onClick={() => handleStop()} className='btn'>Stop</button>
                <button onClick={() => handleReset()} className='btn'>Reset</button>
            </div>
        </div>
    )
}

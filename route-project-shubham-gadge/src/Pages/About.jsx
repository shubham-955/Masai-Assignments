import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div className='aboutContainer'>
            <h1><Link to={"/home"}>Accessories</Link> -- About</h1>
        </div>
    )
}

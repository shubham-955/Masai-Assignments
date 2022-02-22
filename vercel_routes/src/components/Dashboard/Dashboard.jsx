import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { Navbar } from './Navbar'

export const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}

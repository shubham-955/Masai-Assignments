import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Home.css'

export const Home = () => {
    let navigate = useNavigate();
    return (
        <div className='homeContainer'>
            <p>Welcome to Products</p>
            <button className='btn' onClick={() => navigate("/products")}>View All Products</button>
        </div>
    )
}

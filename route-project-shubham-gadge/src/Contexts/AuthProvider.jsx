import React, { createContext, useState } from 'react';
import { getFetch } from '../Components/fetch';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [count, setCount] = useState(0)
    const [state, setState] = useState(false);
    const [cart, setCart] = useState([])

    const getCount = async () => {
        try {
            const res = await getFetch(`http://localhost:3000/cart`)
            console.log(res);
            if (res) {
                setCount(res.length)
                setCart(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ count, setCount, getCount, state, setState, cart }}>
            {children}
        </AuthContext.Provider>
    )
}
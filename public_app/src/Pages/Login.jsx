import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, loginError, loginRequest, loginSuccess } from '../store/auth/auth.actions'
import axios from 'axios'
import "../CSS/Login.css"

export const Login = () => {
    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({ email: "eve.holt@reqres.in", password: "cityslicka" })
    const { isLoading, error } = useSelector((state) => state.auth)

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginRequest())
        axios.post("https://reqres.in/api/login", {
            email: credentials.email,
            password: credentials.password
        }).then((r) => {
            dispatch(loginSuccess(r.data))
        }).catch(error => {
            console.log(error)
            dispatch(loginError(error))
        })
    }

    if (isLoading) return <h1 style={{textAlign:"center"}}>Loading...</h1>
    if (error) return <h1>Error...</h1>
    return (
        <div className='loginContainer'>
            <h1>Welcome to authentication</h1>
            <div className='loginSection'>
                <label htmlFor="email">Enter your email</label>
                <input type="text" id='email' placeholder='Enter your email' name='email' value={credentials.email} onChange={onChange} className='input' />
                <label htmlFor="password">Enter your password</label>
                <input type="text" id='password' name='password' placeholder='Enter your password' value={credentials.password} onChange={onChange} className='input' />
                <button onClick={handleSubmit} className="login">Log In</button>
            </div>
        </div>
    )
}

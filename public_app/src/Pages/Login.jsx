import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/auth/auth.actions'

export const Login = () => {
    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <label htmlFor="email">Enter your email</label>
            <input type="text" id='email' name='email' value={credentials.email} onChange={onChange} />
            <label htmlFor="password">Enter your password</label>
            <input type="text" id='password' name='password' value={credentials.password} onChange={onChange} />
            <button onClick={() => dispatch(login())}>Log In</button>
        </div>
    )
}

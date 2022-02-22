import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import "./CSS/Login.css"

export const Login = () => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [isUser, setIsUser] = useState(true)
    const [isPass, setIsPass] = useState(true)
    const { setIsLoggedIn } = useContext(AuthContext);

    const onChangeUser = (e) => {
        let { value } = e.currentTarget;
        setUser(value)
        setIsUser(true)
    }

    const onChangePass = (e) => {
        let { value } = e.currentTarget;
        setPass(value)
        setIsPass(true)
    }

    const onsubmit = () => {
        if (user === "") {
            setIsUser(false);
            return;
        }
        if (pass === "") {
            setIsPass(false)
            return;
        }
        if (user === "shubham" && pass === "shubham") {
            console.log("success")
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
            console.log("fail");
        }
    }

    return (
        <div className='loginForm'>
            <div className='login'>
                <p className='title'>Sign In Form</p>
                <div className='inputTags'>
                    <label htmlFor="userId">User Id:</label>
                    <input type="text" id='userId' value={user} onChange={onChangeUser} placeholder='Enter your user id' className='input' />
                    {!isUser && <p className='error'>Please enter user id</p>}
                    <label htmlFor="pass">Password:</label>
                    <input type="text" id='pass' value={pass} onChange={onChangePass} placeholder='Enter your password' className='input' />
                    {!isPass && <p className='error'>Please enter password</p>}
                </div>
                <button onClick={() => onsubmit()} className="btn">Sign In</button>
            </div>
        </div>
    )
}

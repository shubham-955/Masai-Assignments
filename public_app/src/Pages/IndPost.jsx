import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../App.css'
import "../CSS/IndPost.css"

const IndPost = (props) => {

    const [post, setPost] = useState({})
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)

    useEffect(() => {
        console.log(props)
        if (params.id) {
            getIndData();
        }
    }, [params.id])

    const getIndData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/posts/${params.id}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                }
            })
            const res = await response.json();
            if (res) {
                setPost(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='productContainer'>
            <div className='indProduct'>
                <img src={post.image} alt="" />
                <div className='indProductContent'>
                    <p className='indProductTitle'>{post.name}</p>
                    <p className='indProductCost'>{post.cost}</p>
                    <button className='shopBtn'>Follow</button>
                </div>
            </div>
        </div>
    )
}

export default IndPost;
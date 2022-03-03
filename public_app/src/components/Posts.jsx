import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/posts/posts.actions';
import '../CSS/Posts.css'


export const Posts = () => {
    const params = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        fetch("http://localhost:3000/posts", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            }
        }).then((r) => r.json()
        ).then((d) => {
            console.log(d)
            dispatch(getPosts(d))
        })
    }


    const posts = useSelector((state) => state.posts.data);
    console.log(posts)
    return (
        <div className='productSection'>
            {posts.map(item => {
                return (<div className='indContainer'>
                    <div className='image'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='details'>
                        <p className='title'>{item.name}</p>
                        <p className='cost'>{item.cost}</p>
                    </div>
                    <div className='btnView'>
                        <Link to={`/${item.id}`}>
                            <button className='shopBtn'>Follow</button>
                        </Link>
                    </div>
                </div>)
            })
            }
        </div>
    )
}

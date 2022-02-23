import React, { useState, useEffect, useContext } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useNavigate } from 'react-router-dom'
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import '../CSS/Home.css'
import "../App.css"
import { AuthContext } from '../Contexts/AuthProvider';

export const Home = () => {

    const { getCount } = useContext(AuthContext);
    let navigate = useNavigate();
    const [products, setProducts] = useState([])
    const [slider, setSlider] = useState([])

    useEffect(() => {
        getData();
        getSliderData();
        getCount();
    }, [])

    const getData = async () => {
        fetch("http://localhost:3000/category", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            }
        }).then((r) => r.json()
        ).then((d) => {
            setProducts(d);
            console.log(products)
        })
    }

    const getSliderData = async () => {
        fetch("http://localhost:3000/slider", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            }
        }).then((r) => r.json()
        ).then((d) => {
            setSlider(d);
            console.log(products)
        })
    }

    const properties = {
        canSwipe: false,
        autoPlay: true,
        prevArrow: <div className='left-arrow arrows'>
            <NavigateBefore style={{ color: 'black', fontSize: 35 }} />
        </div>,
        nextArrow: <div className='right-arrow arrows'>
            <NavigateNext style={{ color: 'black', fontSize: 35 }} />
        </div>
    }

    return (
        <div className='homeContainer'>
            <div className='sliderContainer'>
                <Slide easing="ease" {...properties}>
                    {slider.map(item => {
                        return (
                            <div className="each-slide">
                                <div style={{ 'backgroundImage': `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.thumbnail}})` }}>
                                    <p className="homeTitle">{item.title}</p>
                                    <p className='homeSubTitle'>{item.subTitle}</p>
                                    <button className='shopBtn' onClick={() => navigate(`/${item.name}/${item.id}`)}>SHOP NOW</button>
                                </div>
                            </div>
                        )
                    })
                    }
                </Slide>
            </div>
            <div className='productSection'>
                {products.map(item => {
                    return (<div className='products'
                        style={{ 'backgroundImage': `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${item.image})` }}
                        onClick={() => navigate(`/${item.name}/${item.id}`)}
                    >
                        <p>{item.name}</p>
                    </div>)
                })
                }
            </div>
        </div>
    )
}

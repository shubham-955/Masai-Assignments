import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../CSS/Product.css'
import '../App.css'
import { AuthContext } from '../Contexts/AuthProvider'

export const Product = (props) => {

    const { getCount } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)

    useEffect(() => {
        console.log(props)
        if (params.id || params.type) {
            getIndData();
            getCount()
        }
    }, [params.id || params.type])

    const getIndData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/category/${params.id}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                }
            })
            const res = await response.json();
            if (res) {
                setProduct(res.products[params.type])
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='productContainer'>
            <div className='indProduct'>
                <img src={product.image} alt="" />
                <div className='indProductContent'>
                    <p className='indProductTitle'>{product.name}</p>
                    <p className='indProductCost'>{product.cost}</p>
                    <button className='shopBtn'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

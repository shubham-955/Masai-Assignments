import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../CSS/Product.css'

export const Product = () => {

    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            getIndData();
        }
    }, [params])

    const getIndData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/products/${params.id}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                }
            })
            const res = await response.json();
            if (res) {
                setProduct(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='productContainer'>
            <div className='indProduct'>
                <div className='header' onClick={() => navigate("/products")}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUF8fx47fl-79qGRzw5njCD2jd3v52DfgL4w&usqp=CAU" alt="" />
                </div>
                <div className='indProductContent'>
                    <img src={product.image} alt="" />
                    <p className='indProductTitle'>{product.name}</p>
                    <p className='indProductCost'>{product.cost}</p>
                    <button className='btn'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

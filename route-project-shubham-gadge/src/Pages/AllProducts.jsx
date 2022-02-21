import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../CSS/AllProducts.css'

export const AllProducts = () => {

  let navigate = useNavigate();
  const [products, setProducts] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    fetch("http://localhost:3000/products", {
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

  return (
    <div className='productsContainer'>
      {products.map((item) => {
        return (
          <div key={item.id} className='indContainer'>
            <div className='details'>
              <p className='title'>{item.name}</p>
              <p className='cost'>{item.cost}</p>
            </div>
            <button className='btn' onClick={() => navigate(`/products/${item.id}`)}>More details..</button>
          </div>
        )
      })}
      {/* <Outlet /> */}
    </div>
  )
}

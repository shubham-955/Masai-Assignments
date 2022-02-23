import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../CSS/AllProducts.css'
import "../App.css"

export const AllProducts = () => {

  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getIndData();
    }
  }, [params])

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
        setProducts(res.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log("products....", products)

  return (
    <div className='productSection'>

      {products.map(item => {
        return (<div className='indContainer'
        >
          <div className='image'>
            <img src={item.image} alt="" />
          </div>
          <div className='details'>
            <p className='title'>{item.name}</p>
            <p className='cost'>{item.cost}</p>
          </div>
          <div className='btnView'>
            <Link to={`/${params.category}/${params.id}/${item.name}/${item.id}`}>
              <button className='shopBtn'>View more</button>
            </Link>
          </div>
        </div>)
      })
      }
    </div>
  )
}

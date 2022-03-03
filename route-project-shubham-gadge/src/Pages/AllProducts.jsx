import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../CSS/AllProducts.css'
import "../App.css"
import { AuthContext } from '../Contexts/AuthProvider'
import { getFetch, postFetch } from '../Components/fetch'
import { v4 } from 'uuid'

export const AllProducts = () => {

  const { getCount } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getIndData();
      getCount();
    }
  }, [params])

  const getIndData = async () => {
    try {
      const res = await getFetch(`http://localhost:3000/category/${params.id}`)
      console.log(res);
      if (res) {
        setProducts(res.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log("products....", products)

  const addToCart = async (item) => {
    let data = {
      ...item,
      id: v4()
    }
    console.log(data);
    try {
      const responseData = await postFetch("http://localhost:3000/cart", data)
      console.log(responseData)
      getCount();
      // changeStatus(item);
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  // const changeStatus = (item) => {
  //   let data = {
  //     ...item,
  //     status: true
  //   }
  //   console.log(data);
  //   fetch(`(http://localhost:3000/category/${params.id}).products[${item.id}]`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((r) => {
  //     console.log(r)
  //     r.json();
  //   }
  //   ).then((d) => {
  //     console.log(d)
  //   })
  // }

  return (
    <div className='productSection'>
      {products.map(item => {
        return (<div className='indContainer'>
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
            <button className='shopBtn' onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        </div>)
      })
      }
    </div>
  )
}

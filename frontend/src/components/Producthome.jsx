import React from 'react';
import { useEffect, useState } from 'react';
// import './styles.css';

const Productshome = () => {
    const [products, setProducts] = useState([]);

    const data = async() => {
        const response = await fetch('http://fakestoreapi.com/products?limit=4');
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        data();
    }, [])

  return (
    <div className='mainproductdiv'>
    <h1>Products</h1>
    <div className='product-list'>
        {
            products.map((item) => {
                return (
                    <div className='cards'>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt="" />
                        <p>{item.category}</p>
                        <p>Rs. {item.price}</p>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}


export default Productshome
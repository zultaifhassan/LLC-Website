import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import { useParams } from 'react-router-dom';

const Productdes = () => {

    const params = useParams();
    const [product, setProduct] = useState(null);

    const data = async() => {
        const response = await fetch('http://localhost:1122/getUser/655b12cb3083b42ac2e274f1');
        const data = await response.json();
        setProduct(data);
        console.log(params.id)
    }

    useEffect(() => {
        data();
    }, []);

  return (
    <>
    <div className='singleproduct container mt-5'>
        <h1>Products Description</h1>
        <div className='productone mt-5 mb-5'>
            <div className="image-pic">
                <img src={product?.image} alt="" />
            </div>
            <div className="detail">

                <h3>{product?.name}</h3>
                <h5>{product?.email}</h5>
                <p>{product?.address}</p>
                <h2>$ {product?.phone}</h2>
            <Counter />
            <button id='addcart'>Add to Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Productdes
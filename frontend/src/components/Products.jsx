import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const data = async () => {
    const response = await fetch("http://localhost:1122/getProduct");
    const data = await response.json();
    setProducts(data);
};

useEffect(() => {
    data();
  }, []);

  return (
    <div className="product-list"> 
      {products.map((product) => {
          return ( 
              <div className="cards">
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                    <p>{product.descrition}</p>
                    <Link to='/product/655b12cb3083b42ac2e274f1'>
                    <p>{product.weight}</p>
                    </Link>
                </div>
        );
    })}
    </div>
  );
};

export default Products;

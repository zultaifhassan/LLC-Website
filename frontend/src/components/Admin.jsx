import React from "react";
import { useState, useEffect} from 'react';

const Admin = () => {

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
    <>
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Model</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product) => {
          return ( 
                    <tr>
                    <th>{product._id}</th>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.message}</td>
                    <td><img src={product.imageUrl} width={"100px"} height={"100px"} alt={product.image}/></td>
                    <td className="d-flex gap-3 p-5">
                        <button className="btn btn-danger">Delete</button>
                        <button className="btn btn-info">Edit</button>
                    </td>
          </tr>
        );
    })}
        </tbody>
      </table>
    </>
  );
};

export default Admin;

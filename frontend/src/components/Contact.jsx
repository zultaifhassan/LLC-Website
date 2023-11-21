import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Admin from './Admin';

const Contact = () => {

  const [formData, setFormData] = useState({
    price:"",
    weight: "",
    message: "",
    imageUrl: "",
    title: "",
  })

  const {price, weight, message, imageUrl, title} =  formData;

  const onHandle = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:1122/product", formData)
    console.log(data)
    alert('submitted')
  }


  return (
    <>
    <div className="container contact-cont">
        <img src="/Images/image 7.png" alt="" />
        <form onSubmit={onSubmit}>
          <h3>Contact Us Through Email</h3>
          
          <input type="text" name='price' value={price} onChange={onHandle} placeholder="Price" />
          
          <input type="number" name='weight' value={weight} onChange={onHandle} placeholder="Number" />
          
          <select name="title" value={title} onChange={onHandle}>
            <option value='' disabled selected>Select Model</option>
            <option value='Hp' >Hp</option>
            <option value='Lenovo'>Lenovo</option>
            <option value='Dell'>Dell</option>
            <option value='Apple'>Apple</option>
          </select>
          <input type="text" name="imageUrl" value={imageUrl} onChange={onHandle}  placeholder="Enter Image Link"/>
          
          <textarea type="text" name='message' value={message} onChange={onHandle} placeholder="Descrition"></textarea>
          
          <button>Submit</button>
        </form>
    </div>
    <Admin />
    </>
  )
}

export default Contact
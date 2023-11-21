import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {

  const [formData, setFormData] = useState({
    name:"",
    email: "",
    message: "",
    drop: "",
  })

  const {name, email, message, drop} =  formData;

  const onHandle = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post('http://localhost:1122/contact', formData)
    console.log(data)
    alert('submitted')
  }


  return (
    <div className="container contact-cont">
        <img src="/Images/image 7.png" alt="" />
        <form onSubmit={onSubmit}>
          <h3>Contact Us Through Email</h3>
          
          <input type="text" name='name' value={name} onChange={onHandle} placeholder="Name" />
          
          <input type="email" name='email' value={email} onChange={onHandle} placeholder="Email" />
          
          <select name="drop" value={drop} onChange={onHandle}>
            <option value='' disabled selected>Select City</option>
            <option value='Gilgit' >Gilgit</option>
            <option value='Islamabad'>Islamabad</option>
            <option value='Karachi'>Karachi</option>
            <option value='Lahore'>Lahore</option>
          </select>
          
          <textarea type="text" name='message' value={message} onChange={onHandle} placeholder="Message"></textarea>
          
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact
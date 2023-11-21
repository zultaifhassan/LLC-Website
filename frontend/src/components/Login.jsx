import React from 'react';
import { useState } from 'react';
import {  toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Login = () => {

    const defaultName = "zultaif";
    const defaultEmail = "zultaif@gmail.com";
    const defaultPassword = "12345";
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: "",
      })
    
      const {name, email, password} =  formData;
    
      const onHandle = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
        setFormData({
        name:"",
        email: "",
        password: "",
        })
        console.log(formData)

        if(name === defaultName && email === defaultEmail && password === defaultPassword){
            alert("Successfully Login")
        } else (
            alert("Error")
        )

        setTimeout(()=> {
            navigate('/userdetail')
        }, 3000)
      }
  return (
    <div className="container contact-cont mt-5 mb-5">
        <form action="" onSubmit={onSubmit}>
          <h3>SignUp Form</h3>
          
          <input type="text" name='name' value={name} onChange={onHandle} placeholder="Name" />
          
          <input type="email" name='email' value={email} onChange={onHandle} placeholder="Email" />


          <input type="password" name='password' value={password} onChange={onHandle} placeholder='Create Password' />
          
          <button>Login</button>
        </form>
    </div>
  )
}

export default Login
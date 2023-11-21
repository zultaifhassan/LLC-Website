import React from 'react';
import { useState } from 'react';
import {  toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        gender: "",
        drop: "",
        password: "",
        cpassword: "",
      })
    
      const {name, email, gender, drop, password, cpassword} =  formData;
    
      const onHandle = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
      }
    
      const onSubmit = (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            toast.error('Password Does Not Match', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        } else {
            toast.success('Submitted Succesfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }

        setFormData({
        name:"",
        email: "",
        gender: "",
        drop: "",
        password: "",
        cpassword: "",
        })
        // console.log(formData)

        setTimeout(()=> {
            navigate('/login')
        }, 3000)
      }
  return (
    <div className="container contact-cont mt-5 mb-5">
        <form action="" onSubmit={onSubmit}>
          <h3>SignUp Form</h3>
          
          <input type="text" name='name' value={name} onChange={onHandle} placeholder="Name" />
          
          <input type="email" name='email' value={email} onChange={onHandle} placeholder="Email" />
          <select name="gender" value={gender} onChange={onHandle}>
            <option value='' disabled selected>Gender</option>
            <option value='Gilgit' >Male</option>
            <option value='Islamabad'>Female</option>
          </select>
          
          <select name="drop" value={drop} onChange={onHandle}>
            <option value='' disabled selected>Select Country</option>
            <option value='Gilgit' >Pakistan</option>
            <option value='Islamabad'>India</option>
            <option value='Karachi'>Iran</option>
            <option value='Lahore'>USA</option>
          </select>

          <input type="password" name='password' value={password} onChange={onHandle} placeholder='Create Password' />
          <input type="password" name='cpassword' value={cpassword} onChange={onHandle} placeholder='Enter Password Again' />

          <Link to='/login'>LogIn</Link>
          
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Signup
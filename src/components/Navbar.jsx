import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <div className='fluid-container main-navbar'>
        <div className="container logo-links">
            <div className="logo-img">
             <img src="/Images/image 1.png" alt="" />
            </div>
            <div className="center-links">
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/'>About</a></li>
                  <li><a href='/'>Services</a></li>
                  <li><a href='/'>Contact Us</a></li>
                </ul>
            </div>
            <div className="sign-but">
              <a href='/'><button>Register / Login</button></a>
            </div>
        </div> 

    </div>
  )
}

export default Navbar
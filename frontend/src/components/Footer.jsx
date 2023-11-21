import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container last-sec'>
        <div className="f-logo">
            <img src="/Images/image 1.png" alt="" />
            <p>Copyright © 2020 HB AND SONS LLC.<br />All rights reserved</p>
            <div className="social-icones">
                <img src="/Images/Social Icons.png" alt="" />
                <img src="/Images/11.png" alt="" />
                <img src="/Images/Social Icons (1).png" alt="" />
                <img src="/Images/Social Icons (2).png" alt="" />
            </div>
        </div>
        <div className="f-links">
            <h3>Company</h3>
            <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <div className="f-links">
            <h3>Support</h3>
            <ul>
                <li><Link to="/">Help Center</Link></li>
                <li><Link to="/">Terms and services</Link></li>
                <li><Link to="/">Legal</Link></li>
                <li><Link to="/">Privacy policy</Link></li>
            </ul>
        </div>

        <div className="f-searchbar">
        <h3>Stay up to date</h3>
        <div className="search-bar">
            <input type="text" placeholder="Your email address" />
            <img src="/Images/send.png" alt="" />
        </div>

        </div>
    </div>
  )
}

export default Footer
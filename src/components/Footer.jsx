import React from 'react'

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
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className="f-links">
            <h3>Support</h3>
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms and services</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Privacy policy</a></li>
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
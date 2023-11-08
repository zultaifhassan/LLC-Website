import React from 'react';
import './styles.css';

const Client = () => {
  return (
    <>
    <div className='Container client-sec'>
        <h2>Working with Fortune <span>500+ clients</span></h2>
        <p>Join us in our journey to success.</p>

        <div className="client-brand">
            <img src="/Images/image 2.png" alt="" />
            <img src="/Images/image 3.png" alt="" />
            <img src="/Images/image 5.png" alt="" />
            <img src="/Images/image 6.png" alt="" />
            <img src="/Images/image 4.png" alt="" />
        </div>
    </div>
    
    <div className="container image-llc">
        <div className="house-img">
            <img src="/Images/image 7.png" alt="" />
        </div>
        <div className="text-side1">
            <h1>Discover Excellence with <br/>HB and SONS LLC</h1>
            <p>Our Premier Partner in Fuel Transport and Delivery</p>
            <button>Get in Touch</button>
        </div>
    </div>

    </>
  )
}

export default Client
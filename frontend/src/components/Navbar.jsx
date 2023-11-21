import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
// import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Navbar = () => {

  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  return (
    <div className='fluid-container main-navbar'>
        <div className="container logo-links">
            <div className="logo-img">
            <Link to="/"> <img src="/Images/image 1.png" alt="" /></Link>
            </div>

            <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>

            <div className={`center-links  ${showNavbar && "active"}`}>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/services'>Services</Link></li>
                  <li><Link to='/about'>About </Link></li>
                  <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            <div className="sign-but">
              <Link to='/signup'><button>Register / Login</button></Link>
            </div>
            </div>
        </div> 

    </div>
  )
}

export default Navbar


const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);
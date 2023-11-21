import React from 'react';
import { useEffect, useState, useContext, createContext } from 'react';
// import { Link } from 'react-router-dom';


const userContext = createContext();

const About = () => {


  const [user, setUser] = useState("Zultaif Hassan");
  // const [user, setUser] = useState([]);

    // const data = async() => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json();
    //     setUser(data);
    //     console.log(data);
    // }

    // useEffect(() => {
    //     data();
    // }, [user])


  return (
    // <div className="about-main">
    //   {
    //         user.map((product) => {
    //             return (
    //                 <>
    //                 <div className='cards'>
    //                     <h2>{product.name}</h2> 
    //                     <h3>{product.email}</h3>          
    //                 </div>
    //                 </>
    //             )
    //         })
    //     }

    // </div>
    <>
      <userContext.Provider value={user}>
        <h2>Hello {user}</h2>
        <Component1 />
      </userContext.Provider>
    </>
  )
}

const Component1 = () => {
  return (
    <>
    <h3>Component 2</h3>
    <Component2 />
    </>
  )
}

const Component2 = () => {
  return (
    <>
    <h3>Component 3</h3>
    <Component3 />
    </>
  )
}

const Component3 = () => {
  const user = useContext(userContext);
  return (
    <>
    <h3>Component 3</h3>
    <h2>{`${user}`}</h2>
    </>
  )
}



export default About
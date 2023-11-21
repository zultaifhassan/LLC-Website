import React from 'react';
import Assurance from "./Assurance";
import Client from "./Client";
import Mianimage from "./Mianimage";
import Slider from './Slider';
import Productshome from './Producthome';

const Home = () => {
  return (
    <>
        <Mianimage />
        <Client />
        <Productshome />
        <Slider />
        <Assurance />
    </>
  )
}

export default Home
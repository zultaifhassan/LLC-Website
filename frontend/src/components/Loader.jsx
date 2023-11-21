import React from 'react';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './styles.css';

const Loader = () => {

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [])
  return (
    <div className='slider'>
        <ClipLoader color={"#ED0909"} loading={loader} size={50}  />
    </div>
  )
}

export default Loader
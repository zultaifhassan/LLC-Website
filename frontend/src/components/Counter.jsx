import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(1);

  const add = () => {
    if(counter<5) {
      setCounter(counter + 1);
    }
  
  }

  const minus=() => {
    if(counter>1){

      setCounter(counter - 1);
    }
  }
  return (
    <div className="counter1">
      <button onClick={() => minus()} className='btn-danger'>-</button>
      <h1>{counter}</h1>
      <button onClick={() => add()}>+</button>
    </div>
  )
}

export default Counter
import React from 'react';
import { useState, useCallback } from "react";
import Todos from "./Memo";

const Userdetail = () => {
    const [counter, setCounter] = useState(0);
    const [todolist, setTodolist] = useState([]);
  
    const increment = () => {
      setCounter((c) => c + 1);
    };
    const addTodolist = useCallback(() => {
      setTodolist((t) => [...t, "New Todo"]);
    }, [todolist]);
  
    return (
      <>
        <Todos todolist={todolist} addTodolist={addTodolist} />
        <hr />
        <div>
          Count: {counter}
          <button onClick={increment}>+</button>
        </div>
      </>
    )
}

export default Userdetail
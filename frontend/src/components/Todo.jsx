import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, {text: newTask}]);
      setNewTask('');
    }
  };


  return (
    <div className='container'>
      <h1>Todo List</h1>
      
        {tasks.map((item) => (
          <h3 key={item.id}>
        
            <span>
              {item.text}
            </span>
          </h3>
        ))}
      
      <div>
        <input
          type="text"
          placeholder="Enter Food List"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Food</button>
      </div>
    </div>
  );
};

export default Todo;
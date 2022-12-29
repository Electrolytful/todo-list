import './App.css';
import { useState } from 'react';
import { Task } from "./Task"

function App() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };
  
  const addTask = () => {
    const newTask = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      taskName: task,
      completed: false,
    }
    setTodo([...todo, newTask]);
  };

  const deleteTask = (id) =>  {
    setTodo(todo.filter((t) =>  t.id !== id));
  };

  const completeTask = (id) => {
    setTodo(todo.map((t) => {
      if (t.id === id) {
        return {...t, completed : true};
      } else {
        return t;
      }
    }));
  };

  return (
    <div className ="App">
      <div className="createTask">
        <input type="text" onChange={handleInput}/>
        <button onClick={addTask}> Add Task </button>
      </div>

      <div className="list">
        {todo.map((t) => {
          return (
            <Task 
            taskName={t.taskName} 
            id={t.id} 
            completed={t.completed} 
            deleteTask={deleteTask} 
            completeTask={completeTask} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
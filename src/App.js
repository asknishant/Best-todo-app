import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos,setTodos] = useState(["Note1","Note2"]);
  const [task,setTask] = useState("")
  function createTodo() {
    console.log('Task value', task)
    setTodos(oldTodos => {
      return [...oldTodos, task]
    })
  }
  return (
    <div className="App">
      <h1>The best todo app ever</h1>
      <input type='text' value={task} onChange={event => {
        setTask(event.target.value)
      }}></input>
      <button onClick={createTodo}>Create todo</button>
      <div>
        {todos.map(todo => {
          return <li>{todo}</li>
        })}
      </div>
    </div>
  );
}

export default App;

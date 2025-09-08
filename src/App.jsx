import React, { useState } from "react";
import './App.css';
function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
// adding the text
  const addTodo = () => {
    // spread opeartor
    setTask([...task, input]);
    setInput("");
  };
  // deleting the text
  const deleteTodo = (index) => {
    // filter of array
    const newTodos = task.filter((_, i) => i !== index);
    setTask(newTodos);
  };
  return (
    <div className="maindiv">
      <h1>To do list</h1>
      <input type="text" value={input} onChange={(e) =>setInput(e.target.value) } />
      <button onClick={addTodo}>Add</button>
      <ul>
        {task.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

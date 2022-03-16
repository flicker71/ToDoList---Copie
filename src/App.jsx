import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './Composant/TodoForm';
import TodoList from './Composant/ToDoList';

import axios from 'axios';


function App() {

  const [todos, setTodos] = useState([]);

  const apiUrl = 'http://localhost:3080/api/todos/';

  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      const allTodos = resp.data;
      setTodos(allTodos);
    });
  }, []);


  const addTodo = (todo) => {
    axios.post(apiUrl, {
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
    })
  }

  const toogleComplete = (id) => {
    todos.map(todo => {
      if (todo.id === id) {
        axios.put(apiUrl + `${id}`, {
          completed: !todo.completed
        })
      }
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      );
    })
  }

  const removeTodo = (id) => {
    //axios pour le changement dans le back
    axios.delete(apiUrl + `${id}`);
    //setTodos pour le changement dans le front (on peut faire un refresh btw)
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const updateTodo = (id) => {
    todos.map(todo => {
      if (todo.id === id) {
        axios.put(apiUrl + `${id}`, {
          title: todo.title,
          description: todo.description,
          dueDate: todo.dueDate,
        })
      }
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <TodoForm todos={todos} addTodo={addTodo} />
        <TodoList todos={todos} toogleComplete={toogleComplete} removeTodo={removeTodo} updateTodo={updateTodo} />
      </header>
    </div>
  );
}

export default App;

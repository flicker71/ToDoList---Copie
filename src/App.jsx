import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './Composant/TodoForm';
import TodoList from './Composant/ToDoList';

import axios from 'axios';


function App() {

  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState({
    title: '',
    completed: false,
    description: ''
  });

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
    //Je ne sais pas comment actualiser l'id directement, 
    //ça pose problème pour delete une todo que l'on vient de créer car il ne trouve pas l'id avant l'actualisation
    setTodos([...todos, todo]);
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
    //setTodos pour le changement dans le front
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const updateTodo = (todo, id) => {
    setTodos(todos.filter(todo => todo.id === id));
      axios.put(apiUrl + `${id}`, {
        title: todo.title,
        description: todo.description,
        dueDate: todo.dueDate,
      });
    
  }

  const handleFormSubmit = (todo) => {

     if (!todo.id) {
      addTodo({ ...todo });
    }
    else {
      updateTodo({ ...todo }, todo.id);
    }

    setEditedTodo({
      title: '',
      completed: false,
      description: ''
    })
    //   return todo
    // }
    // else {
    //   return null
    // }
  }

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm onSubmit={handleFormSubmit} editedTodo={editedTodo} />
        <TodoList todos={todos} toogleComplete={toogleComplete} removeTodo={removeTodo}/>
      </header>
    </div>
  );
}

export default App;

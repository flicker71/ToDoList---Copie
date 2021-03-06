import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TodoForm from './Composant/TodoForm';
import TodoList from './Composant/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState({
    title: '',
    completed: false,
    description: '',
    dueDate: '',
  });

  // route principal pour accéder à mon api
  const apiUrl = 'http://localhost:3080/api/todos/';

  // Permet de récupérer mes todos présent dans ma bdd
  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      const allTodos = resp.data;
      setTodos(allTodos);
    });
  }, []);

  // Permet d'ajouter une todo
  const addTodo = (todo) => {
    axios.post(apiUrl, {
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
    });
    // Permet de rajouter la todo avec un id et la date de création, sans le timeOut, ça ne fonctionne pas
    setTimeout(() => {
      axios.get(apiUrl).then((resp) => {
        const allTodos = resp.data;
        setTodos(allTodos);
      }), 1000;
    });
  };

  // Permet de mettre à jour le status de la todo
  const toogleComplete = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        axios.put(`${apiUrl}${id}`, {
          completed: !todo.completed,
        });
      }
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      );
    });
  };

  // Permet de supprimer une todo
  const removeTodo = (id) => {
    // axios pour le changement dans le back
    axios.delete(`${apiUrl}${id}`);
    // setTodos pour le changement dans le front
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // appel de la route pour modifier une todo
  const updateTodo = (todo, id) => {
    setTodos(todos.filter((todo) => todo.id === id));
    axios.put(`${apiUrl}${id}`, {
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
    });
  };

  // Utiliser pour ajouter ou modifier une todo, si l'objet todo envoyé n'a pas d'id alors c'est un ajout sinon c'est un edit
  const handleFormSubmit = (todo) => {
    if (!todo.id) {
      addTodo({ ...todo });
    } else {
      updateTodo({ ...todo }, todo.id);
    }

    // Remet les inputs avec des chamsp vident
    setEditedTodo({
      title: '',
      completed: false,
      description: '',
      dueDate: '',
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm onSubmit={handleFormSubmit} editedTodo={editedTodo} />
        <TodoList todos={todos} toogleComplete={toogleComplete} removeTodo={removeTodo} />
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import TodoForm from './Composant/TodoForm';
import TodoList from './Composant/ToDoList';
// import { Form } from './Form';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const toogleComplete = (id) => {
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
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Form /> */}
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toogleComplete={toogleComplete} removeTodo= {removeTodo} />
      </header>
    </div>
  );
}

export default App;

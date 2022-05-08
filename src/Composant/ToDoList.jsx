import React, { useState, useEffect } from 'react';
import Todo from './Todo';

function TodoList({ todos, toogleComplete, removeTodo }) {
  const [statusTodo, setStatusTodo] = useState('all');

  // Affiche les élements du select
  const options = [
    { value: '', label: 'Choisit un filtre' },
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'uncompleted', label: 'Uncompleted' },
  ];

  const handleStatusTodo = (e) => {
    console.log('Status Selected!!');
    const selectedValue = e.target.value;
    setStatusTodo({ status: selectedValue });
    console.log({ status: selectedValue });
    return selectedValue;
  };

  // const { todos } = props
  return (

    <form>
      <select value={statusTodo.value} onChange={handleStatusTodo}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      {/* Affiche ma liste des todos */}
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toogleComplete={toogleComplete} removeTodo={removeTodo} />
        ))}
      </ul>
    </form>
  );
}

export default TodoList;

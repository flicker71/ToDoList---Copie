import React from "react";
import Todo from "./Todo";
import { useState } from 'react';
import { useEffect } from 'react';

const TodoList = ({ todos, toogleComplete, removeTodo }) => {

    
  const [statusTodo, setStatusTodo] = useState("all");
  
  const options = [
    { value: '', label: 'Choisit un filtre' },
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'uncompleted', label: 'Uncompleted' },
  ];
    
  const handleStatusTodo = (e) => {
    console.log("Status Selected!!");
    const selectedValue = e.target.value;
    setStatusTodo({ status: selectedValue });
    console.log({status: selectedValue});
    return selectedValue;
  }

    // const { todos } = props
    return (
        
    <form >
        <select value={statusTodo.value} onChange={handleStatusTodo}>
            {options.map((option) => (
            <option value={option.value}>{option.label}</option>
            ))}
        </select>
        <ul >
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toogleComplete={toogleComplete} removeTodo={removeTodo} />
            ))}
        </ul>
    </form>
    )
}

export default TodoList

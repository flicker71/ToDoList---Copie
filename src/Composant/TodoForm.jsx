import React, { useState, useEffect } from 'react';

function TodoForm({ onSubmit, editedTodo }) {
  const [editTodo, setEditTodo] = useState({});

  useEffect(() => setEditTodo(editedTodo), [editedTodo]);

  // Renvoie les nouvelles todos au App.js
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editTodo);
  };

  // Met à jour mes todos
  const handleChange = (e) => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>
        Titre :
        {' '}
        <input type="text" name="title" value={editTodo.title} placeholder="un titre" onChange={handleChange} required />
      </label>
      {' '}
      <label>
        Description :
        {' '}
        <input type="text" name="description" value={editTodo.description} placeholder="une description" onChange={handleChange} required />
      </label>
      {' '}
      <label>
        Date de fin :
        {' '}
        <input type="date" name="dueDate" value={editTodo.dueDate} onChange={handleChange} required />
      </label>

      <button type="submit">Add</button>
      <br />
    </form>
  );
}

export default TodoForm;

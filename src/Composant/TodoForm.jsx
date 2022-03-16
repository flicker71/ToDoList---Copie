import { useState } from 'react';
import { useEffect } from 'react';
import TodoList from './ToDoList';
// import uuid from "uuid";


// const LOCAL_STORAGE_KEY = "ToDoList-newTodos"

// useEffect(() => {
//   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   if (storageTodos) {
//     setNewTodos(storageTodos);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodo));
// }, [newTodo]);

function TodoForm({ todos, addTodo }) {

  const [open, setOpen] = useState(false);
  const [newTodo, setNewTodos] = useState([{
    title: '',
    completed: false,
    description: ''
  }]);

  function refreshPage(){ 
    window.location.reload(); 
}

  const handleSubmit = (e) => {
    e.preventDefault();
    { newTodo.createDate = getCurrentDate(); }
    addTodo({ ...newTodo });
    refreshPage();
  };

  const handleChange = (e) => {
    setNewTodos({ ...newTodo, [e.target.name]: e.target.value });
  };


  const getCurrentDate = () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return (`${year}-${month < 10 ? `0${month}` : month}-${date}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label>
        Titre :
        {' '}
        <input type="text" name="title" value={newTodo.title} placeholder="un titre" onChange={handleChange} />
      </label>
      {' '}
      <label>
        Description :
        {' '}
        <input type="text" name="description" value={newTodo.description} placeholder="une description" onChange={handleChange} />
      </label>
      {' '}
      <label>
        Date de fin :
        {' '}
        <input type="date" name="dueDate" value={newTodo.dueDate} onChange={handleChange} />
      </label>

      <button type="submit">Add</button>
      <br></br>

      <select name="Status" id="Status-select">
        <option value="">Choisit un filtre</option>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  )
}

export default TodoForm;
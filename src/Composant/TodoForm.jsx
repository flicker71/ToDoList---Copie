import { useState } from 'react';
import { useEffect } from 'react';

function TodoForm({ onSubmit, editedTodo }) {

  const [editTodo, setEditTodo] = useState({});
  const [toggleSubmit, setToggleSubmit] = useState(true);

  useEffect(() => setEditTodo(editedTodo), [editedTodo])

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo({ ...editTodo});   
    onSubmit(editTodo);
  };

  const handleChange = (e) => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
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
        <input type="text" name="title" value={editTodo.title} placeholder="un titre" onChange={handleChange} />
      </label>
      {' '}
      <label>
        Description :
        {' '}
        <input type="text" name="description" value={editTodo.description} placeholder="une description" onChange={handleChange} />
      </label>
      {' '}
      <label>
        Date de fin :
        {' '}
        <input type="date" name="dueDate" value={editTodo.dueDate} onChange={handleChange} />
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
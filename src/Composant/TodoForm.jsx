import { useState } from 'react';
// import Dialog from "@material-ui/core/Dialog";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import Button from "@material-ui/core/Button";
import { useEffect } from 'react';
// import uuid from "uuid";


const LOCAL_STORAGE_KEY = "ToDoList-todos"

function TodoForm({ addTodo }) {

  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([{
    id: '1',
    title: 'foo',
    completed: true,
    description: 'bar',
  }]);
  const [newTodo, setNewTodos] = useState([{
    title: '',
    completed: false,
    description: ''
  }]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setNewTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodo));
  }, [newTodo]);


  const handleSubmit = (e) => {
    e.preventDefault();
    { newTodo.createDate = getCurrentDate(); }
    addTodo({ ...newTodo });
  };

  const handleChange = (e) => {
    setNewTodos({ ...newTodo, [e.target.name]: e.target.value });
  };

  // const handleEdit = (e) => {
  //   setTodos([...todos, { [e.target.name]: e.target.value }])
  // }

  const handleTodoCompleted = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      }
      ));
  }

  const getCurrentDate = () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return (`${year}-${month < 10 ? `0${month}` : month}-${date}`);
  };



  // const handleClickToOpen = () => {
  //   setOpen(true);
  // };

  // const handleToClose = () => {
  //   setOpen(false);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Id :
        {' '}
        <input type="text" name="id" disabled value={newTodo.id = Date.now()} onChange={handleChange} />
      </label>
      {' '}
      <br />
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


  // return (
  //   <form onSubmit={handleSubmit}>
  //     {/* Id : {newTodo.id = Date.now()}{", "} */}
  //     <label>
  //       Id :
  //       {' '}
  //       <input type="text" name="id" disabled value={newTodo.id = Date.now()} onChange={handleChange} />
  //     </label>
  //     {' '}
  //     {/* <label>
  //     <label>
  //       Titre :
  //       {' '}
  //       <input type="text" name="title" value={newTodo.title} placeholder="un titre" onChange={handleChange} />
  //     </label>
  //     {' '}
  //     <label>
  //       Description :
  //       {' '}
  //       <input type="text" name="description" value={newTodo.description} placeholder="une description" onChange={handleChange} />
  //     </label>
  //     {' '}
  //     <label>
  //       Date de fin :
  //       {' '}
  //       <input type="date" name="dueDate" value={newTodo.dueDate} onChange={handleChange} />
  //     </label>

  //     <button type="submit">Add</button>
  //     <br></br>

  //     <select name="Status" id="Status-select">
  //       <option value="">Choisit un filtre</option>
  //       <option value="all">All</option>
  //       <option value="completed">Completed</option>
  //       <option value="uncompleted">Uncompleted</option>
  //     </select>

  //     <ul>
  //       {/* {labels.map(labels = <li> {labels.titleLabel}, {labels.color}</li>)} */}
  //       {todos.map((todo) => (
  //         <li style={todo.completed ? { textDecoration: 'line-through' } : {}}>
  //           <input type="checkbox" checked={todo.completed} onChange={handleTodoCompleted} />
  //           {' '}
  //           <b>id :</b>
  //           {' '}
  //           {todo.id}
  //           ,
  //           {' '}
  //           <b>Date de création :</b>
  //           {' '}
  //           {todo.createDate}
  //           ,
  //           {' '}
  //           <b>title :</b>
  //           {' '}
  //           {todo.title}
  //           ,
  //           {' '}
  //           <b>description : </b>
  //           {todo.description}
  //           ,
  //           <b> Date de fin : </b>
  //           {todo.dueDate}
  //           {' '}
  //         </li>
  //       ))}
  //       {/* <li><button onClick={deleteTodo()}>Delete</button></li> */}
  //     </ul>
  //   </form>
  // );
}

export default TodoForm;
      // <div>
      //   <Dialog open={open} onClose={handleToClose}>
      //     <DialogTitle>{"Edit your todo"}</DialogTitle>
      //     <DialogContent>
      //       {/* <input type="checkbox" checked="todo.completed" onChange={}/> */}
      //       <label>
      //         Titre :
      //         {' '}
      //         <input type="text" name="editTitle" value={newTodo.title} placeholder={todos.title} onChange={handleChange} />
      //       </label>
      //       {' '}
      //       <label>
      //         Description :
      //         {' '}
      //         <input type="text" name="editDescription" value={newTodo.description} placeholder="une description" onChange={handleChange} />
      //       </label>
      //       {' '}
      //       <label>
      //         Date de fin :
      //         {' '}
      //         <input type="date" name="editDueDate" value={newTodo.dueDate} onChange={handleChange} />
      //       </label>

      //     </DialogContent>
      //     <DialogActions>
      //       <Button onClick={handleToClose}
      //         color="primary" autoFocus>
      //         Close
      //       </Button>
      //     </DialogActions>
      //   </Dialog>
      // </div>
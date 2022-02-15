import { useState } from 'react';

export function Form() {
  const [labels, setLabels] = useState([{ titleLabel: 'label', color: '#FFFFFF' }]);
  const [newLabel, setNewLabels] = useState([{ titleLabel: '', color: '' }]);
  const [todos, setTodos] = useState([{
    id: '1', title: 'foo', completed: true, description: 'bar',
  }]);
  const [newTodo, setNewTodos] = useState([{ title: '', completed: false, description: '' }]);

  const handleChange = (e) => {
    setNewTodos({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleChangeLabel = (e) => {
    setNewLabels({ ...newLabel, [e.target.name]: e.target.value });
  };
  // const handleEdit = (e) => {
    //     setTodos([...todos, { [e.target.name]: e.target.value }])
    // }

  const getCurrentDate = () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return (`${year}-${month < 10 ? `0${month}` : month}-${date}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // this.setNewTodos({
    //    title: '', description: '', dueDate: '', ...newTodo, [e.target.name]: e.target.value
    // })
    { newTodo.createDate = getCurrentDate(); }
    setTodos([...todos, newTodo]);
    setLabels([...labels, newLabel]);
  };

  // const deleteTodo = (event) => {
  //     event.preventDefault();F
  //     const array = setTodos;
  //     const index = array.indexOf(event.target.value);
  //     array.splice(index, 1);
  //     setTodos([...todos, array]);
  // }

  // const toggleChangeCompleted = (completed) => {
  // setTodos(completed, !completed); ??
  //     completed = !completed;
  //     return !completed;
  // Ne convient pas, il faut choisir la ToDo à modifier pour faire un setTodos et appliquer la modif.
  // Faire l'edit d'une todo afin de débloquer mon problème.
  // }

  // const getId = () => {
  //     let id = 0;
  //     console.log('todo' + todos.length);
  //     for (const element of todos) {
  //         console.log('element' + element.id);
  //         if (todos.length === element.id) {
  //             id = element.id + 1;
  //         }
  //     }
  //     console.log('id' + id);
  //     return id
  // }
  // test pour le husky et le git commit
  // Test pour le workflow v2

  return (
    <form onSubmit={handleSubmit}>
      {/* Id : {newTodo.id = Date.now()}{", "} */}
      <label>
        Id :
        {' '}
        <input type="text" name="id" disabled value={newTodo.id = Date.now()} onChange={handleChange} />
      </label>
      {' '}
      <label>
        Label :
        {' '}
        <input type="text" name="titleLabel" value={newLabel.titleLabel} placeholder="un label" onChange={handleChangeLabel} />
      </label>
      <label>
        Choix couleur :
        {' '}
        <input type="color" name="color" value={newLabel.color} onChange={handleChangeLabel} />
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

      <select name="Status" id="Status-select">
        <option value="">Choisit un filtre</option>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>

      <ul>
        {/* {labels.map(labels = <li> {labels.titleLabel}, {labels.color}</li>)} */}
        {todos.map((todos) => (
          <li style={todos.completed ? { textDecoration: 'line-through' } : {}}>
            {' '}
            <b>id :</b>
            {' '}
            {todos.id}
            ,
            {' '}
            <b>Date de création :</b>
            {' '}
            {todos.createDate}
            ,
            {' '}
            <b>title :</b>
            {' '}
            {todos.title}
            ,
            {' '}
            <b>description : </b>
            {todos.description}
            ,
            <b> Date de fin : </b>
            {todos.dueDate}
            {' '}
          </li>
        ))}
        {/* <li><button onClick={deleteTodo()}>Delete</button></li> */}
      </ul>
    </form>
  );
}

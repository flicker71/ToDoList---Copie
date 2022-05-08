import { Modal } from "@material-ui/core";
import React, { useState } from "react";

const Todo = ({ todo, toogleComplete, removeTodo }) => {
    
  const [editedTodo, setEdit] = useState(false);
//   let editedTodo = false;

    // Change le status de mes todos
    const handleCheckBoxClick = () => {
        toogleComplete(todo.id);
    }

    //Supprime une todo
    const handleRemoveTodo = () => {
        removeTodo(todo.id);
    }

    //Ouvre la modal
    const handleOpenModal = () => {
        // editedTodo = true;
        setEdit(true);
    }
    
    //Ferme la modal
    const handleCloseModal = () => {
        // editedTodo = false;
        setEdit(false);
      }
      
    //Récupère les nouvelles valeurs dans le formualire de la modal 
    const handleChange = (e) => {
        setTodos({ ...todo, [e.target.name]: e.target.value });
    };
      
    //Envoie les valeurs au App.js
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(todo);
        // editedTodo = false;
        setEdit(false);
    };

    return (
        <div >
            <li style={todo.completed ? { textDecoration: 'line-through' } : {}}>
                <input type="checkbox" checked={todo.completed} onClick={handleCheckBoxClick} />
                <b>{' '} id : {' '}</b>
                {todo.id}, |
                <b>{' '} tâche à faire : {' '}</b>
                {todo.title}, |
                <b>{' '} description :{' '}</b>
                {todo.description}, |
                <b>{' '} Crée le : {' '}</b>
                {todo.created_at}, |
                <b>{' '} à faire pour le : {' '}</b>
                {todo.dueDate}
            </li>
            <button onClick={handleRemoveTodo}> X </button>
            <button onClick={handleOpenModal}> Edit </button>
            
            {/* Ma modal ne reste pas ouverte,
            je pense que c'est à cause d'un rerender lié à un autre ocmposant mais je n'arrive pas à trouver où exactement...
             */}
            <Modal open={editedTodo} onHide={handleCloseModal}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Titre :
                            {' '}
                            <input type="text" name="title" value={todo.title} placeholder="un titre" onChange={handleChange}/>
                        </label>
                        {' '}
                        <label>
                            Description :
                            {' '}
                            <input type="text" name="description" value={todo.description} placeholder="une description" onChange={handleChange}/>
                        </label>
                        {' '}
                        <label>
                            Date de fin :
                            {' '}
                            <input type="date" name="dueDate" value={todo.dueDate} onChange={handleChange}/>
                        </label>
                    
                        <button type="submit">Edit</button>
                        <br></br>
                    </form>
            </Modal>

            {/* <Dialog maxWidth='lg' open={open} onClose={handleToClose}>
                <DialogTitle>{"Edit your todo"}</DialogTitle>
                <DialogContentText>
                    <label>
                        Titre :
                        {' '}
                        <input type="text" name="editTitle" value={newTodo.title} placeholder={todo.title} onChange={handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Description :
                        {' '}
                        <input type="text" name="editDescription" value={newTodo.description} placeholder={todo.description} onChange={handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Date de fin :
                        {' '}
                        <input type="date" name="editDueDate" value={newTodo.dueDate} placeholder={todo.dueDate} onChange={handleChange} />
                    </label>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleUpdateTodo}
                        color="primary" autoFocus>
                        Save
                    </Button>
                    <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog> */}
        </div>
    );
}

export default Todo;
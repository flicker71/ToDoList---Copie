import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Todo = ({ todo, toogleComplete, removeTodo, updateTodo }) => {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const [newTodo, setNewTodos] = useState([{
        title: '',
        description: '',
        dueDate: '',
    }]);

    const handleCheckBoxClick = () => {
        toogleComplete(todo.id);
    }

    const handleRemoveTodo = () => {
        removeTodo(todo.id);
    }

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };

    const handleUpdateTodo = () => {
        updateTodo(todo.id)
        setOpen(false)
        window.location.reload();  
    }

    const handleChange = (e) => {
        setNewTodos({ ...newTodo, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <li style={todo.completed ? { textDecoration: 'line-through' } : {}}>
                <input type="checkbox" checked={todo.completed} onClick={handleCheckBoxClick} />
                <b>{' '} id : {' '}</b>
                {todo.id}
                <b>{' '} tâche à faire : {' '}</b>
                {todo.title}
                <b>{' '} description :{' '}</b>
                {todo.description}
                <b>{' '} Crée le : {' '}</b>
                {todo.createDate}
                <b>{' '} à faire pour le : {' '}</b>
                {todo.dueDate}
            </li>
            <button onClick={handleRemoveTodo}> X </button>
            <button onClick={handleClickToOpen}> Edit </button>

            <Dialog maxWidth='lg' open={open} onClose={handleToClose}>
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
            </Dialog>
        </div>
    );
}

export default Todo;
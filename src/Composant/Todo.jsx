import React, { useState } from "react";

const Todo = ({ todo, toogleComplete, removeTodo, updateTodo }) => {

    const [open, setOpen] = useState(false);

    const handleCheckBoxClick = () => {
        toogleComplete(todo.id);
    }

    const handleRemoveTodo = () => {
        removeTodo(todo.id);
    }

    const handleEditTodo = () => {
        // editedTodoForm = true;
        // updateTodo(todo.id)
        updateTodo(todo, todo.id);
    }

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
            <button onClick={handleEditTodo}> Edit </button>

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
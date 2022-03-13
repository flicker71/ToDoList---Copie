import React from "react";

const Todo = ({ todo, toogleComplete, removeTodo }) => {

const handleCheckBoxClick = () => {
    toogleComplete(todo.id);
}

const handleRemoveTodo = () => {
    removeTodo(todo.id);
}

    return (
        <div>
            <li style={todo.completed ? { textDecoration: 'line-through' } : {}}>
                <input type="checkbox" onClick={handleCheckBoxClick}/>
                <b>{' '} ib : {' '}</b>
                {todo.id}
                <b>{' '}tâche à faire : {' '}</b>
                {todo.title}
                <b>{' '} description :{' '}</b>
                {todo.description }
                <b>{' '} Crée le : {' '}</b>
                {todo.createDate}
                <b>{' '} à faire pour le : {' '}</b>
                {todo.dueDate}
            </li>
            <button onClick={handleRemoveTodo}> X </button>
        </div>
    );
}

export default Todo;

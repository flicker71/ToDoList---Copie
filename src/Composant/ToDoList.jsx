import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toogleComplete, removeTodo, updateTodo }) => {

    // const { todos } = props
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toogleComplete={toogleComplete} removeTodo={removeTodo} updateTodo={updateTodo} />
            ))}
        </ul>
    )
}

export default TodoList

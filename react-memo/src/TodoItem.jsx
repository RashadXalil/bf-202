import React from 'react'

const TodoItem = ({ todo }) => {
    console.log("todoItem rendered", { todo })
    return (
        <li>{todo}</li>
    )
}

export default TodoItem
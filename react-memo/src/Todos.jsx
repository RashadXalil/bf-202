import React, { memo } from 'react'
import TodoItem from './TodoItem'
const Todos = ({ todos }) => {
    console.log("todos rendered")
    return (
        <ul>
            {
                todos.map((item, index) => {
                    return <TodoItem todo={item} key={index} />
                })
            }
        </ul>
    )
}
export default memo(Todos)
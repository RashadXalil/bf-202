import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggle } from '../redux/todosSlice/todosSlice'

const TodoList = () => {
    const items = useSelector(state => state.todos.items)
    const dispatch = useDispatch()
    return (
        <ul className="todo-list">
            {
                items.map((item, index) => {
                    return (
                        <li key={index} className={`${item.isComplated ? "completed" : ""}`}>
                            <div className="view">
                                <input className="toggle" type="checkbox" onClick={() => {
                                    dispatch(toggle(item.id))
                                }} />
                                <label>{item.title}</label>
                                <button className="destroy" onClick={() => {
                                    dispatch(deleteTodo(item.id))
                                }}></button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList
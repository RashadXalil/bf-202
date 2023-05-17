import classNames from 'classnames'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggle } from '../redux/todoSlide/todosSlice'

const TodoList = () => {
    const items = useSelector(state => state.todos.items)
    const dispath = useDispatch()
    console.log(items)
    return (
        <ul className="todo-list">
            {/*
           <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Learn JavaScript</label>
                    <button className="destroy"></button>
                </div>
            </li>
                        <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Learn React</label>
                    <button className="destroy"></button>
                </div>
            </li>
            <li>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Have a life!</label>
                    <button className="destroy"></button>
                </div>
            </li>
        */}
            {
                items.map((item, index) => {
                    return (
                        <li key={index} className={`${item.complated ? "completed" : ""}`} >
                            <div className="view">
                                <input onClick={() => {
                                    dispath(toggle(item.id))
                                }} className="toggle" type="checkbox" />
                                <label>{item.title}</label>
                                <button className="destroy" onClick={() => {
                                    dispath(deleteTodo(item.id))
                                }}></button>
                            </div>
                        </li>
                    )
                })
            }
        </ul >
    )
}

export default TodoList
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearComplated, activeFilter, complatedFilter, changeActiveFilter, activeItems } from '../redux/todosSlice/todosSlice'
const ContentFooter = () => {
    const items = useSelector(state => state.todos.items)

    const itemsLeft = items.filter(item => !item.isComplated)
    const dispatch = useDispatch()
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemsLeft.length}</strong>
                items left
            </span>
            <ul className="filters">
                <li onClick={(e) => {
                    e.preventDefault()
                    e.target.classList.add("selected")
                    e.target.parentElement.nextElementSibling.firstElementChild.classList.remove("selected")
                    e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.classList.remove("selected")
                    dispatch(changeActiveFilter("All"))
                    dispatch(activeItems())


                }}>
                    <a href="" className='selected'>All</a>
                </li>
                <li onClick={(e) => {
                    e.preventDefault()
                    e.target.classList.add("selected")
                    e.target.parentElement.previousElementSibling.firstElementChild.classList.remove("selected")
                    e.target.parentElement.nextElementSibling.firstElementChild.classList.remove("selected")
                    dispatch(changeActiveFilter("Active"))
                    dispatch(activeItems())

                }}>
                    <a href="" >Active</a>
                </li><li onClick={(e) => {
                    e.preventDefault()
                    e.target.classList.add("selected")
                    e.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.classList.remove("selected")
                    e.target.parentElement.previousElementSibling.firstElementChild.classList.remove("selected")
                    dispatch(changeActiveFilter("Complated"))
                    dispatch(activeItems())
                }}>
                    <a href="">Complated</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => {
                dispatch(clearComplated())
            }}>
                Clear completed
            </button>
        </footer>
    )
}

export default ContentFooter
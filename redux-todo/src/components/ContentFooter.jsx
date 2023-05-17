import React from 'react'
import { useSelector } from 'react-redux'

const ContentFooter = () => {
    const items = useSelector(state => state.todos.items)
    const itemsLeft = items.filter(item => !item.complated)
    console.log(itemsLeft)

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemsLeft.length}</strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className="selected">All</a>
                </li>
                <li>
                    <a href="#/">Active</a>
                </li>
                <li>
                    <a href="#/">Completed</a>
                </li>
            </ul>

            <button className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default ContentFooter
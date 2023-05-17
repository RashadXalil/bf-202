import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlide/todosSlice'

const Form = () => {
    const dispath = useDispatch()
    const inputRef = useRef()
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            dispath(addTodo(inputRef.current.value))
            inputRef.current.value = ""
        }}>
            <input ref={inputRef} className="new-todo" placeholder="What needs to be done?" autoFocus />
        </form>
    )
}

export default Form
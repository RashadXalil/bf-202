import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todosSlice/todosSlice'

const Form = () => {
    const dispatch = useDispatch()
    const inputRef = useRef()
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch(addTodo(inputRef.current.value))
            inputRef.current.value = ""
        }}>
            <input ref={inputRef} className="new-todo" placeholder="What needs to be done?" autoFocus />
        </form>
    )
}

export default Form
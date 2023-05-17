import React, { forwardRef, memo } from 'react'

const AddTodo = forwardRef(function (props, ref) {
    console.log("add todo render olundu")
    return (
        <form onSubmit={props.submitHandler}>
            <input ref={ref} type="text" placeholder='todo ...' />
            <button >Submit</button>
        </form>
    )
})

export default memo(AddTodo)
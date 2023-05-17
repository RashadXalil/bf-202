import React, { forwardRef, memo } from 'react'

const Form = forwardRef(function ({ submitHandler }, ref) {
    console.log("form render olundu")
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            submitHandler()
        }}>
            <input ref={ref} type="text" placeholder='smthng' />
            <button onClick={() => {

            }}>submit</button>
        </form>
    )
})

export default Form
import React, { memo } from 'react'

const Counter = ({ counter, increaseHandler }) => {
    console.log("counter rendered")
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increaseHandler}>Increase</button>
        </div>
    )
}

export default memo(Counter)
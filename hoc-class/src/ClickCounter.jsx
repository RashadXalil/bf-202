import React, { useState } from 'react'
import HOC from './HOC'

const ClickCounter = ({ counter, increaseHandler }) => {
    return (
        <div>
            <p>Click Counter : {counter}</p>
            <button onClick={increaseHandler}>Increase</button>
        </div>
    )
}

export default HOC(ClickCounter)
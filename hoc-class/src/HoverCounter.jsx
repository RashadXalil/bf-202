import React, { useState } from 'react'
import HOC from './HOC'

const HoverCounter = ({ counter, increaseHandler }) => {
    return (
        <div>
            <p>Hover Counter : {counter}</p>
            <button onMouseOver={increaseHandler}>Increase</button>
        </div>
    )
}

export default HOC(HoverCounter)
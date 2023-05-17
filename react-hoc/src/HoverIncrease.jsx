import React, { useState } from 'react'
import WithCounter from './WithCounter'

const HoverIncrease = (props) => {
    const { counter, incrementCounter, name } = props
    return (
        <div>
            <button onMouseOver={incrementCounter}>Hover Increased</button>
            <p>Hover Counter : {counter}</p>
            <p>name:{name}</p>

        </div>
    )
}

export default WithCounter(HoverIncrease)
import React, { useState } from 'react'
import WithCounter from './WithCounter'

const ClickIncrease = (props) => {
    const { counter, incrementCounter, name } = props
    return (
        <div>
            <button onClick={incrementCounter}>Click Increase</button>
            <p>Click Counter :{counter}</p>
            <p>name:{name}</p>
        </div>
    )
}

export default WithCounter(ClickIncrease) 
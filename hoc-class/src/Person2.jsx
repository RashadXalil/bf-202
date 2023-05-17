import React, { useState } from 'react'
import HOC from './HOC'

const Person2 = ({ money, increaseHandler,name }) => {

    return (
        <div>
            <h2>{name}'s offer : {money}$</h2>
            <button onClick={increaseHandler}>Increase</button>
        </div>
    )
}

export default HOC(Person2)
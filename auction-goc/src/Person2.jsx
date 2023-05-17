import React, { useState } from 'react'
import UpdatedComponent from './HOC'

const Person2 = ({ money, setMoney, handleIncrease }) => {

    return (
        <div>
            <h2>John if offering ${money}</h2>
            <button onClick={handleIncrease}>Increase Money</button>
        </div>
    )
}

export default UpdatedComponent(Person2)
import React, { useState } from 'react'
import UpdatedComponent from './HOC'

const Person1 = ({ money, setMoney, handleIncrease }) => {

    return (
        <React.Fragment>
            <h2>Jimmy Offering ${money}</h2>
            <button onClick={handleIncrease}>Increase Money</button>
        </React.Fragment>
    )
}

export default UpdatedComponent(Person1)
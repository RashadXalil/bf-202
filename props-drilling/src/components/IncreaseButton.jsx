import React, { useContext } from 'react'
import { MainContext } from './context'

const IncreaseButton = () => {
    const { counter, setCounter } = useContext(MainContext)
    return (
        <button onClick={() => {
            setCounter(counter + 1)
        }}>
            +
        </button>
    )
}

export default IncreaseButton
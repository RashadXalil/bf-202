import React, { useContext } from 'react'
import { MainContext } from './context'

const Header = () => {
    const { theme, counter } = useContext(MainContext)
    
    return (
        <div>current theme = {theme} counter = {counter}</div>
    )
}

export default Header
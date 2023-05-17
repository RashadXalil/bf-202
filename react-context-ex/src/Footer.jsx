import React, { useContext } from 'react'
import { MainContext } from './context'

const Footer = () => {
    const { theme, setTheme } = useContext(MainContext)
    return (
        <div>{theme}</div>
    )
}

export default Footer
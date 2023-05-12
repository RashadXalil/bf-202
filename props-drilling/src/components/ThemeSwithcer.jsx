import React, { useContext } from 'react'
import { MainContext } from './context'

const ThemeSwithcer = () => {
    const { theme, setTheme } = useContext(MainContext)
    return (
        <button onClick={() => {
            if (theme === "light") {
                setTheme("dark")
                document.body.classList.add("dark")
            }
            else {
                setTheme("light")
                document.body.classList.remove("dark")
            }
        }}>Change Theme</button>
    )
}

export default ThemeSwithcer
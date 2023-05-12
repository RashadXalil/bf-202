import React, { useContext } from 'react'
import ThemeSwithcer from './ThemeSwithcer'
import { MainContext } from './context'
import IncreaseButton from './IncreaseButton'

const Footer = () => {
    const { theme, setTheme } = useContext(MainContext)
    return (
        <React.Fragment>
            <div>footeer</div>
            <ThemeSwithcer />
            <IncreaseButton />
        </React.Fragment>
    )
}

export default Footer
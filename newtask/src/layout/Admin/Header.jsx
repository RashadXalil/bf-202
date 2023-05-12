import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="adminheader">
                <ul>
                    <li>
                        <Link to="dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to='products'>Products</Link>
                    </li>
                    <li>
                        <a href="">Front</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
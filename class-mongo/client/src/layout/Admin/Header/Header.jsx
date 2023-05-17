import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/admin">Dashboard</Link>
                </li>
                <li>
                    <Link to="products">Products</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
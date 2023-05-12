import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/context'

function Header() {
    const { basketItems } = useContext(MainContext)
    let totalPrice = 0;
    for (let i = 0; i < basketItems.length; i++) {
        totalPrice += basketItems[i].unitPrice
    }
    return (
        <>
            <div className="haeder">
                <ul>
                    <li>
                        <Link to="">Home</Link>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <Link to='basket'>Basket</Link>
                    </li>
                    <li>
                        <p>Basket Items:{basketItems.length}</p>
                    </li>
                    <li>
                        Total Price: {totalPrice} AZN
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
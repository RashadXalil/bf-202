import React, { useContext } from 'react'
import { MainContext } from '../../../context/context'
import Card from '../../../components/Site/Card/Card'

const Basket = () => {
    const basketItems = JSON.parse(localStorage.getItem("basket"))
    return (
        <div className='custom__cards' style={{ display: "flex" }}>
            {
                basketItems.map((item, index) => {
                    return <Card item={item} key={index} />
                })
            }
        </div>
    )
}

export default Basket
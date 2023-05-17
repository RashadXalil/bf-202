import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card'
const Cards = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/products").then(res => {
            setData(res.data)
        })
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h1>Products</h1>
                {
                    data.map((item, index) => {
                        return <Card item={item} key={index} />
                    })
                }
            </div>

        </div>
    )
}

export default Cards
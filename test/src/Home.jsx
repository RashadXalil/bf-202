import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => setData(res.data))
    })
    return (
        <div>
            {
                data.map((item, index) => {
                    return <Link to={`/${item.id}`}><div key={index}>{item.name}</div></Link>
                })
            }
        </div>
    )
}

export default Home
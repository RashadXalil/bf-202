import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res => setItem(res.data))
    })
    return (
        <div>{item.name}</div>
    )
}

export default Detail
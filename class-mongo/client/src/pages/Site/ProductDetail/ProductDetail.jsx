import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`).then(res => setData(res.data))
    })
    return (
        <div>{data.name}</div>
    )
}

export default ProductDetail
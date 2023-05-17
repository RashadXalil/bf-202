import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    axios.get(`http://localhost:8080/todos/${id}`).then(res => {
        setItem(res.data)
    })
    return (
        <div>{item.title}</div>
    )
}

export default Detail
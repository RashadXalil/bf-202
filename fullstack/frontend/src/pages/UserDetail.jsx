import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    let { id } = useParams()
    let [item, setItem] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`).then(res => {
            setItem(res.data)
        })
    }, [])
    return (
        <div>
        <h1>{item.name}</h1>
        <img src={`${item.image}`} width={500} height={500} alt="" />
        </div>
    )
}

export default UserDetail
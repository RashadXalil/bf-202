import React, { useEffect, useState } from 'react'
import List from '../components/List'
import axios from 'axios'
import Users from '../components/Users'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/todos").then(res => {
            setData(res.data)
        })
    }, [data])
    return (
        <div>
            <List data={data} />
            <Users />
        </div>
    )
}

export default Home
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Component = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/coins").then(res => console.log(res.data))
    }, [data])
    return (
        <div>Component</div>
    )
}

export default Component
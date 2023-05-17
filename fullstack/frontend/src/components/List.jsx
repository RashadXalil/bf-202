import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
const List = ({ data }) => {
    return (
        <ul>
            {
                data.map((item, index) => {
                    return <Link key={index} to={`/${item.id}`}><li >{item.title} <button onClick={(e) => {
                        e.preventDefault()
                        axios.delete(`http://localhost:8080/todos/${item.id}`).then(res => {
                            console.log(res)
                        })
                    }}>Delete</button></li></Link>
                })
            }
        </ul>
    )
}

export default List
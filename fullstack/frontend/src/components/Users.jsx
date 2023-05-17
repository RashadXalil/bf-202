import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/users").then(res => setUsers(res.data))
    }, [users])
    const addHandler = () => {
        let name = prompt("name:")
        let image = prompt("image:")
        axios.post("http://localhost:8080/users", { name: name, image: image }).then(res => console.log(res))
    }
    return (
        <React.Fragment>
            <button onClick={addHandler}>Add User</button>
            <ul>
                {
                    users.map((user, index) => {
                        return <Link key={index} to={`/users/${user.id}`}><li>{user.name} <button onClick={(e) => {
                            e.preventDefault()
                            axios.delete(`http://localhost:8080/users/${user.id}`).then(res => console.log(res))
                        }}>delete</button> <img src={`${user.image}`} width={100} height={100} alt="" /></li></Link>
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default Users
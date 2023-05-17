import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
    return (
        <div className="col-3">
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.desc}</p>
                    <p className='card-text'>{item.price}</p>
                    <Link class="btn btn-primary" to={`/${item._id}`}>Go detail</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
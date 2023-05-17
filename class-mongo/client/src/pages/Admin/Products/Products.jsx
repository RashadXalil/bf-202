import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import './Products.css'
import { Toaster, toast } from "react-hot-toast"
const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const nameRef = useRef()
    const priceRef = useRef()
    const descRef = useRef()
    useEffect(() => {
        axios.get("http://localhost:8080/products").then(res => {
            setProducts(res.data)
            setLoading(false)
        })
    })
    return (
        <div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <form>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input ref={nameRef} type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input ref={priceRef} type="number" class="form-control" id="price" placeholder="price" />
                            </div>
                            <div class="form-group">
                                <label for="desc">Description</label>
                                <input ref={descRef} type="text" class="form-control" id="desc" placeholder="desc ..." />
                            </div>
                            <button type="submit" class="btn btn-primary mt-3" onClick={async (e) => {
                                e.preventDefault()
                                const newProd = { name: nameRef.current.value, price: priceRef.current.value, desc: descRef.current.value }
                                await axios.post("http://localhost:8080/products", newProd).then(res => {
                                    toast.success("item created")
                                }).catch(err => {
                                    toast.error(err)
                                })
                                nameRef.current.value = ""

                            }}>Submit</button>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <tr style={{ backgroundColor: "white" }}><td id='spinnerTd'>
                            <div class="spinner-border" id='spinner' role="status">
                            </div>
                        </td></tr> : products.map((prod, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{prod._id}</th>
                                    <td>{prod.name}</td>
                                    <td>{prod.price}</td>
                                    <td>{prod.desc}</td>
                                    <td><button className='btn btn-warning'>Edit</button></td>
                                    <td><button onClick={() => {
                                        axios.delete(`http://localhost:8080/products/${prod._id}`).then(res => {
                                            toast.success("item deleted !")
                                        })
                                    }} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <Toaster />
        </div>
    )
}

export default Products
import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => {
            setData(res.data)
        })
    }, [data])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'unitPrice',
            dataIndex: 'unitPrice',
            key: 'unitPrice',
        },
        {
            title: 'quantityPerUnit',
            dataIndex: 'quantityPerUnit',
            key: 'quantityPerUnit',
        },
    ];
    return (
        <Table dataSource={data} columns={columns} />
    )
}

export default Products
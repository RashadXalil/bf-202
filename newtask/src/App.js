
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routes/route';
import { MainContext } from './context/context';
import { useEffect, useState } from 'react';
import axios from 'axios';
const router = createBrowserRouter(ROUTES);

function App() {
    const basket = JSON.parse(localStorage.getItem("basket"))
    const [basketItems, setBasketItems] = useState(basket)
    console.log(basketItems)
    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then((res) => {
            setDatas(res.data)
        })
    }, [datas])

    const data = {
        basketItems,
        setBasketItems,
        datas,
        setDatas
    }
    return (
        <MainContext.Provider value={data}>
            <RouterProvider router={router} />
        </MainContext.Provider>
    )
}

export default App;

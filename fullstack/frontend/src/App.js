import './App.css';
import { useEffect, useState } from "react"
import axios from "axios"
import List from './components/List';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Detail from './pages/Detail';
import UsersPage from './pages/UsersPage';
import UserDetail from './pages/UserDetail';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<Detail />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/users/:id' element={<UserDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

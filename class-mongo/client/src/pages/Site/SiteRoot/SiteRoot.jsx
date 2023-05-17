import React from 'react'
import Header from '../../../layout/Site/Header/Header'
import { Outlet } from "react-router-dom"
import Footer from '../../../layout/Site/Footer/Footer'
const SiteRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default SiteRoot
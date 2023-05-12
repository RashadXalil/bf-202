import React from 'react'
import Header from '../../../layout/Site/Header'
import { Outlet } from 'react-router'
import Footer from '../../../layout/Site/Footer'

function SiteRoot() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default SiteRoot
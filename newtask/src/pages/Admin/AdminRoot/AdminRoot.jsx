import React from 'react'
import Header from '../../../layout/Admin/Header'
import { Outlet } from 'react-router'

function AdminRoot() {
  return (
    <>
    <Header />
    <Outlet />
    
    </>
  )
}

export default AdminRoot
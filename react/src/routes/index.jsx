import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import { useAuth } from '../contexts'

const ProtectedRoute = ({ redirectTo }) => {
    // const { user } = useAuth()
  return <Navigate to={redirectTo} />
}

export default ProtectedRoute



// user ? <Outlet /> : 

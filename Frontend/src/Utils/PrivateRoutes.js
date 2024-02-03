import React from 'react'
import { useIsAuthenticated } from 'react-auth-kit'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
const isAuthenticated = useIsAuthenticated()
  return (
    isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes
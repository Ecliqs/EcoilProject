import React from 'react'
import { useIsAuthenticated } from 'react-auth-kit'
import { Navigate, Outlet } from 'react-router-dom'

function PublicRoutes() {
const isAuthenticated = useIsAuthenticated()
  return (
    isAuthenticated() ? <Navigate to="/dashboard" /> : <Outlet />
  )
}

export default PublicRoutes
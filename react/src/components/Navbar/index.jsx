import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <main className="navbar">
        <header>
            <nav>
                <NavLink to="/">Clicker</NavLink>
                <NavLink to="/getter">Getter</NavLink>
            </nav>
        </header>
    </main>
    <Outlet />
    </>
  )
}

export default NavBar

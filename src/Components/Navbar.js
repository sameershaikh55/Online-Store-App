import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.2)" }} activeClassName="active_page" exact to="/"> Home </NavLink>
            <NavLink style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.2)" }} activeClassName="active_page" exact to="/product"> Product </NavLink>
            <NavLink style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.2)" }} activeClassName="active_page" exact to="/about"> About </NavLink>
            <NavLink style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.2)" }} activeClassName="active_page" exact to="/contact"> Contact </NavLink>
        </div>
    )
}

export default Navbar

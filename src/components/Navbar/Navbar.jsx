import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
          BI<span>KE</span>
          </div>
        <div><input className='search' type='text' placeholder='type here to search...'></input></div>
        <div className='menu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
            <li><NavLink to="/home"> HoMe</NavLink></li>
            <li><NavLink to="/dash" className='dashbord'>DashBoard</NavLink></li>
            <li><NavLink to="/card">
            CarT
            </NavLink></li>
            <li><NavLink><button className='btn'>logout</button></NavLink></li>
        </ul>

    </nav>
  )
}

export default Navbar
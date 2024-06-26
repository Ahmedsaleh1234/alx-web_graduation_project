import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import icon from '../assets/icones/cart_icon.png'
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
            <img src={icon} alt="" />
            </NavLink></li>
            <li><NavLink to='/auth'><button className='btn'>Sign Up</button></NavLink></li>
        </ul>

    </nav>
  )
}

export default Navbar
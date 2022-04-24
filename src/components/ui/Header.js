import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src={logo} alt={logo} /> 
      <ul className='links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li style={{borderRadius:"25px", backgroundColor: "#FF8832;"}}><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  )
}

export default Header
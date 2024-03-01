import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <header>
        <div className='logo'>
            <Link to="/">Logo</Link>
        </div>
        <nav>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
            
        </nav>
    </header>
  )
}

export default Navigation
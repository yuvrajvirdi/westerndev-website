import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar() {

  return (
    <div className='navbar-container'>
        <div className='logo'>
            <Link to='/'>
            <img src='images/logo.png'></img>
            </Link>
        </div>
        <div className="links-container">
         <ul>
        <li>
            <Link to="/Contact">contact us</Link>
        </li>
         <li>
            <Link to="/Portfolio">portfolio</Link>
        </li>
         <li>
            <Link to="/Sponorships">sponsorships</Link>
        </li>
        <li>
            <Link to="/AboutUs">about us</Link>
        </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar

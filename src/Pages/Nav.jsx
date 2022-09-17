import React from 'react'
import {NavLink,Link} from "react-router-dom"

function Nav() {
  return (
    <div>
      <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <div id="logo">
        <h1>
          <Link to="/">
            <span>e</span>Startup
            </Link>
        </h1>
        
        <a href="index.html"><img src="Assests/img/logo.png" alt="" title="" /></a>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
          <NavLink  className="nav-link scrollto "  to="/">Home</NavLink>
           
          </li>
          <li>
          <NavLink  className="nav-link scrollto"  to="/About">about</NavLink>
           
          </li>
          <li>
          <NavLink  className="nav-link scrollto"  to="/Feature">Feature</NavLink>
           
          </li>
          <li>
          <NavLink  className="nav-link scrollto"  to="/Screenshot">Screenshot</NavLink>
           
          </li>
          <li>
          <NavLink  className="nav-link scrollto"  to="/Teams">Team</NavLink>
           
          </li>
          
          <li>
          <NavLink  className="nav-link scrollto"  to="/Contact">Contact</NavLink>
            
          </li>
          <li>
          <NavLink  className="nav-link scrollto"  to="/Cart" ><i class="bi bi-cart-fill bi-6x" style={{fontSize: 30}}></i></NavLink>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
    </div>
  )
}

export default Nav

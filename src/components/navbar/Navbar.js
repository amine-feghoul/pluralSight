import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar-container">
             <a className="brand-logo"></a>
            <div className="nav-links-wrapper">
               
                <ul className="nav-links-list"> 
                    <li className="nav-link"> <a> Platform</a> </li>
                    <li className="nav-link"> <a> Products</a> </li>
                    <li className="nav-link"> <a> Resources</a> </li>
                    <li className="nav-link"> <a> For Individuals</a> </li>
                    <li className="nav-link"> <a> For Individuals</a> </li>
                </ul>
            </div>
            <div className="navbar-search-sign-in">
                <ul className="search-sign-in-list">
                    <li className="search-sign-in-item"><i className="fas fa-search"></i></li>
                    <li className="search-sign-in-item"> <a>Sign in</a></li>
                    <li className="search-sign-in-item"> <a className="try-for-free-btn"> try for free</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

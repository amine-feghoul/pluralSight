import React,{useState} from 'react'
import './Navbar.css'
function Navbar() {
    const [click,setClick]=useState(false)
    const handleClick=()=>{
        setClick(!click)
    }
    return (
        <>
        <div className="navbar-container">
             <a className="brand-logo" href="/"><img src="/" alt=""/></a> 
            <div className="nav-links-wrapper">
               
                <ul className="nav-links-list"> 
                    <li className="nav-link"> <a href="/#" > Platform</a> </li>
                    <li className="nav-link"> <a href="/#"> Products</a> </li>
                    <li className="nav-link"> <a href="/#"> Resources</a> </li>
                    <li className="nav-link"> <a href="/#"> For Individuals</a> </li>
                </ul>
            </div>
            <div className="navbar-search-sign-in">
                <ul className="search-sign-in-list">
                    <li className="search-sign-in-item"><i className="fas fa-search"></i></li>
                    <li className="search-sign-in-item"> <a href="/">Sign in</a></li>
                    <li className="search-sign-in-item"> <a href="/" className="try-for-free-btn"> try for free</a></li>
                    
                </ul>
  
            </div>
        </div>
        <div className="navbar-container-mobile">
        <a className="brand-logo" href="/"><img src="/" alt=""/></a> 
            <div className="nav-links-wrapper">
               
                <ul className={click? "nav-links-list active": "nav-links-list"}> 
                    <li className="nav-link"> <a href="/#" > Platform</a> </li>
                    <li className="nav-link"> <a href="/#"> Products</a> </li>
                    <li className="nav-link"> <a href="/#"> Resources</a> </li>
                    <li className="nav-link"> <a href="/#"> For Individuals</a> </li>
                    <li className="search-sign-in-item"> <a href="/">Sign in</a></li>
                    <li className="search-sign-in-item"> <a href="/" className="try-for-free-btn"> try for free</a></li>
                </ul>
            </div>
            <div className="navbar-search-sign-in">
                <ul className="search-sign-in-list">
                    <li className="search-sign-in-item"><i className="fas fa-search"></i></li>                    
                    <a onClick={handleClick}><i className={click? "fas fa-times":"fas fa-bars"}></i></a>
                </ul>
               
            </div>
        </div>
        </>
    )
}

export default Navbar

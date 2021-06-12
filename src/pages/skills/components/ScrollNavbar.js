import React,{useState} from 'react'
import './ScrollNavbar.css'

function ScrollNavbar() {
    const  [click,setClick]=useState(false)
    const handleClick=()=>{
        setClick(!click)
    }
    return (
        <div className="scroll-navbar-container">
            <div className="scroll-navbar-wrapper">
                <a className="scroll-navbar-mobile-title" onClick={handleClick}>Skills <i className="fas fa-chevron-down"> </i></a>
                <ul className={click? "scroll-navbar-links-list mobile-active": "scroll-navbar-links-list"}> 
                    <li><a className="scroll-navbar-link">coures library</a></li>
                    <li><a className="scroll-navbar-link">Skill features</a></li>
                    <li><a className="scroll-navbar-link">Roi</a></li>
                    <li><a className="scroll-navbar-link">Pricing</a></li>

                </ul>
            </div>
        </div>
    )
}

export default ScrollNavbar



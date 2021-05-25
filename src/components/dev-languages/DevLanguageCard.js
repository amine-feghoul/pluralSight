import React from 'react'
import './DevLanguageCard.css'
import image from '../../images/programming_icons/python.png'
function DevLanguageCard() {
    return (
        <div className="dev-language-card-container">
            <div className="dev-language-card-wrapper">
                <img className="dev-language-icon" src={image}/>
                <h3 className="dev-lang-card-path">PATH</h3>
                <h1 className="dev-lang-card-lang-name"> JavaScript</h1>
                <h2 className="dev-lang-card-num-of-courses"> 11 <span>Courses</span></h2>
                <h2 className="take-a-look">Take a look<i className="fas fa-angle-right"></i></h2> 
                </div>          
        </div>
    )
}

export default DevLanguageCard

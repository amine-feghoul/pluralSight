import React from 'react'
import cardPic from "../../images/latest_features/certification.png"
import "./LatestFeatuersCard.css"
function LatestFeaturesCard() {
    return (
        <div className="latest-features-card-container">
            <div className="latest-features-card-wrapper">
                <img src={cardPic}/>
                <h1> emprower your reams to grow their skills and their careers</h1>

                <p> Prepare your team for certification exams with our expert authored content and practice exams.</p>
                <a> Learn more <i className="fas fa-angle-right"/></a>
            </div>
        </div>
    )
}

export default LatestFeaturesCard

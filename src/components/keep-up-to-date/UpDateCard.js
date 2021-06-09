import React from 'react'
import './UpDateCard.css'
function UpDateCard(props) {
    return (
        <div className="up-date-card-container">
            <div className="up-date-card-wrapper">
                <div className="up-date-card-pic">
                    <img src={props.src} alt={props.img_alt}/>
                </div>
                <div className="up-date-card-text">
                    <h3>GUIDE: NAVIGATING BETWEEN WATERFALL AND AGILE</h3>
                    <p>
Make the move without getting stuck in the wagile trap.</p>
                </div>
            </div>
        </div>
    )
}

export default UpDateCard

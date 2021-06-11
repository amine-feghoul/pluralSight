import React from 'react'
import UpDateCard from './UpDateCard'
import './KeepUpToDate.css'

import img1 from "../../images/keep_up_to_date/keep_up_to_date_img1.jpg"
import img2 from "../../images/keep_up_to_date/keep_up_to_date_img2.jpg"
import img3 from "../../images/keep_up_to_date/keep_up_to_date_img3.jpg"
import img4 from "../../images/keep_up_to_date/keep_up_to_date_img4.jpg"

import vmwarelogo from '../../images/keep_up_to_date/vmware-logo.png'
import scalingUpPic from '../../images/keep_up_to_date/scaling-up-pic.png'
function KeepUpToDate() {
    return (
        <div>
        <div className="keep-up-to-date-container">
            <h3 className="keep-up-to-date-title">Keep Up To Date</h3>
            <h1 className="keep-up-to-date-ultra-title"> Discover more about Pluralsight</h1>
            <div className="keep-up-to-date-wrapper">
                <UpDateCard src={img1} alt="img"/>
                <UpDateCard src={img2} alt="img"/>
                <UpDateCard src={img3} alt="img"/>
                <UpDateCard src={img4} alt="img"/>
            </div>

            </div>
                    <div className="scaling-up-container">
                    <div className="scaling-up-wrapper">
                        <div className="scaling-up-pic">
                            <img src= {scalingUpPic} />
                        </div>
                        <div className="scaling-up-text">
                            <img className="vmware-logo" src={vmwarelogo} alt="vmware-logo"/>
                            
                            <h3 className="scaling-up-title">Winning the talent war with a scalable tech skills platform</h3>
                            <p>Evolving a 20-year-old company, increasing innovation and accelerating time to delivery requires fresh skills. See how VMware’s globally dispersed teams use Pluralsight to leverage the latest developments in technology as they find new ways to serve customers.</p>
                            <a className="scaling-up-btn">How they're skilling up</a>
                        </div></div>
                    </div></div>
    )
}

export default KeepUpToDate

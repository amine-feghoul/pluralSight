import React from 'react'
import './LatestFeatures.css'
import logo_skills from'../../images/latest_features/logo-skills.png'
import cloud_labs from '../../images/latest_features/cloud-labs.png'
import LatestFeaturesFLex from './LatestFeaturesFLex'
function LatestFeatures() {
    return (
        <div className="latest-features-container"> 
        <div>
                <h3 className="see-what-new"> see what's new</h3>
                <h2 className="latest-features-title">our latest features</h2>
            <div className="latest-features-wrapper">
                <div className="latest-features-text">
                <img src={logo_skills} className="skills-logo"/>

                <div className="skills">
                    <h2>Create better cloud outcomes with <br/> hands-on experience</h2>
                    <p>Your teams need the right skills and a place to practice to ensure they’re ready to deliver on your cloud objectives. Labs enable learners to get hands-on practice in a provisioned cloud environment in AWS, Azure and Google Cloud (Google Cloud powered by Quiklabs).</p>
                   
                </div>    
                <a>Learn more <i className="fas fa-angle-right"></i></a>
        </div> 
             <div className="latest-featues-pic">
                    <img src={cloud_labs} />
                </div>
            </div>
            </div>
            <LatestFeaturesFLex/>
        </div>
    )
}

export default LatestFeatures

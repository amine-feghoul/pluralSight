import React from 'react'
import LatestFeaturesCard from './LatestFeaturesCard'
import './LatestFeaturesFlex.css'
function LatestFeaturesFLex() {
    return (
        <div className="leatest-features-flex-container">
            <div className="latest-features-flex-wrapper">
                <LatestFeaturesCard/>
                <LatestFeaturesCard/>
                <LatestFeaturesCard/>
            </div>
            
        </div>
    )
}

export default LatestFeaturesFLex

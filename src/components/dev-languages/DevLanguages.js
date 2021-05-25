import React from 'react'
import DevLanguageCard from './DevLanguageCard'
import './DevLanguages.css'
function DevLanguages() {
    return (
        <div className="dev-languages-container">
            <div className="dev-languages-wrapper">
            <div className="dev-languages-grid">
                <DevLanguageCard/>
                <DevLanguageCard/>

                <DevLanguageCard/>
                <DevLanguageCard/>
        </div>
            <div className="trending-technologies"> 
                
                <h5 className="trending-technologies-title"> trending technologies</h5>

                <h3 className="trending-technologies-title-ultra">Popular topics <br/>To learn now </h3>
                <p className="trending-technologies-text">Not sure what technologies to focus on? The Technology Index ranks 850+ technologies by their relative popularity. See what’s topping the charts and get recommended courses to skill up. </p>

                <a>view the index <i className="fas fa-angle-right"></i> </a>
</div>
           </div>
        </div>
    )
}

export default DevLanguages

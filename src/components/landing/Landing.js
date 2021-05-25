import React from 'react'
import './Landing.css'
import Word from './Word'
function Landing() {
    return (
        <div className="landing-container">
            <div className="landing-space-holder"></div>
            <div className="landing-content">
                <h1>build better  <Word/>  </h1>
                <p> Your customers won’t settle and neither should you. With Pluralsight, technology teams know more and work better together. Develop the skills you need for your top priorities. Improve workflows with actionable data. Build better—every time.</p>             
                <div className="landing-btns" >
                    <a className="black-btn">view plans</a>
                    <a className="transparent-btn">Try for Free</a>
                </div>
            </div>

        </div>
    )
}

export default Landing

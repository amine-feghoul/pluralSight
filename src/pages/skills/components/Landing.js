import React from 'react'
import './Landing.css'
import skillsLogo from "../../../images/latest_features/logo-skills.png"
import borderPic from "../../../images/skill_page/skills_landing_border.png"
function Landing() {
    return (
        <div className="skills-landing-container">
            <div className="skills-landing-wrapper">
                <div className="skills-landing-pics">
                <img className="skills-logo" src={skillsLogo}/>
                <img className="skills-landing-border" src={borderPic}/>
                </div>
                <div className="skills-landing-text">
                    <h1>Where technology teams
build better skills, faster</h1>
<p>Technology teams are only as successful as their skills are relevant. With access to expert-authored courses and content, skill assessments and analytics, Pluralsight Skills gives you the most effective path to building business-critical skills.</p>

<a> try for free</a>
                </div>
            </div>
        </div>
    )
}

export default Landing

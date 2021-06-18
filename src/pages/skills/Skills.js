import React from 'react'
import Landing from './components/Landing'
import ScrollNavbar from './components/ScrollNavbar'
import './Skills.css'
import CourseLibrary from './components/CourseLibrary'
function SKills() {
    return (
        <div className="skills-page-container">
            <Landing/>
            <ScrollNavbar/>
            <CourseLibrary/>
        </div>
    )
}

export default SKills

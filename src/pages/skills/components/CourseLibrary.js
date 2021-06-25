import React from 'react'
import './CourseLibrary.css'
import courseLibraryPic from '../../../images/skill_page/course_library.png'
import CompareLibraries from './CompareLibraries'
function CourseLibrary() {
    return (
        <div className="course-library-container">
            <div className="course-library-wrapper">
                <div className="course-library-title">
                    <h3 className="small-title">THE TECHNOLOGY SKILLS PLATFORM</h3>
                    <h1 className="big-title">Empower employees to build their skills</h1>
                </div>
                <div className="course-library-content">
                    <div className="course-library-content-pic">
                         <img src={courseLibraryPic}/>   
                    </div>
                    <div className="course-library-content-text">
                    <h3 className="course-library-content-title"> course library</h3>
                    <h1>Feel confident your team is learning from the industry’s best</h1>
                    <p>Upskill your team with courses on the most in-demand technology topics, taught by the experts who know them best.</p>
                    <ul>
                        <div className="skills-fields">
                        <li><i className="fas fa-check"></i> Software Development</li>
                        <li><i className="fas fa-check"></i> Machine Learning & AI</li>
                        <li><i className="fas fa-check"></i> IT Ops</li>
                        </div>
                        <div className="skills-fields">
                        <li><i className="fas fa-check"></i>Data Professional</li>
                        <li><i className="fas fa-check"></i>Information & Cybersecurity</li>
                        <li><i className="fas fa-check"></i>Cloud computing</li>
                            
                        </div>
                    </ul>
                </div>
             
            </div>
            <CompareLibraries/>
            
            </div>   
        </div>
    )
}

export default CourseLibrary

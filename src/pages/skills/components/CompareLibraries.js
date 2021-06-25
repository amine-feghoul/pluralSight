import React from 'react'
import dots from '../../../images/skill_page/dots.png'
function CompareLibraries() {
    return (
        <div className="compare-libraries-container">
            <h1 className="compare-libraries-title">compare our libraries</h1>
            <div className="compare-libararies-wrapper">
                <div className="compare-libraries-content-div">
                    <h1>Core library</h1>
                    <p>Our core library features 2,500+ of our most-popular courses on in-demand topics like cloud, data, security, software development, infrastructure and more.</p>   
                    <h3 className="italic-text">*Available in our starter plan</h3>
                </div>
                <div className="compare-libraries-content-div">
                    <h1>Expanded library </h1>
                    <p> Our expanded library gives you access to our full 7,000+ course library. It includes more advanced topics if you need to build deep expertise and niche topics for those tackling special projects.</p>   
                    <h3 className="italic-text">*Available in our professional and enterprise plans </h3>
                </div>
            </div>
            <div className="explore-libraries-btn-container">
                 <div className="explore-libraries-btn">
                
                     <h2> Explore our expansive library of expert-authored courses</h2>
                     <a href="" className="explore-black-btn"> browse our course libraries</a>
                 </div>
            </div>
        </div>
    )
}

export default CompareLibraries

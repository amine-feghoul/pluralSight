import React from 'react'
import DevLanguages from '../components/dev-languages/DevLanguages'
import Landing from '../components/landing/Landing'
import LatestFeatures from '../components/latest-features/LatestFeatures'
import Navbar from '../components/navbar/Navbar'

function HomePage() {
    return (
        <div >
            <Landing/>
            <DevLanguages/>
            <LatestFeatures/> 
            {/* {alert("hi")} */}
        </div>
    )
}

export default HomePage

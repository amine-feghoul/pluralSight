import React from 'react'
import DevLanguages from '../components/dev-languages/DevLanguages'
import KeepUpToDate from '../components/keep-up-to-date/KeepUpToDate'
import Landing from '../components/landing/Landing'
import LatestFeatures from '../components/latest-features/LatestFeatures'


function HomePage() {
    return (
        <div >
            <Landing/>
            <DevLanguages/>
            <LatestFeatures/> 
            <KeepUpToDate/>
        </div>
    )
}

export default HomePage

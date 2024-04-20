import React from 'react'
import AlittleAboutMe from './AlittleAboutMe'
import SpecializeContent from '../IspecializeIn/SpecializeContent'
import Treat from '../Treat/Treat'
import Exp from '../Exp/Exp'
import FeaturedReview from '../FeaturedReview/FeaturedReview'

const Content1 = () => {
    return (
        <>
        <div className="column1">
            <AlittleAboutMe />
            <SpecializeContent />
            <Treat />
            <Exp />
            <FeaturedReview />
        </div>
        </>

        
    
    )
}

export default Content1
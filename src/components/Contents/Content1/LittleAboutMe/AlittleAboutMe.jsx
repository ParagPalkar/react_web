import React from 'react'
import ContentDisplay from '../LittleAboutMe/ContentDisplay'

const AlittleAboutMe = () => {
  return (
    <>
    <div className="AliitleAboutMe">

            <div className="detail-header">
                <p className="header-text">A Little About Me</p>
                <button className='login' >Follow</button>
            </div>

            <ContentDisplay />
    </div>
    </>
        
  )
}

export default AlittleAboutMe
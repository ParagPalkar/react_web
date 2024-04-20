import React from 'react'
import Review from './Review'

const FeaturedReview = () => {
  return (
    <>
        <div className="AliitleAboutMe specialize">
            <div className="detail-header specialize">
                <p className="header-text">Featured Reviews (102)</p>                
            </div>

            <Review />
            <Review />
        </div>
    </>
  )
}

export default FeaturedReview
import React from 'react'

const Review = () => {
  return (
    <>
        <div className="content-display">
            <div className="bgbox">

        <div className="clg">
                <div className="clgname">
                    <img src="src/public/reviewpic.png" alt="College" />
                    <div className="clgtext">

                        <p className="clgtitle">Alicent Hightower Clinic</p>
                        <p className="clgsub">Consulted for Skin care</p>
                    </div>

                </div>
                    <p className="clgsub">20 January 2023</p>
            </div>

            <div className="str">
                <img src="src/public/stars.png" alt="stars" />
                <p className="reviewinfo">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Review
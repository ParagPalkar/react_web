import React from 'react'

const Appoinment = () => {

    const followingData = [
        { title: 'Followers', data: '850' },
        { title: 'Following', data: '18K' },
        { title: 'Posts', data: '250' },
    ]

    return (
        <>
            <div className="container-profile">

                <div className="book-container">
                    <div className="upper-container">

                    </div>
                    <div className="lower-container">
                        <div className="parent-profile-container">
                            <div className="profile">
                                
                                <img src="public/Ellipse 727.png" alt="profilepic" className="profilepic" />
                                
                                <div className="profiledetails">
                                    <div className="titleflex">
                                        <p className="ptitle">Dr. Bruce Willis</p>
                                        <img src="public/blue.png" alt="" />
                                    </div>
                                
                                        <p className="gyn">Gynecologist</p>

                                    <div className="stars">
                                        <p className="str">4.5</p>
                                        <img src="public/stars.png" alt="" />
                                    </div>    
                                </div>
                            </div>

                            <div className="following-cont">
                                <div className="fcont">
                                    <p className="ftitle">Followers</p>
                                    <p className="data">850</p>
                                </div>
                                <div className="fcont">
                                    <p className="ftitle">Following</p>
                                    <p className="data">18k</p>
                                </div>
                                <div className="fcont">
                                    <p className="ftitle">Posts</p>
                                    <p className="data">150</p>
                                </div>
                            </div>

                            <div className="booking">
                                <p>Book an Appointment</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Appoinment
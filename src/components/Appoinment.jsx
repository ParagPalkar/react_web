import React from 'react'

const Appoinment = () => {

    const followingData = [
        { title: 'Followers', data: '850' },
        { title: 'Following', data: '18K' },
        { title: 'Posts', data: '250' },
    ]

    return (
        <>
            <div className="book-container">
                <div className="upper-container">

                </div>
                <div className="lower-container">
                    <div className="profile">

                        <img className='profile-pic' src="public\Ellipse 727.png" alt="profile_pic" />
                        <div className="profile-details">
                            <p className="pname">Dr. Bruce Willis <box-icon name='badge-check' type='solid' color='#1a44eb' ></box-icon></p>  
                            <p className="prof">Gynecologist</p>
                            <p className="stars">4.5 
                            <box-icon name='star' type='solid' color='#f79624' ></box-icon>
                            <box-icon name='star' type='solid' color='#f79624' ></box-icon>
                            <box-icon name='star' type='solid' color='#f79624' ></box-icon>
                            <box-icon name='star' type='solid' color='#f79624' ></box-icon>
                            </p> 
                        </div>
                    </div>

                        <div className="following-data">

                            {
                                followingData.map((item, index) => (
                                    <>
                                        <div key={index} className="databox">

                                            <p className="ftitle">{item.title}</p>
                                            <p className="fdata">{item.data}</p>
                                        </div>
                                    </>
                                ))
                            }
                        </div>

                        <button className='signup' >Book an Appointment</button>

                    </div>
                </div>
        </>
    )
}

export default Appoinment
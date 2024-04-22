import React from 'react'

const DoctorCard = () => {
    return (
        <div className="DoctorCard">
            <div className="DocContent">
                <img src="src/public/Doc.png" alt="" />
                <div className="badge">
                    <p className="badgetext">
                        4.5
                    </p>
                </div>

                <p className="drtitle">
                    Dr. Prerna Narang
                </p>

                <div className="drdetail_container">
                    <div className="drdetail">
                        <img src="src/public/1.png" alt="1" />
                        <p className="drdetail_txt">Male-Female Infertility</p>
                    </div>
                    <div className="drdetail">
                        <img src="src/public/2.png" alt="1" />
                        <p className="drdetail_txt">7 Years of Experience</p>
                    </div>
                    <div className="drdetail">
                        <img src="src/public/3.png" alt="1" />
                        <p className="drdetail_txt">Speaks: English, Hindi, Marathi</p>
                    </div>
                </div>

                <div className="consult_container">


                    <div className="consult_flex">
                        <p className='ctext'>Video Consultation</p>
                        <p className="price">₹800</p>
                    </div>
                    <div className="consult_flex">
                        <p className='ctext'>Chat Consultation</p>
                        <p className="price">Free</p>
                    </div>
                </div>

                <div className="viewbtn">
                    View Profile
                </div>
                <div className="viewbtn book">
                    Book a consultation
                </div>
            </div>
        </div>
    )
}

export default DoctorCard
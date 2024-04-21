import React from 'react'
import Location from './Location'
import Doctor from './Doctor'

const Hero = () => {
  return (
    <>
        <div className="hero">
            <div className="hero-text">
                <p className="htext">
                    Find Expert Doctors For An In-Clinic Session Here
                </p>
                <div className="inputs">

                <div className="herointput">
                    <Location />
                </div>
                <div className="doctorinput">
                    <Doctor />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
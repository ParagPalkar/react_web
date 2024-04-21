import React from 'react'
import Fee from './Fee'
import Sessions from './Sessions'
import Weekdays from './Weekdays'
import Time from './Time/Time'
import WeekCrousel from './WeekCrousel'

const Content2 = () => {
  return (
    <div className="content2">
        <div className="content2_border">
      <div className="display-area">


        <Fee />
        
        <p className="text">Select your mode of session</p>
        
        <Sessions />
        
        <div className="timehead">
          <p className="text">Pick a time slot</p>
          <img src="public/cal.png" alt="cal" />
        </div>

        {/* <Weekdays /> */}
          <WeekCrousel />

        <Time />

        <p className="fee apmnt">Make An Appointment</p>

        </div>
      </div>
    </div>
  )
}

export default Content2
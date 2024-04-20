import React from 'react'
import TimeDiv from './TimeDiv';

const Time = () => {
    const morning = [
        {time : '9:00 AM', selected : 0},
        {time : '9:30 AM', selected : 0},
        {time : '10:00 AM', selected : 0},
        {time : '10:10 AM', selected : 0},
        {time : '10:15 AM', selected : 0},
        {time : '10:45 AM', selected : 1},
    ];

    const evening = [
        {time : '4:00 PM', selected : 0},
        {time : '4:10 PM', selected : 0},
        {time : '4:30 PM', selected : 1},
        {time : '4:45 PM', selected : 0},
    ];


  return (
    <>
    <div className="timecontainer">
        <p className="timetag">Morning</p>
        <TimeDiv time={morning} />
        <p className="timetag">Evening</p>
        <TimeDiv time={evening} />

    </div>
    </>
  )
}

export default Time
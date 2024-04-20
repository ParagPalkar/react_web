import React from 'react'

const Sessions = () => {
  return (
    <div className="sessions">
        <div className="sessionone">
            <p className="primary">In-Clinic</p>
            <p className="secondary">45 mins</p>
        </div>
        <div className="sessionone selected">
          <div className="tickline">

            <p className="primary">In-Clinic</p> 
            <img className='tick' src="public/tick.png" alt="tick" />
          </div>
            <p className="secondary">45 mins</p>
        </div>
        <div className="sessionone">
            <p className="primary">In-Clinic</p>
            <p className="secondary">45 mins</p>
        </div>
    </div>
  )
}

export default Sessions
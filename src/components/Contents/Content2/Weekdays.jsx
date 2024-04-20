import React from 'react'

const Weekdays = () => {
  return (
    <div className="week-container">
        <img style={{padding : '5px'}} src="public/left.png" alt="arrow" />
        <div className="sessionone selected">
            <p className="primary ">Mon, 10 Oct</p>
            <p className="secondary">10 Slots</p>
        </div>
        <div className="sessionone">
            <p className="primary">Tue, 11 Oct</p>
            <p className="secondary">11 Slots</p>
        </div>
        <div className="sessionone">
            <p className="primary">Wed, 12 Oct</p>
            <p className="secondary">12 Slots</p>
        </div>
        <img style={{padding : '5px'}} src="public/right.png" alt="arrow" />
    </div>
  )
}

export default Weekdays
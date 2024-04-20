import React from 'react'

const TimeDiv = ({ time }) => {


    return (
        <>
            <div className="timediv">
                {
                    time.map((item, i) => (
                        <>
                            <div key={i}
                                style={item.selected ?
                                    { backgroundColor: '#3A643B', color: 'white' } :
                                    { backgroundColor: null }}
                                className="tchip">
                                <p className="time">{item.time}</p>
                            </div>

                        </>
                    ))
                }

            </div>

        </>
    )
}

export default TimeDiv
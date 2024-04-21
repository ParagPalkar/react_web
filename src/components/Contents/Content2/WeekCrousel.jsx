import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

  
const WeekCrousel = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const weekdays = [
        {day : 'Mon', slots : '10 Slots', selected : 0},
        {day : 'Tue', slots : '11 Slots', selected : 1},
        {day : 'Wed', slots : '16 Slots', selected : 0},
        {day : 'Thur', slots : '8 Slots', selected : 0},
        {day : 'Fri', slots : '7 Slots', selected : 0},
        {day : 'Sat', slots : '6 Slots', selected : 0},
        {day : 'Sun', slots : '5 Slots', selected : 0},
    ]  
    
  return (
   <>
    <Carousel 
    focusOnSelect={true}
  ssr={true} // means to render carousel on server-side.
    infinite={true}    
    swipeable={true}
    autoPlay={true}
    autoPlaySpeed={2000}
    responsive={responsive}>

        {
            weekdays.map((week,i)=>(
                <>
                    
    <div key={i} className={week.selected ? 'sessionone selected' : 'sessionone'}>
            <p className="primary ">{week.day}</p>
            <p className="secondary">{week.slots}</p>
        </div>                
                </>
            ))
        }
       

  </Carousel>;

   </>
  )
}

export default WeekCrousel
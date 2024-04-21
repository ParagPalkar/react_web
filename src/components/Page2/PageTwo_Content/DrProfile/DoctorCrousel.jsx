import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DoctorCard from './DoctorCard';

  
const DoctorCrousel = () => {
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

   
  return (
   <>
    <Carousel 
    focusOnSelect={true}
  ssr={true} // means to render carousel on server-side.
    infinite={true} 
    partialVisbile={true}   
    swipeable={true}
    autoPlay={true}
    autoPlaySpeed={2000}
    responsive={responsive}>

        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />

  </Carousel>;

   </>
  )
}

export default DoctorCrousel
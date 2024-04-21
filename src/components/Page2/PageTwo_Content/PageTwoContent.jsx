import React from 'react'
import Hero from './Hero'
import FilterInputs from './FilterInputs/FilterInputs'
import DrProfile from './DrProfile/DrProfile'

const PageTwoContent = () => {
  return (
    <>
        <div className="PageTwoContent">
            <Hero />
            <FilterInputs />
            <DrProfile />
        </div>
    </>
  )
}

export default PageTwoContent
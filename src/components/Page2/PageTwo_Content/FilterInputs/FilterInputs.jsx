import React from 'react'
import Expertise from './Expertise'
import Gender from './Gender'
import Fees from './Fees'
import FilterLanguage from './FilterLanguage'

const FilterInputs = () => {
  return (
    <>
        <div className="FilterInputs">
            <Expertise />
            <Gender />
            <Fees />
            <FilterLanguage />
        </div>
    </>
  )
}

export default FilterInputs
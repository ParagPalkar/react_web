import React from 'react'
import Appoinment from './Appoinment'
import Content from './Contents/Content'

const Page = () => {
  return (
    <>
        <div className="page">
            <Appoinment />
            <Content />
        </div>
    </>
  )
}

export default Page
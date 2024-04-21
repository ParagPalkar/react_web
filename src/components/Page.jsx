import React from 'react'
import Appoinment from './Appoinment'
import Content from './Contents/Content'
import Header from './Header'

const Page = () => {
  return (
    <>
            <Header />
              <div className="page">
              <Appoinment />
              <Content />
        </div>
    </>
  )
}

export default Page
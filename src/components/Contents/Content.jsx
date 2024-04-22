import React from 'react'
import Content1 from './Content1/Content1'
import Content2 from './Content2/Content2'

const Content = () => {
  return (
    <div className="content">
      <div className="colone">
        
        <Content1 />
      </div>
      <div className="coltwo">
        
      <Content2 />
      </div>
    </div>
  )
}

export default Content
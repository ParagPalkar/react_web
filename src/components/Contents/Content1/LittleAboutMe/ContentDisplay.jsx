import React from 'react'
import Languages from './Languages';
import Social from './Social';

const ContentDisplay = () => {
  const profile = { content: 'Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the ' };
  return (
    <>
      <div className="content-display">
        <p className="content-text">{profile.content}</p>
        <p>Read More...</p>
        {/* <Languages /> */}
        <Social />
      </div>

    </>
  )
}

export default ContentDisplay
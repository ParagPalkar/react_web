import React from 'react'

const ButtonFlex = () => {
    
    const btndata = [
        {title : 'Skin Treatment'},
        {title : 'Pregnancy'},
        {title : 'Period Doubts'},
        {title : 'Endometriosis'},
        {title : 'Pelvic Pain'},
        {title : 'Ovarian Cysts'},
        {title : '+ 5 More'},
    ]

  return (
      <>
      <div className="content-display buttondis">

            {
                btndata.map((data)=>(
                    <>
                        <p className="lang-text btns">{data.title}</p>
                    
                    </>
                ))
            }
            </div>
    </>
  )
}

export default ButtonFlex
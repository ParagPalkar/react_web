import React from 'react'

const SpecializeLogo = () => {

  const logos = [
    {title: "Women's Health",src : "/assets/women.png", alt : "women"},
    {title: "Skin Care",src : "/assets/skin.png", alt : "skin"},
    {title: "Immunity",src : "/assets/immunity.png", alt : "immunity"},
    {title: "Hair Care",src : "/assets/haircare.png", alt : "haircare"},
  ]

  return (
    <>
        <div className='specialize-logo' >
            {
              logos.map((logo,i)=> (
                <>
                <div className="single-logo-card">
                <img src={logo.src} alt={logo.alt} />
                <p className="stext">{logo.title}</p>
            </div>
            </>
              ))
            }
        </div>
    </>
  )
}

export default SpecializeLogo
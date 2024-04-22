import React from 'react'

const SpecializeLogo = () => {

  const logos = [
    {title: "Women's Health",src : "src/public/women.png", alt : "women"},
    {title: "Skin Care",src : "src/public/skin.png", alt : "skin"},
    {title: "Immunity",src : "src/public/immunity.png", alt : "immunity"},
    {title: "Hair Care",src : "src/public/haircare.png", alt : "haircare"},
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
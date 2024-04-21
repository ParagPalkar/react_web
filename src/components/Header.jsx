import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    
      <div className='header'>
        <div className='header-content'>
          <img src="public\image 45.png" alt="AMRUTAM" />
          <div className='navbar'>
            <NavLink to={"/"}>
              <h3 className='nav-items'>Home</h3>
            </NavLink> 
            <NavLink to={"/find"}>
            <h3 className='nav-items'>Find Doctor</h3>
            </NavLink> 

            <h3 className='nav-items'>About Us</h3>
          </div>
          <div className='btn'>
            <button className='btn login' >Login</button>
            <button className='btn signup' >Sign-up</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
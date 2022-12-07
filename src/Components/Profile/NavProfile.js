import React from 'react'
import logo from "./images/logo.png"
import "./NavProfile.css"

function NavProfile() {
  return (
    <div>
        <div className='rowNavbar'>
            <div style={{paddingBottom:"1em"}} className='column1Navbar'>
                <img src={logo} alt=""/>
            </div>
            <div className='column2Navbar'>Pull requests</div>
            <div className='column3Navbar'>Issues</div>
            <div className='column4Navbar'>Codespaces</div>
            <div className='column5Navbar'>Explore</div>
        </div>
    </div>
  )
}

export default NavProfile
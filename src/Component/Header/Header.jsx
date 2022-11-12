import React from 'react'
import './Header.css'

const Header = () => {
  return (
    
   
   
   <div className='header'>
        <div className='header-left'><h1>NETFLIX</h1></div>
        <div className='header-right'>
            <div className='header-right-select'>
                <select>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
            </div>
            <div className='header-right-button'><button>Sign In</button></div>
        </div>
    </div>
   
  )
}

export default Header
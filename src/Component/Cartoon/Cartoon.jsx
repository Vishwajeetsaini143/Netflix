import React from 'react'
import './Cartoon.css'
import cartoonimg from '../Images/cartonimg.png'
const Cartoon = () => {
  return (
    <div className='Cartoon'>
        <div className='Cartoon-left'>
            <img src={cartoonimg} alt=""/>
        </div>
        <div className='Cartoon-right'>
            <h1>Create profiles for<br/> children.</h1>
            <h2>Send children on adventures with their<br/>
             favourite characters in a space made<br/>
              just for them—free with your membership.</h2>
        </div>
    </div>
  )
}

export default Cartoon
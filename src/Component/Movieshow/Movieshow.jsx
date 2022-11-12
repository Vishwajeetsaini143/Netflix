import React from 'react'
import mobile from '../Images/mobile.jpg'
import  './Movieshow.css'
import icon from '../Images/icon.gif'
import boxmobile from '../Images/boxmoblie.png'
const Movieshow = () => {
  return (
    <div className='Movieshow'>
<div className='Movieshow-left'>
    <img src={mobile} alt=""/>
    <div className='Movie-sort-card' >
        <div className='book'><img src={boxmobile} alt=""/>
       <div> <h2>Stranger Things</h2>
        <h3>Downloading...</h3></div>
        </div>
        <div className='icon'><img src={icon}  alt=""/></div>
    </div>
</div>
<div className='Movieshow-right'>
    <h1>Download your shows<br/> to watch offline.</h1>
    <h3>Save your favourites easily and <br/>
    always have something to watch.</h3>
</div>

    </div>
  )
}

export default Movieshow
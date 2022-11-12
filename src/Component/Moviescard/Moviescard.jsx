import React from 'react'
import './Moviescard.css'
import  tv from '../Images/tv.png';



const Moviescard = () => {



  
  return (
    <div className='Moviecard'>
<div className='Moviecard-left'>
    <h1>Enjoy on your TV.</h1>
    <h2>Watch on smart TVs, PlayStation, Xbox,<br/>
     Chromecast, Apple TV, Blu-ray players<br/> and more.</h2>
</div>
<div className='Moviecard-right'>
    
    <img src={tv} alt=""/>
    <video class="our-story-card-video" data-uia="our-story-card-video" autoplay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/></video>
</div>

    </div>
  )
}

export default Moviescard
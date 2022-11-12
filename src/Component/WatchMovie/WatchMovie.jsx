import React from 'react'
import './WatchMovie.css'
import applecomputer from '../Images/applecomputer.png'
const WatchMovie = () => {
  return (
    <div className='WatchMovie'>
        <div className='WatchMovie-left'><h1>Watch everywhere.</h1>
        <h2>Stream unlimited movies and TV shows<br/> on
         your phone, tablet, laptop, and TV.</h2>
        </div>
        <div className='WatchMovie-right'>

            <img src={applecomputer} alt=""/>
            <video class="card-video" data-uia="our-story-card-video" autoplay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"/></video>
        </div>
    </div>
  )
}

export default WatchMovie
import React from 'react'

import './Home.css'
import '../Header/Header.css'
import backgroundimg from '../Images/backgroundimg.jpg'
import Moviescard from '../Moviescard/Moviescard'
import Movieshow from '../Movieshow/Movieshow'
import WatchMovie from '../WatchMovie/WatchMovie'
import Cartoon from '../Cartoon/Cartoon'
import Questions from '../Questions/Questions'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    
    <div>
    <div className='card-top-img'>
      <img src={backgroundimg} alt=""/>
      </div>
    <div className='Home'>
      <h1>Unlimited movies, TV shows and more.</h1>
      <h2>Watch anywhere. Cancel anytime.
</h2>
<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      
      <div className='search-box'><input placeholder='Email addres'/>
     <Link to="/movies"><button>Get Started</button></Link> 
      </div>
      
      </div>
      <Moviescard/>
      <Movieshow/>
      <WatchMovie/>
    <Cartoon/>
    <Questions/>
      </div>
  )
}

export default Home
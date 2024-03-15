import React from 'react'
import './hero.css'
import hand_icon from '../Asserts/hand_icon.png'
import arrow_icon from '../Asserts/arrow.png'
import hero_image from '../Asserts/group_br1.png'
const hero = () => {
  function scrollToTop() {
    window.scrollTo({
      top:700,
      behavior: "smooth" // Optional: smooth scrolling behavior
    });
  }
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
        <div className='hero-hand-icon'>
            <p>NEW</p>
            <img src={hand_icon} alt=""/>
        </div>
        <p>collection</p>
        <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
        <button className='button222' onClick={scrollToTop}>Latest collection <img src={arrow_icon} alt=''/></button>
      </div>
      </div>
      <div className='hero-right'>
        <img style={{height:"88%"}}src={hero_image} alt=""/>
      </div>
    </div>
  )
}

export default hero

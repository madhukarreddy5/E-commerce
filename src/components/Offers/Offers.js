import React from 'react'
import './Offers.css'
import exclusive_image from '../Asserts/exclusive_image.png'
const Offers = () => {
  function scrollToTop() {
    window.scrollTo({
      top:1915,
      behavior: "smooth" // Optional: smooth scrolling behavior
    });}
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='button22' onClick={scrollToTop}>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt=''/>
      </div>
    </div>
  )
}
export default Offers

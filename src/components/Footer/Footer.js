import React from 'react'
import './Footer.css'
import footer_logo from '../Asserts/logo_big.png'
import instagram_icon from "../Asserts/instagram_icon.png"
import pintester_icon from '../Asserts/linnkdinmain.png'
import whatsapp_icon from '../Asserts/whatsapp_icon.png'

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top:0,
      behavior: "smooth" // Optional: smooth scrolling behavior
    });
  }
  return (
    <div className='footer'>
      <div className='footer-logo'>
       <img src={footer_logo} onClick={scrollToTop} alt=""/>
          <p onClick={scrollToTop}>Banti's E-commerce</p>
      </div>
      
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <a href='https://www.instagram.com/banti_reddi?igsh=MXA1cjd3MnNnbGI2dQ==' target="blank"><img src={instagram_icon} alt=""/></a>
        </div>
        <div className='footer-icons-container'>
            <a href='https://www.linkedin.com/in/vancha-madhukar-reddy-755114237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="blank"><img src={pintester_icon}  height={31} width={31} alt=""/></a>
        </div>
        <div className='footer-icons-container'>
           <a href='https://wa.me/qr/JCMPP2HBSNUYL1' target='blank'> <img src={whatsapp_icon} alt=""/></a>
        </div>
      </div>
      <div  className='footer-copyright'>
        <hr/>
        <p>Copyright @2023-All Right Reserved</p>
      </div>
    </div>
  )
}
// 1:23
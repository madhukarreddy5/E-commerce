import React, { useState,useContext } from 'react'
import './Navbar.css'
import logo from '../Asserts/logo.png'
import cart_icon  from '../Asserts/cart_icon.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/Cartcontext'
export function Navbar()
{
  const {cartValue} = useContext(CartContext)
  const[menu,setmenu]=useState("")
  return (
    <div className='Navbar'>
        <div className='nav-logo'>
          <Link to='/Shop' style={{textDecoration:'none'}}><img src={logo}  onClick={()=>{setmenu("Shop")}} alt=""/></Link>
          <Link to='/Shop' style={{textDecoration:'none'}}><p onClick={()=>{setmenu("Shop")}}>Banti's E-commerce</p></Link>
          </div>
          <ul className='nav-menu'>
              <li onClick={()=>{setmenu("Shop")}}><Link style={{textDecoration:'none'}}  to='/Shop'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>setmenu("Men")}><Link style={{textDecoration:'none',color:'#626262'}}  to='/Men'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
             <li onClick={()=>setmenu("Women")}><Link style={{textDecoration:'none',color:'#626262'}}  to='/Women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li> 
            <li onClick={()=>setmenu("Kids")}><Link style={{textDecoration:'none',color:'#626262'}}  to='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
          </ul>   
          <div className='nav-login-cart'>
           <Link to='/'><button  onClick={()=>{setmenu("")}}>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className='nav-cart-count'>{cartValue.length}</div>
          </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import star_icon from "../Asserts/star_icon.png"
import star_dull_icon from "../Asserts/star_dull_icon.png"
import './Productdisplay.css'
import { useContext } from 'react'
import { CartContext } from '../Context/Cartcontext'
const Productdisplay = (props) => {
    const {product} =props;
    const {cartValue}=useContext(CartContext)
    const {setCartValue}=useContext(CartContext)
    const [size,setsize]=useState('')
    const [sizeerror,setsizeerror]=useState('')
    useEffect(() => {
      setsizeerror('')
  },[size]);
  function heloworld()
    {
      console.log("helooooo")
     // console.log(cartValue)
    }
  
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
        </div>
        <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon}alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-price-old'>${product.old_price}</div>
            <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
            A lightweight,usually Knitted,pullover shirt,Close-fitting and Brand logo printed Regular length Round neck Short, 
            regular sleeves Woven polyester fabric
        </div>
        <div>
            <h1>Select Size</h1>
            <div className='productdisplay-right-size'>
            <div><button onClick={()=>{setsize('S')}} className={size==='S'?'selected':''}>S</button></div>
            <div><button onClick={()=>{setsize('M')}}  className={size==='M'?'selected':''}>M</button></div>
            <div><button onClick={()=>{setsize('L')}} className={size==='L'?'selected':''}>L</button></div>
            <div><button onClick={()=>{setsize('XL')}} className={size==='XL'?'selected':''}>XL</button></div>
            <div><button onClick={()=>{setsize('XXL')}} className={size==='XXL'?'selected':''}>XXL</button></div>
            </div>
        </div>
        <p style={{color: "red"}}>{sizeerror}</p>
        <button 
   className={size === ''? 'button1' :'button'}
  onClick={() => {
    if (size === '') {
      setsizeerror("select the size");
      
    } else {
      // Check if an object with the same id and size is already present
      const existingItemIndex = cartValue.findIndex(item => item.id === product.id && item.size === size);
      if (existingItemIndex !== -1) {
        // If the item is already present, increase its quantity by 1
        const updatedCartValue = [...cartValue];
        updatedCartValue[existingItemIndex].qty++;
        setCartValue(updatedCartValue);
      } else {
        // If the item is not present, add a new object to the cart
        setCartValue(prev => [...prev, { id: product.id, size: size, qty: 1 }]);
      }
      heloworld();
    }
  }}
>
  ADD TO CART
</button>

        <p className='productdisplay-right-category'><span>Category :</span>new sale,T-Shirt,</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern,Latest</p>
      </div>
    </div>
  )
}

export default Productdisplay

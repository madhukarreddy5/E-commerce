// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../components/Context/Cartcontext';
import { ShopContext } from '../components/Context/ShopContext';
import Cartlayout from '../components/cartlayout/Cartlayout';
import emptycart from "../components/Asserts/empty_cart3.png"
import '../pages/Css/Cart.css'
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cartValue, setCartValue } = useContext(CartContext);
  const allProducts = useContext(ShopContext);

  const removeFromCart = (productId, size) => {
    setCartValue(prevCart => prevCart.filter(item => item.id !== productId || item.size !== size));
  };

  return (
    <>
    {
      cartValue.length===0?<div className='empty-cart'><img src={emptycart} alt=""/><p>Your cart is currently empty</p> <Link to='/Shop'><button>Back To Shop</button></Link></div>:
      <div>
      <h1>Cart Items:</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartValue.map((cartItem, index) => {
            const product = allProducts.find(product => product.id === cartItem.id);
            return (
              <Cartlayout
                key={index}
                id={cartItem.id}
                name={product.name} // Pass name from product
                image={product.image} // Pass image from product
                productId={cartItem.id}
                size={cartItem.size}
                qty={cartItem.qty}
                onRemove={() => removeFromCart(cartItem.id, cartItem.size)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
    }
    </>
    
  );
}

export default Cart;

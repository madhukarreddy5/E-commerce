// Cartlayout.js
import React from 'react';
import './Cartlayout.css';
import { Link } from 'react-router-dom';

const Cartlayout = (props) => {
  const handleRemove = () => {
    props.onRemove(props.productId, props.size);
  };

  return (
    <tr className='cart-item'>
      <td>
        <Link to={`/product/${props.id}`}>
          <img className='cart-item-image' src={props.image} alt={props.name} />
        </Link>
      </td>
      <td>{props.name}</td>
      <td>{props.size}</td>
      <td>{props.qty}</td>
      <td>
        <button className='cart-item-remove' style={{backgroundColor:'red', borderRadius:'5px', border:'none'}} onClick={handleRemove}>Remove</button>
      </td>
    </tr>
  );
}

export default Cartlayout;

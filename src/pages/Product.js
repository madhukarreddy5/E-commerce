import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import Productdisplay from '../components/Productdisplay/Productdisplay'
const Product = () => {
const all_product=useContext(ShopContext);
const {productid}=useParams();
const product = all_product.find((e)=>e.id===Number(productid));//since the root param will be in string format we need to convert root param to number and then compare
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product} />
    </div>
  )
}
export default Product

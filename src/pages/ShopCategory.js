import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import dropdown_icon from '../components/Asserts/dropdown_icon.png'
import Item from '../components/Items/Item'
import '../pages/Css/Shopcategory.css'
const ShopCategory = (props) => {
  const all_product =useContext(ShopContext);
  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className='shopcategory-indexsort'>
      <p>
        <span>Showing 1-12 </span>Out Of 36 Products
      </p>
      <div className='shopcategory-sort' >
        sort bye<img src={dropdown_icon} alt=''/>
      </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>
        {
          if(props.category===item.category)
            {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else
            {
              return null;
            }
        })
        }
      </div>
      <div className='shopcategory-loadmore'>
          Explore More
      </div>
    </div>
  )
}

export default ShopCategory

import React from 'react'
import data_product from '../Asserts/data'
import './Popular.css'
import Item from '../Items/Item'
const Popular = () => {
  return (
    <div>
      <div className='popular'>
        <h1>POPULAR IN MEN</h1>
        <hr/>
      </div>
      <div className='popular-item'>
        {data_product.map(
            (item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
        )}
      </div>
    </div>
  )
}

export default Popular

import React from 'react'
import New_collection from '../Asserts/new_collections'
import Item from '../Items/Item'
import './NewCollections.css'
const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW collection</h1>
        <hr/>
        <div className='collections'>
            {
            New_collection.map(
                (item,i)=>
            {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
export default NewCollections

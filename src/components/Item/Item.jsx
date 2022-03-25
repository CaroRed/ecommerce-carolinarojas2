import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function Item({product}) {
 
  const onAdd = (count) => {
    console.log('function on Add count is: ' + count)
  }
  
  return (
    <div className="col-md-3">
        <img src={product.image} className="img-fluid"/>
        <span className="d-block mb-3"><strong>{product.name}</strong></span>
        <span className="d-block mb-2">${product.price} USD</span>
        <span className="d-block"><ItemCount stock={product.stock} initial={1} onAdd={onAdd} /></span>
    </div>
  )
}

import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function Item({product}) {
 
  console.log(product);
  
  return (
    <div key={product.id} className="col-md-3">
        <img src={product.image} className="img-fluid"/>
        <span className="d-block mb-3"><strong>{product.name}</strong></span>
        <span className="d-block mb-2">${product.price} USD</span>
        <span className="d-block"><ItemCount stock={product.stock} initial={1} /></span>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({product}) {

  const [showButton, setButton] = useState('addToCart');

  const onAdd = (count) => {
    console.log('function on Add count is: ' + count)
    setButton('goToCart')
  }
  
  return (
    <div className="row">
      <div className="col-md-5"><img src={product.image} className="img-fluid" /></div>
      <div className="col-md-5 mt-5">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        {
          showButton === 'addToCart' ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
          :
          <Link to="/cart"><button className='btn btn-success'>Terminar mi compra</button></Link>
        }
      </div>
    </div>
  )
}

export default ItemDetail
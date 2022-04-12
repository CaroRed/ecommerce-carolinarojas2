import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Cart() {

  const {cartItems, removeItem, emptyCart} = useContext(CartContext)

  function eliminarItem(itemId){
    console.log(itemId);
    removeItem(itemId);
  }

  //console.log(cartItems.length);

  return (
    <div className='container mt-3'><h1>Cart</h1>
      <div className="table-responsive">
        <table className="table activitites">
        <thead>
          <tr>
            <th scope="col" className="text-uppercase header">item</th>
            <th scope="col" className="text-uppercase">Quantity</th>
            <th scope="col" className="text-uppercase">price each</th>
            <th scope="col" className="text-uppercase">total</th>
            <th scope="col" className="text-uppercase"></th>
          </tr>
        </thead>
        <tbody>
        { cartItems.length > 0 ?
        <>
        {cartItems.map(prod => 
          <tr key={prod.id}>
            <td className="item">#{prod.id} - {prod.name}  </td>
            <td>{prod.qty}</td>
            <td>{prod.price}</td>
            <td>{Math.round(prod.price * prod.qty)}</td>
            <td><button className='btn btn-small btn-warning' onClick={()=> eliminarItem(prod.id)}>Eliminar Item</button></td>
          </tr>)}
        </>
        :
        <tr><td colSpan="5">
          <p>Cart is empty.</p>
          
        </td></tr>
        }

      </tbody>
        </table>
      </div>
      { cartItems.length > 0 ?
      <button className='btn btn-danger mt-4' onClick={emptyCart}>Vaciar Carrito</button>      
      :
      <Link to="/"><button className='btn btn-success'>Ir a Productos</button></Link>
      }
    </div>
  )
}

export default Cart
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Cart() {

  const {cartItems, removeItem, emptyCart, getTotalCart} = useContext(CartContext)

  function eliminarItem(itemId){
    removeItem(itemId);
  }

  return (
    <div className='container mt-3'><h1>Cart</h1>
      <div className="table-responsive">
        <table className="table activitites">
          <thead>
            <tr>
              <th scope="col" className="text-uppercase header">item</th>
              <th scope="col" className="text-uppercase">Cantidad</th>
              <th scope="col" className="text-uppercase">Precio</th>
              <th scope="col" className="text-uppercase">Total</th>
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
            <tr><td colSpan="5"><p className='text-right'><b>TOTAL: {getTotalCart()}</b></p></td></tr>
          </>
          :
            <tr><td colSpan="5"><p>El carrito está vacío.</p></td></tr>
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
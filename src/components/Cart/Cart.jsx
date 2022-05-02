import { useContext, useState } from 'react'
import { query, where, collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css'

function Cart() {

  const {cartItems, removeItem, emptyCart, getTotalCart} = useContext(CartContext)

  const createOrder = async (e) => {
    e.preventDefault();

    let order = {}
    order.buyer = {name: "Carolina", email: "carorojas27@gmail.com", phone: "987654321"}
    order.total = getTotalCart();
    order.date = new Date().toLocaleString()

    order.items = cartItems.map(cartItem => {
      const id = cartItem.id
      const name = cartItem.name
      const price = cartItem.price * cartItem.qty

      return {id, name, price}
    })

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order)
    .then(({id}) => console.log(id))


  }

  function eliminarItem(itemId){
    removeItem(itemId);
  }

  // generar orden con firestore
  //{ buyer: { name, phone, email }, items: [{ id, title, price }], date, total  }


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
              <td className="item">{prod.name}</td>
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
      <div className='d-flex justify-content-center mt-4'>
      <button className='btn btn-danger' onClick={emptyCart}>Vaciar Carrito</button>    
      <button className='btn btn-warning btn-order' onClick={createOrder}>Enviar Orden</button>
      </div>  
      :
      <>
      <Link to="/"><button className='btn btn-success'>Ir a Productos</button></Link>
      
      
      </>

      }
    </div>
  )
}

export default Cart
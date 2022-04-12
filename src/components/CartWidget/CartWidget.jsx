import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import './CartWidget.css'

function CartWidget() {
  
  const {cartItems, getTotalItems} = useContext(CartContext)

    return (
      <div className="cartContainer"><NavLink to="/cart" className="nav-link"><i className="bi bi-basket"></i> 
      <span>({getTotalItems()})</span></NavLink></div>
    )
}

export default CartWidget
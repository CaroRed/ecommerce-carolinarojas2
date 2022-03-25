import { NavLink } from 'react-router-dom'
import './CartWidget.css'

function CartWidget() {
    return (
      <div className="cartContainer"><NavLink to="/cart" className="nav-link"><i className="bi bi-basket"></i></NavLink></div>
    )
}

export default CartWidget
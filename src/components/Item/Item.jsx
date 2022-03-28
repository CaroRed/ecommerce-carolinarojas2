import { Link } from 'react-router-dom'

export default function Item({product}) {

  return (
    <div className="col-md-3">
        <img src={product.image} className="img-fluid"/>
        <span className="d-block mb-3"><strong>{product.name}</strong></span>
        <span className="d-block mb-2">${product.price} USD</span>
        <p><Link to={`/detalle/${product.id}`} className='btn btn-warning'>Detalle del Producto</Link></p>
    </div>
  )
}

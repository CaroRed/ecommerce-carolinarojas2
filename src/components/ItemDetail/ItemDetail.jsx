
function ItemDetail({product}) {
  return (
    <div className="row">
      <div className="col-md-6"><img src={product.image} className="img-fluid" /></div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail
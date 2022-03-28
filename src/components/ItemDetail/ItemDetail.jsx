import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({product}) {

  const onAdd = (count) => {
    console.log('function on Add count is: ' + count)
  }
  
  return (
    <div className="row">
      <div className="col-md-5"><img src={product.image} className="img-fluid" /></div>
      <div className="col-md-5 mt-5">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <span className="d-block"><ItemCount stock={product.stock} initial={1} onAdd={onAdd} /></span>
      </div>
    </div>
  )
}

export default ItemDetail
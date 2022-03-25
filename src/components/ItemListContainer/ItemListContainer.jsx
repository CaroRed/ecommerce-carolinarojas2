import { useState, useEffect } from "react";
import {getProducts} from '../../helpers/getProducts'

import ItemList from '../ItemList/ItemList'

function ItemListContainer({greeting}) {

  const [products, SetProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      getProducts
      .then(resp => SetProducts(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  },[])

  return (
    <>
    <h2 className='mt-5 mb-3'>{greeting}</h2>
    <div className="container">
    
        <div className="row">
          {loading ? 
            <figure className="figure">
              <img src="/assets/images/spinner.gif" className="figure-img img-fluid" />
            </figure>
          :
          <ItemList products={products} />
          }
        </div>
    </div>
    </>
  )
}

export default ItemListContainer
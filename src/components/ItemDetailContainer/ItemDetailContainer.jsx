import { useState, useEffect } from "react";
import {getProducts} from '../../helpers/getProducts'

import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {

  const [product, SetProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      getProducts
      .then(resp => SetProduct(resp.find(product => product.id === '1')))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  },[])



    return (
      <div className="container w-50 mt-5">
       <hr /> 
      <ItemDetail product={product} />
      </div>
    )
  }
  
  export default ItemDetailContainer
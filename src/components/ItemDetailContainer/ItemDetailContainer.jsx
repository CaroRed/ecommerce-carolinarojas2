import { useState, useEffect } from "react";
import {getProducts} from '../../helpers/getProducts'
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

function ItemDetailContainer() {

  const [product, SetProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {detalleId} = useParams()

  useEffect(() => {
      getProducts
      .then(resp => SetProduct(resp.find(product => product.id === detalleId)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  },[])

    return (
      <div className="container mt-5">
        {loading ? 
          <Loading/> 
        : 
          <ItemDetail product={product} />
        }
      </div>
    )
  }
  
  export default ItemDetailContainer
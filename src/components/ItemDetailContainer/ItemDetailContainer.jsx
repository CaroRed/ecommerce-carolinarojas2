import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

function ItemDetailContainer() {

  const [product, SetProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {detalleId} = useParams()

  useEffect(()=>{
    const querydb = getFirestore()
    const queryProd = doc(querydb, 'items', detalleId)
    getDoc(queryProd)
    .then(resp => SetProduct({id: resp.id, ...resp.data()}))
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
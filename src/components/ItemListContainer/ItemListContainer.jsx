import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { query, where, collection, getDocs, getFirestore } from "firebase/firestore";

import ItemList from '../ItemList/ItemList'
import Loading from "../Loading/Loading";

function ItemListContainer({greeting}) {

  const [products, SetProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {catId} = useParams()
  
  useEffect(()=>{
    const querydb = getFirestore()
  if(catId) {
      const queryCollection = collection(querydb, 'items')
      const queryFilter = query(queryCollection, where('cat', '==', catId))
      getDocs(queryFilter)
      .then(resp => SetProducts(resp.docs.map(item => ({id: item.id, ...item.data()}))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    
  }else{
      const queryCollection = collection(querydb, 'items')
      getDocs(queryCollection)
      .then(resp => SetProducts(resp.docs.map(item => ({id: item.id, ...item.data()}))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }

},[catId])


  return (
    <>
    <h2 className='mt-5 mb-3'>{greeting}</h2>
    <div className="container">
        <div className="row">
          {loading ? 
            <Loading />
          :
          <ItemList products={products} />
          }
        </div>
    </div>
    </>
  )
}

export default ItemListContainer
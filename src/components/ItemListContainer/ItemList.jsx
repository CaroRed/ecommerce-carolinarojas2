import { useState, useEffect } from "react";
import {getProducts} from '../../helpers/getProducts'
import Item from "../Item/Item";


function ItemList(){
    const [products, SetProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProducts
        .then(resp => SetProducts(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

},[])

//console.log(products)

return(
    <div className="container">
        <div className="row">
            {loading ? 
            <h4>Cargando...</h4>
            : <>{products.map((product)=> <Item product={product}/>)}</>
            }
        </div>
    </div>
)

}

export default ItemList
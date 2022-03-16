import {useState} from 'react'
import ItemCount from '../components/ItemCount/ItemCount'

function ItemListContainer({greeting}) {

  return (
    <div><h3>{greeting}</h3>
    <ItemCount stock={5} initial={1} />
    </div>
  )
}

export default ItemListContainer
import {useState} from 'react'

import ItemList from '../ItemListContainer/ItemList'

function ItemListContainer({greeting}) {

  return (
    <>
    <h2 className='mt-5 mb-3'>{greeting}</h2>
    
    <ItemList />
    </>
  )
}

export default ItemListContainer
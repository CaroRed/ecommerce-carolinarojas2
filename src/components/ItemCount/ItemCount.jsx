import {Form, FormControl, InputGroup, Button} from 'react-bootstrap'
import { useState } from 'react';

import './ItemCount.css'

function ItemCount({stock, initial}) {

    const [count, setCount] = useState(initial);
    const limitStock = stock - 1;

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    const handleChange = (event) => {
        event.preventDefault();
        let updatedCount = parseInt(event.target.value);
        setCount(updatedCount);
    }

    const onAdd = () => {
        console.log(`Agregaste ${count} productos`);
      };

    return (
        <>
        <form className="addToCartForm">
        <InputGroup className="mb-3 count-container">
            <Button variant="outline-secondary" id="button-addon2" onClick={decreaseCount} disabled={count < 2 ? true : null}>-</Button>
            <input type="text" className="number" value={count} onChange={handleChange}></input>
            <Button variant="outline-secondary" id="button-addon1" onClick={incrementCount} disabled={count > limitStock ? true : null}>+</Button>
        </InputGroup>
        <Button variant="warning" type="button" className="addToCartBtn" onClick={onAdd} disabled={stock === 0 ? true : null}>Add to Cart</Button>
        </form>
        </>
    )
  }

export default ItemCount
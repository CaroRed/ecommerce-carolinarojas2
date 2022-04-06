import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

function CartContextProvider({defaultValue = [], children}){

    const[cartItems, setCart] = useState(defaultValue)

    function addItem(item){
        if(isInCart(item.id)){
            console.log('ya existe el item en el carro')
            //obtengo el product que existe
            const oldProduct = getFromList(item.id);
            //actualizo la cantidad
            const newQty = oldProduct.qty + item.qty;
            //armo el producto con la nueva cantidad
            const newProduct = {
                    id: item.id,
                    description: oldProduct.description,
                    cat: oldProduct.cat,
                    image: oldProduct.image,
                    name: oldProduct.name,
                    price: oldProduct.price,
                    qty: newQty,
                    stock: oldProduct.stock}
            //elimino el producto antiguo
            const removeOldItem = cartItems.filter(product => product.id !== item.id)
            //agrego el nuevo producto
            const cartNew = [...removeOldItem, newProduct]
            //lo agrego al carro
            setCart(cartNew)
        }else{
            setCart([...cartItems,item])
        }
        
        
    }

    function getFromList(id){
        return cartItems.find(obj => obj.id === id)
    }

    function isInCart(id){
        return id === undefined ? undefined : getFromList(id) !== undefined
    }

    function removeItem(itemId){
        const newCart = cartItems.filter(product => product.id !== itemId)
        setCart([...newCart]);
    }

    function emptyCart(){
        setCart([])
    }

    //console.log(cartItems)

    return(
        <CartContext.Provider value={{cartItems, addItem, removeItem, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
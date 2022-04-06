import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

/*context*/
import CartContextProvider from './context/CartContext';

/*Firebase*/
import { getFireStoreApp } from './firebase/config';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//getFireStoreApp

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <CartContextProvider>
            <NavBar />
            <Routes>
            <Route path="/"
            element={<ItemListContainer greeting='Listado de Productos' />}
            />
            <Route path="/categoria/:catId"
            element={<ItemListContainer greeting='Listado de Productos' />}
            />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}/>
            </Routes>
        </CartContextProvider>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

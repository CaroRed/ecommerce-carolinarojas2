import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
      
    </div>
  );
}

export default App;

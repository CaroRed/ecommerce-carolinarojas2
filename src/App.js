import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Soy ItemListContainer' />
    </div>
  );
}

export default App;

import NavBar from './components/NavBar/NavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Soy ItemListContianer' />
    </div>
  );
}

export default App;

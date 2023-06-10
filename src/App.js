import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import CategoryList from './Components/Categories/CategoryList/CategoryList';
import ProductList from './Components/Products/ProductList/ProductList';


function App() {
  return (
    <div >
      <Header />
      <ProductList />
    </div>
  );
}

export default App;

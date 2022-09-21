
import './App.css';
import Store from './components/Store';
import ProductsContextProvider from './contetxt/ProductsContextProvider';
function App() {
  return (
    <ProductsContextProvider>
      <Store />
      
    </ProductsContextProvider>
  );
}

export default App;
